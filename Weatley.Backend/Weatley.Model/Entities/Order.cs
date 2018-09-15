using System;
using System.Collections.Generic;
using System.Text;

namespace Weatley.Model.Entities
{
    public class Order : IEntityBase
    {
        public Guid Id { get; set; }
        public double FinalPrice { get; set; }
        public string Comment { get; set; }
        public DateTime OrderDate { get; set; }
        public Customer Customer { get; set; }
        public string Status { get; set; }
        public string StatusComment { get; set; }
        public string signalRId { get; set; }

        //Relation with Product
        public ICollection<ProductOrdered> ProductsOrdered { get; set; }
    }
}
