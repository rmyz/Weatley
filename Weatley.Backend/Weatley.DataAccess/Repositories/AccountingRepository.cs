using System;
using System.Collections.Generic;
using System.Text;
using Weatley.DataAccess.Abstract;
using Weatley.Model.Entities;

namespace Weatley.DataAccess.Repositories
{
    public class AccountingRepository : EntityBaseRepository<Accounting>, IAccountingRepository
    {
        public AccountingRepository(WeatleyContext context) : base(context) { }

    }
}
