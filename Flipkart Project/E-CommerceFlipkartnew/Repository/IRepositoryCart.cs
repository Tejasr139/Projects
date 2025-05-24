using E_CommerceFlipkartnew.Models;

namespace E_CommerceFlipkartnew.Repository
{
    public interface IRepositoryCart
    {

        IEnumerable<CartItem> GetAllCartItems();
        CartItem GetCartItemById(int id);
        void AddCartItem(CartItem cartItem);
        void UpdateCartItem(CartItem cartItem);
        void DeleteCartItem(int id);
    }
}
