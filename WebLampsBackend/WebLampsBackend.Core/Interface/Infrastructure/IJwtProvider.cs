using WebLampsBackend.Core.Models;

namespace WebLampsBackend.Core.Interface.Infrastructure;

public interface IJwtProvider
{
    string GenerateToken(User user);
    string DecodeToken(string token);
}