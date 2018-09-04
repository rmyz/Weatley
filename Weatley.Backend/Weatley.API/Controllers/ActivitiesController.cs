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

    [Produces("application/json")]
    [Route("api/Activities")]
    public class ActivitiesController : Controller
    {
        private readonly WeatleyContext _context;

        public ActivitiesController(WeatleyContext context)
        {
            _context = context;
        }

        // GET: api/Activities
        [HttpGet]
        public IEnumerable<Activity> GetActivities()
        {
            return _context.Activities.Include(a => a.Hotel).OrderBy(a => a.StartHour);
        }

        // GET: api/Activities/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetActivity([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var activity = await _context.Activities.Include(a => a.Hotel)
                                                    .SingleOrDefaultAsync(m => m.Id == id);

            if (activity == null)
            {
                return NotFound();
            }

            return Ok(activity);
        }

        // PUT: api/Activities/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutActivity([FromRoute] Guid id, [FromBody] Activity activity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != activity.Id)
            {
                return BadRequest();
            }

            _context.Entry(activity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActivityExists(id))
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

        // POST: api/Activities
        [HttpPost]
        public async Task<IActionResult> PostActivity([FromBody] Activity activity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Activities.Add(activity);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetActivity", new { id = activity.Id }, activity);
        }

        // DELETE: api/Activities/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var activity = await _context.Activities.SingleOrDefaultAsync(m => m.Id == id);
            if (activity == null)
            {
                return NotFound();
            }

            _context.Activities.Remove(activity);
            await _context.SaveChangesAsync();

            return Ok(activity);
        }

        private bool ActivityExists(Guid id)
        {
            return _context.Activities.Any(e => e.Id == id);
        }
    }
}