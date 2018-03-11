using System;
using System.Collections.Generic;
using System.Text;

namespace Weatley.Model.Entities
{
    public class Activity : IEntityBase
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartHour { get; set; }
        public DateTime EndHour { get; set; }
    
    }
}
