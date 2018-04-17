using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Weatley.Model.Entities;

namespace Weatley.Backend.Core
{
    [AllowAnonymous]
    public class NotificationsPusher : Hub
    {
        public void sendToAllReport(Report report)
        {
            Clients.All.SendAsync("sendToAllReport", report, Context.ConnectionId);
        }
        public void sendToAllOrder(Order order)
        {
            Clients.All.SendAsync("sendToAllOrder", order, Context.ConnectionId);
        }
    }
}
