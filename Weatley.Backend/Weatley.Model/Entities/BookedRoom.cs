using System;
using System.Collections.Generic;
using System.Text;

namespace Weatley.Model.Entities
{
    public class BookedRoom : IEntityBase
    {
        public Guid Id { get; set; }
        //Relation with Room
        public Guid RoomId { get; set; }
        public Room Room { get; set; }

        //Relation with Booking
        public Guid BookingId { get; set; }
        public Booking Booking { get; set; }
    }
}
