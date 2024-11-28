using System;
using System.Collections.Generic;
using WebLampsBackend.Core.Interface.Repositories;
using WebLampsBackend.Core.Interface.Services;
using WebLampsBackend.Core.Models;

namespace WebLampsBackend.Logic.Services
{
    public class CartService : ICartService
    {
        private readonly ICartRepository _cartRepository;
        private readonly ILampRepository _lampRepository;

        public CartService(ICartRepository cartRepository, ILampRepository lampRepository)
        {
            _cartRepository = cartRepository;
            _lampRepository = lampRepository;
        }

        public Cart GetCartById(Guid id)
        {
            return _cartRepository.GetCartById(id);
        }

        public IEnumerable<Cart> GetAllCarts(Guid userId)
        {
            return _cartRepository.GetAllCarts(userId);
        }

        public Cart CreateCart(int amount, string type, Guid lampId, Guid userId)
        {
            var id = Guid.NewGuid();
            var lamp = _lampRepository.GetLampById(lampId);
            if (lamp == null)
            {
                throw new Exception("Lamp not found");
            }

            var existingCart = _cartRepository.GetAllCarts(userId).FirstOrDefault(c => c.LampId == lampId && c.Type == type);
            if (existingCart != null)
            {
                existingCart.Amount += amount;
                return _cartRepository.UpdateCart(existingCart);
            }

            var cart = new Cart { Id = id, Amount = amount, LampId = lampId, Type = type, UserId = userId};
            return _cartRepository.CreateCart(cart);
        }

        public Cart UpdateCart(Guid id, int amount, string type)
        {
            var cart = _cartRepository.GetCartById(id);
            if (cart == null)
            {
                throw new Exception("Cart not found");
            }

            cart.Amount = amount;
            cart.Type = type;
            return _cartRepository.UpdateCart(cart);
        }

        public void DeleteCart(Guid id)
        {
            _cartRepository.DeleteCart(id);
        }
        
    }
}