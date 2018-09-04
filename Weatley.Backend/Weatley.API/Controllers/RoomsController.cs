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
    [Route("api/Rooms")]
    public class RoomsController : Controller
    {
        private readonly WeatleyContext _context;

        public RoomsController(WeatleyContext context)
        {
            _context = context;
        }

        // GET: api/Rooms
        [HttpGet]
        public IEnumerable<Room> GetRooms()
        {
            return _context.Rooms.Include(r => r.BookedRooms).OrderBy(r => r.RoomNumber);
        }

        // GET: api/Rooms/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRoom([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var room = await _context.Rooms.Include(r => r.BookedRooms)
                                           .Include(r => r.Hotel)
                                           .SingleOrDefaultAsync(m => m.Id == id);

            if (room == null)
            {
                return NotFound();
            }

            return Ok(room);
        }

        // PUT: api/Rooms/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoom([FromRoute] Guid id, [FromBody] Room room)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != room.Id)
            {
                return BadRequest();
            }

            _context.Entry(room).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoomExists(id))
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

        // POST: api/Rooms
        [HttpPost]
        public async Task<IActionResult> PostRoom([FromBody] Room room)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Rooms.Add(room);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRoom", new { id = room.Id }, room);
        }

        // DELETE: api/Rooms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoom([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var room = await _context.Rooms.SingleOrDefaultAsync(m => m.Id == id);
            if (room == null)
            {
                return NotFound();
            }

            _context.Rooms.Remove(room);
            await _context.SaveChangesAsync();

            return Ok(room);
        }

        private bool RoomExists(Guid id)
        {
            return _context.Rooms.Any(e => e.Id == id);
        }
    }
}