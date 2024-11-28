namespace WebLampsBackend.API.Contracts.Cart;

public record CartAddDto(int Amount, string Type, Guid LampId, Guid UserId);