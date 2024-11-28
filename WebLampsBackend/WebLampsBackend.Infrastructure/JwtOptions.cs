using System.ComponentModel.DataAnnotations;

namespace WebLampsBackend.Infrastructure
{
    public class JwtOptions
    {
        public string? SecretKey { get; set; }
        public int ExpiresDays { get; set; }
    }
}