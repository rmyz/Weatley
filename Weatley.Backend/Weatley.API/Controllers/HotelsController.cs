using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Weatley.DataAccess;
using Weatley.Model.Entities;

namespace Weatley.API.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/Hotels")]
    public class HotelsController : Controller
    {
        private readonly WeatleyContext _context;

        public HotelsController(WeatleyContext context)
        {
            _context = context;
        }

        // GET: api/Hotels
        [HttpGet]
        public IEnumerable<Hotel> GetHotels()
        {
            return _context.Hotels.Include(h => h.Activities)
                                  .Include(h => h.Rooms)
                                  .Include(h => h.Services)
                                  .Include(h => h.Users)
                                  .Include(h => h.Products);
        }

        // GET: api/Hotels/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetHotel([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var hotel = await _context.Hotels.Include(h => h.Activities)
                                             .Include(h => h.Rooms)
                                             .Include(h => h.Services)
                                             .Include(h => h.Users)
                                             .Include(h => h.Products)
                                             .SingleOrDefaultAsync(m => m.Id == id);

            if (hotel == null)
            {
                return NotFound();
            }

            return Ok(hotel);
        }

        // PUT: api/Hotels/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHotel([FromRoute] Guid id, [FromBody] Hotel hotel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != hotel.Id)
            {
                return BadRequest();
            }

            _context.Entry(hotel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HotelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Hotels
        [HttpPost]
        public async Task<IActionResult> PostHotel([FromBody] Hotel hotel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Hotels.Add(hotel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHotel", new { id = hotel.Id }, hotel);
        }

        // DELETE: api/Hotels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHotel([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var hotel = await _context.Hotels.SingleOrDefaultAsync(m => m.Id == id);
            if (hotel == null)
            {
                return NotFound();
            }

            _context.Hotels.Remove(hotel);
            await _context.SaveChangesAsync();

            return Ok(hotel);
        }

        private bool HotelExists(Guid id)
        {
            return _context.Hotels.Any(e => e.Id == id);
        }
    }
}