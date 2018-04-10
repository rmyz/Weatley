using Microsoft.AspNetCore.SignalR;
using Weatley.Model.Entities;

namespace Weatley.Backend.Core
{
    public class NotificationsPusher : Hub
    {
        public void sendToAllReport(Report report)
        {
            Clients.All.SendAsync("sendToAllReport", report);
        }
        public void sendToAllOrder(Order order)
        {
            Clients.All.SendAsync("sendToAllOrder", order);
        }
    }
}
