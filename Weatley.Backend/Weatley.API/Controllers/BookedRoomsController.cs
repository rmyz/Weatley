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
    [Route("api/BookedRooms")]
    public class BookedRoomsController : Controller
    {
        private readonly WeatleyContext _context;

        public BookedRoomsController(WeatleyContext context)
        {
            _context = context;
        }

        // GET: api/BookedRooms
        [HttpGet]
        public IEnumerable<BookedRoom> GetBookedRooms()
        {
            return _context.BookedRooms.Include(br => br.Booking)
                                       .Include(br => br.Room);
        }

        // GET: api/BookedRooms/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBookedRoom([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var bookedRoom = await _context.BookedRooms.Include(br => br.Booking)
                                       .Include(br => br.Room)
                                       .SingleOrDefaultAsync(m => m.BookingId == id);

            if (bookedRoom == null)
            {
                return NotFound();
            }

            return Ok(bookedRoom);
        }

        // PUT: api/BookedRooms/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookedRoom([FromRoute] Guid id, [FromBody] BookedRoom bookedRoom)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bookedRoom.BookingId)
            {
                return BadRequest();
            }

            _context.Entry(bookedRoom).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookedRoomExists(id))
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

        // POST: api/BookedRooms
        [HttpPost]
        public async Task<IActionResult> PostBookedRoom([FromBody] BookedRoom bookedRoom)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.BookedRooms.Add(bookedRoom);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BookedRoomExists(bookedRoom.BookingId))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBookedRoom", new { id = bookedRoom.BookingId }, bookedRoom);
        }

        // DELETE: api/BookedRooms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookedRoom([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var bookedRoom = await _context.BookedRooms.SingleOrDefaultAsync(m => m.BookingId == id);
            if (bookedRoom == null)
            {
                return NotFound();
            }

            _context.BookedRooms.Remove(bookedRoom);
            await _context.SaveChangesAsync();

            return Ok(bookedRoom);
        }

        private bool BookedRoomExists(Guid id)
        {
            return _context.BookedRooms.Any(e => e.BookingId == id);
        }
    }
}