using System;
using System.Collections.Generic;
using System.Text;

namespace Weatley.Model.Entities
{
    public class Hotel : IEntityBase
    {
        public Hotel()
        {
            Activities = new List<Activity>();
            Services = new List<Service>();
            Products = new List<Product>();
            Users = new List<User>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Website { get; set; }

        //Relation with Activities
        public ICollection<Activity> Activities { get; set; }

        //Relation with Services
        public ICollection<Service> Services { get; set; }

        //Relation with Products
        public ICollection<Product> Products { get; set; }

        //Relation with Users
        public ICollection<User> Users { get; set; }

    }
}
