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
    [Route("api/Bookings")]
    public class BookingsController : Controller
    {
        private readonly WeatleyContext _context;

        public BookingsController(WeatleyContext context)
        {
            _context = context;
        }

        // GET: api/Bookings
        [HttpGet]
        public IEnumerable<Booking> GetBookings()
        {
            return _context.Bookings.Include(b => b.Customer)
                                    .Include(b => b.BookedRooms)
                                        .ThenInclude(br => br.Room)
                                        .OrderByDescending(b => b.StartingDate);
        }

        // GET: api/Bookings/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBooking([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var booking = await _context.Bookings.Include(b => b.Customer)
                                                 .Include(b => b.BookedRooms)
                                                    .ThenInclude(br => br.Room)
                                                 .SingleOrDefaultAsync(m => m.Id == id);

            if (booking == null)
            {
                return NotFound();
            }

            return Ok(booking);
        }

        // PUT: api/Bookings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBooking([FromRoute] Guid id, [FromBody] Booking booking)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != booking.Id)
            {
                return BadRequest();
            }

            _context.Entry(booking).State = EntityState.Modified;
            Console.WriteLine(booking);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookingExists(id))
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

        // POST: api/Bookings
        [HttpPost]
        public async Task<IActionResult> PostBooking([FromBody] Booking booking)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            List<Room> temp = new List<Room>();

            foreach (var room in booking.BookedRooms)
            {
                temp.Add(room.Room);
            }

            _context.Rooms.AttachRange(temp);
            _context.Customers.Attach(booking.Customer);
            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBooking", new { id = booking.Id }, booking);
        }

        // DELETE: api/Bookings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBooking([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var booking = await _context.Bookings.SingleOrDefaultAsync(m => m.Id == id);
            if (booking == null)
            {
                return NotFound();
            }

            _context.Bookings.Remove(booking);
            await _context.SaveChangesAsync();

            return Ok(booking);
        }

        private bool BookingExists(Guid id)
        {
            return _context.Bookings.Any(e => e.Id == id);
        }
    }
}