using System;
using System.Collections.Generic;
using System.Text;
using Weatley.DataAccess.Abstract;
using Weatley.Model.Entities;

namespace Weatley.DataAccess.Repositories
{
    public class HotelRepository : EntityBaseRepository<Hotel>, IHotelRepository
    {

        public HotelRepository(WeatleyContext context) : base (context) { }

    }
}
