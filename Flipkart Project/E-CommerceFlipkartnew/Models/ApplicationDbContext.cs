using Microsoft.EntityFrameworkCore;

namespace E_CommerceFlipkartnew.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Electronic> Electronics { get; set; }

        //public DbSet<Cart> Carts { get; set; }
        //public DbSet<Cart2> Cartss { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
    }
}
