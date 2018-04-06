using System;
using System.Collections.Generic;
using System.Text;
using Weatley.DataAccess.Abstract;
using Weatley.Model.Entities;

namespace Weatley.DataAccess.Repositories
{
    public class ReportRepository : EntityBaseRepository<Report>, IReportRepository
    {

        public ReportRepository(WeatleyContext context) : base (context) { }

    }
}
