using System;
using System.Collections.Generic;
using System.Text;
using Weatley.Model.Enums;

namespace Weatley.Model.Entities
{
    public class Accounting : IEntityBase
    {
        public Guid Id { get; set; }
        public double FinalPrice { get; set; }
        public DateTime Date { get; set; }
        public PaymentTypeEnum PaymentType { get; set; }
        public Customer Customer { get; set; }

    }
}
