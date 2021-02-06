using System;
using System.Collections.Generic;

namespace Talent_BE_MVC.Models
{
    public partial class Sales
    {
        public int Id { get; set; }
        public int? Productid { get; set; }
        public int? Customerid { get; set; }
        public int? Storeid { get; set; }
        public DateTime? Datesold { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Product Product { get; set; }
        public virtual Store Store { get; set; }
    }
}
