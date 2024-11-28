using System.ComponentModel.DataAnnotations;

namespace WebLampsBackend.API.Contracts.User;

public record UserRegisterDto([Required]string username, [Required]string email, [Required]string password);