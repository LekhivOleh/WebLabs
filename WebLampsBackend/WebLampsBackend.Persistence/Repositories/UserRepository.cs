using WebLampsBackend.Core.Interface.Repositories;
using WebLampsBackend.Core.Models;

namespace WebLampsBackend.Persistence.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly WeblampsBackendDbContext _context;

        public UserRepository(WeblampsBackendDbContext context)
        {
            _context = context;
        }

        public void Add(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public User? GetUserByEmail(string email)
        {
            return _context.Users.FirstOrDefault(x => x.Email == email);
        }

        public User? GetUserByUsername(string username)
        {
            return _context.Users.FirstOrDefault(x => x.Username == username);
        }
    }
}