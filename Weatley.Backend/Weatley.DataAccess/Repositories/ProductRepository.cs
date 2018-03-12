using System;
using System.Collections.Generic;
using System.Text;
using Weatley.DataAccess.Abstract;
using Weatley.Model.Entities;

namespace Weatley.DataAccess.Repositories
{
    public class ProductRepository : EntityBaseRepository<Product>, IProductRepository
    {

        public ProductRepository(WeatleyContext context) : base (context) { }

    }
}
