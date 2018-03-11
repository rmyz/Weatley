using System;
using System.Collections.Generic;
using System.Text;

namespace Weatley.Model.Entities
{
    public class Customer :  IEntityBase
    {
        public Customer()
        {
            Bookings = new List<Booking>();
            Orders = new List<Order>();
            Accountings = new List<Accounting>();
            Reports = new List<Report>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string DNI { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }

        
        //Relation with Booking
        public ICollection<Booking> Bookings { get; set; }

        //Relation with Order
        public ICollection<Order> Orders { get; set; }

        //Relation with Accounting
        public ICollection<Accounting> Accountings { get; set; }

        //Relation with Report
        public ICollection<Report> Reports { get; set; }

    }
}
