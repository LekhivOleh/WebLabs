using WebLampsBackend.Core.Models;

namespace WebLampsBackend.Core.Interface.Repositories;

public interface ICartRepository
{
    Cart GetCartById(Guid id);
    IEnumerable<Cart> GetAllCarts(Guid userId);
    Cart CreateCart(Cart cart);
    Cart UpdateCart(Cart cart);
    void DeleteCart(Guid id);
}