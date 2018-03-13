using System;
using System.Collections.Generic;
using System.Text;
using Weatley.Model.Enums;

namespace Weatley.Model.Entities
{
    public class Product : IEntityBase
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public ProductTypeEnum ProductType { get; set; }
        public Boolean? Available { get; set; }
        public Hotel Hotel { get; set; }

        //Relation with Order
        public ICollection<ProductOrdered> ProductsOrdered { get; set; }

    }
}
