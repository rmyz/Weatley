using System;
using System.Collections.Generic;
using System.Text;

namespace Weatley.Model.Entities
{
    public class ProductOrdered : IEntityBase
    {
        public Guid Id { get; set; }
        public int Quantity { get; set; }
        public string Comments { get; set; }
        public double Price { get; set; }


        //Relation with Product
        public Guid ProductId { get; set; }
        public Product Product { get; set; }

        //Relation with Order
        public Guid OrderId { get; set; }
        public Order Order { get; set; }
    }
}
