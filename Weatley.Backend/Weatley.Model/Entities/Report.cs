using System;
using System.Collections.Generic;
using System.Text;
using Weatley.Model.Enums;

namespace Weatley.Model.Entities
{
    public class Report : IEntityBase
    {
        public Guid Id { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public Customer Customer { get; set; }
    }
}
