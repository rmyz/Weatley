using System;
using System.Collections.Generic;
using System.Text;
using Weatley.DataAccess.Abstract;
using Weatley.Model.Entities;

namespace Weatley.DataAccess.Repositories
{
    public class CustomerRepository : EntityBaseRepository<Customer>, ICustomerRepository
    {

        public CustomerRepository(WeatleyContext context) : base (context) { }

    }
}
