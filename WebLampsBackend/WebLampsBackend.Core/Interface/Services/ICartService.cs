using WebLampsBackend.Core.Models;

namespace WebLampsBackend.Core.Interface.Services;

public interface ICartService
{
    Cart GetCartById(Guid id);
    IEnumerable<Cart> GetAllCarts(Guid userId);
    Cart CreateCart(int amount, string type, Guid lampId, Guid userId);
    Cart UpdateCart(Guid id, int amount, string type);
    void DeleteCart(Guid id);
}