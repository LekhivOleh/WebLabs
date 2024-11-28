using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using WebLampsBackend.Core.Interface.Repositories;
using WebLampsBackend.Core.Models;

namespace WebLampsBackend.Persistence.Repositories
{
    public class CartRepository : ICartRepository
    {
        private readonly WeblampsBackendDbContext _context;

        public CartRepository(WeblampsBackendDbContext context)
        {
            _context = context;
        }

        public Cart GetCartById(Guid id)
        {
            return _context.Carts.FirstOrDefault(c => c.Id == id);
        }

        public IEnumerable<Cart> GetAllCarts(Guid userId)
        {
            return _context.Carts.Where(x => x.UserId == userId).ToList();
        }

        public Cart CreateCart(Cart cart)
        {
            _context.Carts.Add(cart);
            _context.SaveChanges();
            return cart;
        }

        public Cart UpdateCart(Cart cart)
        {
            _context.Carts.Update(cart);
            _context.SaveChanges();
            return cart;
        }

        public void DeleteCart(Guid id)
        {
            var cart = GetCartById(id);
            if (cart != null)
            {
                _context.Carts.Remove(cart);
                _context.SaveChanges();
            }
        }
    }
}