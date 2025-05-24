using E_CommerceFlipkartnew.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace E_CommerceFlipkartnew.Repository
{
    public class CartItemRepository : ICartItemRepository
    {
        private readonly ApplicationDbContext _context;

        public CartItemRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<CartItem> GetAllCartItems()
        {
            return _context.CartItems.Include(c => c.Electronic).ToList();
        }

        public CartItem GetCartItemById(int id)
        {
            return _context.CartItems.Include(c => c.Electronic).FirstOrDefault(c => c.CartItemId == id);
        }

        public void AddCartItem(CartItem cartItem)
        {
            _context.CartItems.Add(cartItem);
            _context.SaveChanges();
        }

        public void UpdateCartItem(CartItem cartItem)
        {
            _context.Entry(cartItem).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void DeleteCartItem(int id)
        {
            var cartItem = GetCartItemById(id);
            if (cartItem != null)
            {
                _context.CartItems.Remove(cartItem);
                _context.SaveChanges();
            }
        }
    }
}
