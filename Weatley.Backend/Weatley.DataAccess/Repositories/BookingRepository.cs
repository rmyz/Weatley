using System;
using System.Collections.Generic;
using System.Text;
using Weatley.DataAccess.Abstract;
using Weatley.Model.Entities;

namespace Weatley.DataAccess.Repositories
{
    public class BookingRepository : EntityBaseRepository<Booking>, IBookingRepository
    {

        public BookingRepository(WeatleyContext context) : base (context) { }

    }
}
