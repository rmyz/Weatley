using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Weatley.Model.Entities
{
    public class Role : IdentityRole
    {
        public string description { get; set; }
    }
}
