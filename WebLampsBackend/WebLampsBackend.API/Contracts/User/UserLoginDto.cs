using System.ComponentModel.DataAnnotations;

namespace WebLampsBackend.API.Contracts.User;

public record UserLoginDto([Required]string Email, [Required]string Password);