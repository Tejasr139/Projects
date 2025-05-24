using E_CommerceFlipkartnew.Models;
using System.Collections.Generic;

namespace E_CommerceFlipkartnew.Repository
{
    public interface ICartItemRepository
    {
        IEnumerable<CartItem> GetAllCartItems();
        CartItem GetCartItemById(int id);
        void AddCartItem(CartItem cartItem);
        void UpdateCartItem(CartItem cartItem);
        void DeleteCartItem(int id);
    }
}
