using System;
using System.Collections.Generic;
using System.Text;
using Weatley.DataAccess.Abstract;
using Weatley.Model.Entities;

namespace Weatley.DataAccess.Repositories
{
    public class BookedRoomRepository : EntityBaseRepository<BookedRoom>, IBookedRoomRepository
    {

        public BookedRoomRepository(WeatleyContext context) : base(context) { }

    }
}
