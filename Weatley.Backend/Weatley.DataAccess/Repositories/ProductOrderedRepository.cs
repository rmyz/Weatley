using System;
using System.Collections.Generic;
using System.Text;
using Weatley.DataAccess.Abstract;
using Weatley.Model.Entities;

namespace Weatley.DataAccess.Repositories
{
    public class ProductOrderedRepository : EntityBaseRepository<ProductOrdered>, IProductOrderedRepository
    {

        public ProductOrderedRepository(WeatleyContext context) : base (context) { }

    }
}
