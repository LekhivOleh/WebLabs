using WebLampsBackend.Core.Interface.Infrastructure;
using WebLampsBackend.Core.Interface.Repositories;
using WebLampsBackend.Core.Interface.Services;
using WebLampsBackend.Core.Models;

namespace WebLampsBackend.Logic.Services
{
    public class UserService : IUserService
    {
        private readonly IPasswordHasher _passwordHasher;
        private readonly IUserRepository _userRepository;
        private readonly IJwtProvider _jwtProvider;

        public UserService(IPasswordHasher passwordHasher, IUserRepository userRepository, IJwtProvider jwtProvider)
        {
            _passwordHasher = passwordHasher ?? throw new ArgumentNullException(nameof(passwordHasher));
            _userRepository = userRepository ?? throw new ArgumentNullException(nameof(userRepository));
            _jwtProvider = jwtProvider ?? throw new ArgumentNullException(nameof(jwtProvider));
        }

        public void Register(string username, string email, string password)
        {
            if (string.IsNullOrEmpty(username)) throw new ArgumentNullException(nameof(username));
            if (string.IsNullOrEmpty(email)) throw new ArgumentNullException(nameof(email));
            if (string.IsNullOrEmpty(password)) throw new ArgumentNullException(nameof(password));

            var hashPassword = _passwordHasher.Generate(password);

            var user = new User
            {
                Id = Guid.NewGuid(),
                Username = username,
                Email = email,
                Password = hashPassword
            };

            _userRepository.Add(user);
        }

        public string? Login(string email, string password)
        {
            var user = _userRepository.GetUserByEmail(email);
            
            if (user == null)
            {
                return null;
            }
            
            var result = _passwordHasher.Verify(password, user.Password??string.Empty);

            if (!result)
            {
                throw new Exception("Invalid password");
            }

            var token = _jwtProvider.GenerateToken(user);

            return token;
        }
        
        public bool CheckUser(string token)
        {
            if (string.IsNullOrEmpty(token))
            {
                return false;
            }

            var username = _jwtProvider.DecodeToken(token);

            var user = _userRepository.GetUserByUsername(username);

            return user != null;
        }
    }
}