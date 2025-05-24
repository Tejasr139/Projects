using System.ComponentModel.DataAnnotations;

namespace E_CommerceFlipkartnew.Models
{
    public class CartItemDto
    {

        [Required]
        public int ElectronicId { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Quantity must be greater than zero.")]
        public int Quantity { get; set; }
    }
}
