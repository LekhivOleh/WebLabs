using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using WebLampsBackend.Core.Interface.Infrastructure;
using WebLampsBackend.Core.Models;
using Exception = System.Exception;

namespace WebLampsBackend.Infrastructure
{
    public class JwtProvider : IJwtProvider
    {
        private readonly string _secretKey;

        public JwtProvider(IConfiguration configuration)
        {
            _secretKey = configuration["Jwt:SecretKey"] ?? throw new Exception("Secret key is not defined");
        }

        public string GenerateToken(User user)
        {
            if (user == null) throw new ArgumentNullException(nameof(user));

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_secretKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.Username)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
        
        public string DecodeToken(string token)
        {
            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token);
            var email = jwtToken.Claims.First(claim => claim.Type == "unique_name").Value;
            Console.WriteLine(email);
            return email;
        }
    }
}