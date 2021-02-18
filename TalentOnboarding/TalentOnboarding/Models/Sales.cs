using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace TalentOnboarding.Models
{
    public partial class Sales
    {
        public int Id { get; set; }
        public int? Customerid { get; set; }
        public int? Productid { get; set; }
        public int? Storeid { get; set; }
        public DateTime? Datesold { get; set; }

        public virtual Customers Customer { get; set; }
        public virtual Products Product { get; set; }
        public virtual Stores Store { get; set; }
    }
}
