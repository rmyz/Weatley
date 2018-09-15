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
    [Route("api/Reports")]
    public class ReportsController : Controller
    {
        private readonly WeatleyContext _context;
        private IHubContext<NotificationsPusher> HubContext { get; set; }

        public ReportsController(WeatleyContext context, IHubContext<NotificationsPusher> hub)
        {
            _context = context;
            HubContext = hub;
        }

        // GET: api/Reports
        [HttpGet]
        public IEnumerable<Report> GetReports()
        {
            return _context.Reports.Include(r => r.Customer).OrderByDescending(r => r.Date);
        }

        // GET: api/Reports/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReport([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var report = await _context.Reports.Include(r => r.Customer)
                                               .SingleOrDefaultAsync(m => m.Id == id);

            if (report == null)
            {
                return NotFound();
            }

            return Ok(report);
        }

        // PUT: api/Reports/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReport([FromRoute] Guid id, [FromBody] Report report)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != report.Id)
            {
                return BadRequest();
            }

            _context.Entry(report).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReportExists(id))
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

        // POST: api/Reports
        [HttpPost]
        public async Task<IActionResult> PostReport([FromBody] Report report)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await HubContext.Clients.All.SendAsync("sendToAllReport", report);

            _context.Customers.Attach(report.Customer);

            _context.Reports.Add(report);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReport", new { id = report.Id }, report);
        }

        // DELETE: api/Reports/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReport([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var report = await _context.Reports.SingleOrDefaultAsync(m => m.Id == id);
            if (report == null)
            {
                return NotFound();
            }

            _context.Reports.Remove(report);
            await _context.SaveChangesAsync();

            return Ok(report);
        }

        private bool ReportExists(Guid id)
        {
            return _context.Reports.Any(e => e.Id == id);
        }
    }
}