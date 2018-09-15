using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using Weatley.Model.Entities;

namespace Weatley.API.Core
{
    [AllowAnonymous]
    public class NotificationsPusher : Hub
    {
        public async Task sendToAllReport(Report report)
        {
           await Clients.All.SendAsync("sendToAllReport", report);
        }
        public async Task sendToAllOrder(Order order)
        {
            await Clients.All.SendAsync("sendToAllOrder", order);
        }
    }
}
