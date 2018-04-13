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
            Clients.All.InvokeAsync("sendToAllReport", report);
        }
        public void sendToAllOrder(Order order)
        {
            Clients.All.InvokeAsync("sendToAllOrder", order);
        }
    }
}
