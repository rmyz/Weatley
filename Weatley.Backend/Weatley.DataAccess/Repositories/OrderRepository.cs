using System;
using System.Collections.Generic;
using System.Text;
using Weatley.DataAccess.Abstract;
using Weatley.Model.Entities;

namespace Weatley.DataAccess.Repositories
{
    public class OrderRepository : EntityBaseRepository<Order>, IOrderRepository
    {

        public OrderRepository(WeatleyContext context) : base (context) { }

    }
}
