using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Weatley.API.Models
{
    public class GuestViewModel
    {
            [Required]
            [Display(Name = "Id")]
            public Guid? Id { get; set; }

    }
}
