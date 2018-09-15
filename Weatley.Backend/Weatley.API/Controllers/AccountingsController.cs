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
    [Route("api/Accountings")]
    public class AccountingsController : Controller
    {
        private readonly WeatleyContext _context;

        public AccountingsController(WeatleyContext context)
        {
            _context = context;
        }

        // GET: api/Accountings
        [HttpGet]
        public IEnumerable<Accounting> GetAccountings()
        {
            return _context.Accountings.Include(a => a.Customer).OrderByDescending(a => a.Date);
        }

        // GET: api/Accountings/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAccounting([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var accounting = await _context.Accountings.Include(a => a.Customer)
                                                       .SingleOrDefaultAsync(m => m.Id == id);

            if (accounting == null)
            {
                return NotFound();
            }

            return Ok(accounting);
        }

        // PUT: api/Accountings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccounting([FromRoute] Guid id, [FromBody] Accounting accounting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != accounting.Id)
            {
                return BadRequest();
            }

            _context.Entry(accounting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountingExists(id))
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

        // POST: api/Accountings
        [HttpPost]
        public async Task<IActionResult> PostAccounting([FromBody] Accounting accounting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.Customers.Attach(accounting.Customer);
            _context.Accountings.Add(accounting);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAccounting", new { id = accounting.Id }, accounting);
        }

        // DELETE: api/Accountings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccounting([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var accounting = await _context.Accountings.SingleOrDefaultAsync(m => m.Id == id);
            if (accounting == null)
            {
                return NotFound();
            }

            _context.Accountings.Remove(accounting);
            await _context.SaveChangesAsync();

            return Ok(accounting);
        }

        private bool AccountingExists(Guid id)
        {
            return _context.Accountings.Any(e => e.Id == id);
        }
    }
}