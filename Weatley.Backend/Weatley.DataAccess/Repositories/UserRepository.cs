using System;
using System.Collections.Generic;
using System.Text;
using Weatley.DataAccess.Abstract;
using Weatley.Model.Entities;

namespace Weatley.DataAccess.Repositories
{
    public class UserRepository : EntityBaseRepository<User>, IUserRepository
    {

        public UserRepository(WeatleyContext context) : base (context) { }

    }
}
