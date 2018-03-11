using System;
using System.Collections.Generic;
using System.Text;
using Weatley.Model.Enums;

namespace Weatley.Model.Entities
{
    public class Room : IEntityBase
    {
        public Guid Id { get; set; }
        public int RoomNumber { get; set; }
        public int FloorNumber { get; set; }
        public RoomTypeEnum RoomType { get; set; }
    }
}
