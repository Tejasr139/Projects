using System.ComponentModel.DataAnnotations;

namespace E_CommerceFlipkartnew.Models
{
    public class Electronic
    {
        [Key]
        public int ElectronicId {  get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }


        //public int? CartId { get; set; } // Note the nullable int type
        ////public Cart Cart { get; set; }

    }
}
