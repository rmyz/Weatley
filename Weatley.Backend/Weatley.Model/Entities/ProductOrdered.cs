using System;
using System.Collections.Generic;
using System.Text;

namespace Weatley.Model.Entities
{
    public class ProductOrdered : IEntityBase
    {
        public ProductOrdered()
        {
            Products = new List<Product>();
        }

        public Guid Id { get; set; }
        public int Quantity { get; set; }
        public string Comments { get; set; }
        public double Price { get; set; }


        //Relation with Product
        public Guid ProductId { get; set; }
        public ICollection<Product> Products { get; set; } // Not sure if we should have collection or just one item

        //Relation with Order
        public Guid OrderId { get; set; }
        public Order Order { get; set; }
    }
}
