using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Weatley.API.Core;
using Weatley.DataAccess;
using Weatley.Model.Entities;

namespace Weatley.API.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/Orders")]
    public class OrdersController : Controller
    {
        private readonly WeatleyContext _context;
        private IHubContext<NotificationsPusher> HubContext { get; set; }

        public OrdersController(WeatleyContext context, IHubContext<NotificationsPusher> hub)
        {
            _context = context;
            HubContext = hub;
        }

        // GET: api/Orders
        [HttpGet]
        public IEnumerable<Order> GetOrders()
        {
            return _context.Orders.Include(o => o.Customer)
                                  .Include(o => o.ProductsOrdered)
                                    .ThenInclude(po => po.Product)
                                    .OrderByDescending(o => o.OrderDate); 
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrder([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var order = await _context.Orders.Include(o => o.Customer)
                                             .Include(o => o.ProductsOrdered)
                                                .ThenInclude(po => po.Product)
                                             .SingleOrDefaultAsync(m => m.Id == id);

            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }

        // PUT: api/Orders/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder([FromRoute] Guid id, [FromBody] Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != order.Id)
            {
                return BadRequest();
            }

            _context.Entry(order).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
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

        // POST: api/Orders
        [HttpPost]
        public async Task<IActionResult> PostOrder([FromBody] Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await HubContext.Clients.All.SendAsync("sendToAllOrder", order);

            foreach (var product in order.ProductsOrdered)
            {
                _context.Products.Attach(product.Product);
            }

            _context.Customers.Attach(order.Customer);
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrder", new { id = order.Id }, order);
        }

        // DELETE: api/Orders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var order = await _context.Orders.SingleOrDefaultAsync(m => m.Id == id);
            if (order == null)
            {
                return NotFound();
            }

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();

            return Ok(order);
        }

        private bool OrderExists(Guid id)
        {
            return _context.Orders.Any(e => e.Id == id);
        }
    }
}