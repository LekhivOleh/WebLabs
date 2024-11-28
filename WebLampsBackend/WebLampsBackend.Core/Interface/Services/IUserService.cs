namespace WebLampsBackend.Core.Interface.Services;

public interface IUserService
{
    public void Register(string username, string email, string password);
    public string? Login(string email, string passwordHash);
    bool CheckUser(string token);
}