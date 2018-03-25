using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using Weatley.Model.Enums;

namespace Weatley.Model.Entities
{
     public class User : IdentityUser
    {
        public UserTypeEnum UserType { get; set; }
        public string Name { get; set; }
        public Hotel Hotel { get; set; }
    }
}
