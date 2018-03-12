using System;
using System.Collections.Generic;
using System.Text;

namespace Weatley.Model.Entities
{
    public class Booking : IEntityBase
    {
        public Guid Id { get; set; }
        public DateTime StartingDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Comment { get; set; }
        public double Price { get; set; }

        //Relation with Room
        public ICollection<BookedRoom> BookedRooms { get; set; }
    }
}
