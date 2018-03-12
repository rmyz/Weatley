using System;
using System.Collections.Generic;
using System.Text;
using Weatley.DataAccess.Abstract;
using Weatley.Model.Entities;

namespace Weatley.DataAccess.Repositories
{
    public class ServiceRepository : EntityBaseRepository<Service>, IServiceRepository
    {

        public ServiceRepository(WeatleyContext context) : base (context) { }

    }
}
