using System;
using System.Collections.Generic;
using System.Text;
using Weatley.Model.Enums;

namespace Weatley.Model.Entities
{
     public class User : IEntityBase
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public UserTypeEnum UserType { get; set; }
        public string Name { get; set; }
    }
}
