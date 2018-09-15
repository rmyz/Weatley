using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Weatley.Backend.Filters;
using Weatley.API.Models;
using Weatley.DataAccess;
using Weatley.Model.Entities;

namespace Weatley.API.Controllers
{

    [Route("api/Auth")]
    public class AuthController : Controller
    {
        private readonly WeatleyContext _context;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly RoleManager<Role> _roleManager;
        private IPasswordHasher<User> _passwordHasher;
        private IConfiguration _configurationRoot;
        private ILogger<AuthController> _logger;

        public AuthController(UserManager<User> userManager,
                SignInManager<User> signInManager,
                RoleManager<Role> roleManager,
                IPasswordHasher<User> passwordHasher,
                IConfiguration configurationRoot,
                ILogger<AuthController> logger,
                WeatleyContext context
            )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _logger = logger;
            _passwordHasher = passwordHasher;
            _configurationRoot = configurationRoot;
            _context = context;

        }

        [AllowAnonymous]
        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var user = new User()
            {
                UserName = model.UserName,
                Name = model.Name,
                Surname = model.Surname,
                UserType = model.UserType,
                Email = model.Email
            };
            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                return Ok(result);
            }
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError("error", error.Description);
            }
            return BadRequest(result.Errors);
        }

        [ValidateForm]
        [HttpPost("CreateToken")]
        [Route("token")]
        public async Task<IActionResult> CreateToken([FromBody] LoginViewModel model)
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(model.Email);
                if (user == null)
                {
                    return Unauthorized();
                }
                if (_passwordHasher.VerifyHashedPassword(user, user.PasswordHash, model.Password) == PasswordVerificationResult.Success)
                {
                    var userClaims = await _userManager.GetClaimsAsync(user);

                    var claims = new[]
                    {
                          new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                          new Claim(JwtRegisteredClaimNames.Email, user.Email),
                          new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                          new Claim(JwtRegisteredClaimNames.Sub, user.Name),
                          new Claim(JwtRegisteredClaimNames.Sub, user.Surname),
                          new Claim(JwtRegisteredClaimNames.Sub, user.UserType)


                        }.Union(userClaims);

                    var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configurationRoot["JwtSecurityToken:Key"]));
                    var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

                    var jwtSecurityToken = new JwtSecurityToken(
                      issuer: _configurationRoot["JwtSecurityToken:Issuer"],
                      audience: _configurationRoot["JwtSecurityToken:Audience"],
                      claims: claims,
                      expires: DateTime.UtcNow.AddYears(10),
                      signingCredentials: signingCredentials
                      );

                    return Ok(new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken),
                        expiration = jwtSecurityToken.ValidTo,
                        Claims = jwtSecurityToken.Claims
                    });
                }
                return Unauthorized();
            }
            catch (Exception ex)
            {
                _logger.LogError($"error while creating token: {ex}");
                return StatusCode((int)HttpStatusCode.InternalServerError, "error while creating token");
            }
        }

        [AllowAnonymous]
        [HttpPost("CreateGuestToken")]
        [Route("guestToken")]
        public async Task<IActionResult> CreateGuestToken([FromBody] GuestViewModel model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var customer = await _context.Customers
                    .Include(o => o.Bookings)
                    .SingleOrDefaultAsync(m => m.Id == model.Id);

                var tokenDays = (customer.Bookings.FirstOrDefault().EndDate - customer.Bookings.FirstOrDefault().StartingDate).TotalDays;

                var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configurationRoot["JwtSecurityToken:Key"]));
                var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

                var jwtSecurityToken = new JwtSecurityToken(
                    issuer: _configurationRoot["JwtSecurityToken:Issuer"],
                    audience: _configurationRoot["JwtSecurityToken:Audience"],
                    expires: DateTime.UtcNow.AddDays(tokenDays),
                    signingCredentials: signingCredentials
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken),
                    expiration = jwtSecurityToken.ValidTo,
                });
            }
            catch (Exception ex)
            {
                _logger.LogError($"error while creating token: {ex}");
                return StatusCode((int)HttpStatusCode.InternalServerError, "error while creating token");
            }
        }
    }
}