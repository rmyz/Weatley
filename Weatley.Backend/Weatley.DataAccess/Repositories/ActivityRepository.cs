using System;
using System.Collections.Generic;
using System.Text;
using Weatley.DataAccess.Abstract;
using Weatley.Model.Entities;

namespace Weatley.DataAccess.Repositories
{
    public class ActivityRepository : EntityBaseRepository<Activity>, IActivityRepository
    {

        public ActivityRepository(WeatleyContext context) : base(context) { }

    }
}
