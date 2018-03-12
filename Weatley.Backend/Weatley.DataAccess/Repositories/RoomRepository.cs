using System;
using System.Collections.Generic;
using System.Text;
using Weatley.DataAccess.Abstract;
using Weatley.Model.Entities;

namespace Weatley.DataAccess.Repositories
{
    public class RoomRepository : EntityBaseRepository<Room>, IRoomRepository
    {

        public RoomRepository(WeatleyContext context) : base (context) { }

    }
}
