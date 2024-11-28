using WebLampsBackend.Core.Models;

namespace WebLampsBackend.Core.Interface.Repositories;

public interface IUserRepository
{
    void Add(User user);
    User? GetUserByEmail(string email);
    User? GetUserByUsername(string username);
}