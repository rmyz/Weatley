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
    [Route("api/ProductOrdereds")]
    public class ProductOrderedsController : Controller
    {
        private readonly WeatleyContext _context;

        public ProductOrderedsController(WeatleyContext context)
        {
            _context = context;
        }

        // GET: api/ProductOrdereds
        [HttpGet]
        public IEnumerable<ProductOrdered> GetProductsOrdered()
        {
            return _context.ProductsOrdered.Include(po => po.Order)
                                           .Include(po => po.Product);
        }

        // GET: api/ProductOrdereds/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductOrdered([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productOrdered = await _context.ProductsOrdered.Include(po => po.Order)
                                                               .Include(po => po.Product)
                                                               .SingleOrDefaultAsync(m => m.OrderId == id);

            if (productOrdered == null)
            {
                return NotFound();
            }

            return Ok(productOrdered);
        }

        // PUT: api/ProductOrdereds/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductOrdered([FromRoute] Guid id, [FromBody] ProductOrdered productOrdered)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productOrdered.OrderId)
            {
                return BadRequest();
            }

            _context.Entry(productOrdered).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductOrderedExists(id))
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

        // POST: api/ProductOrdereds
        [HttpPost]
        public async Task<IActionResult> PostProductOrdered([FromBody] ProductOrdered productOrdered)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ProductsOrdered.Add(productOrdered);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ProductOrderedExists(productOrdered.OrderId))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetProductOrdered", new { id = productOrdered.OrderId }, productOrdered);
        }

        // DELETE: api/ProductOrdereds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductOrdered([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productOrdered = await _context.ProductsOrdered.SingleOrDefaultAsync(m => m.OrderId == id);
            if (productOrdered == null)
            {
                return NotFound();
            }

            _context.ProductsOrdered.Remove(productOrdered);
            await _context.SaveChangesAsync();

            return Ok(productOrdered);
        }

        private bool ProductOrderedExists(Guid id)
        {
            return _context.ProductsOrdered.Any(e => e.OrderId == id);
        }
    }
}