namespace WebLampsBackend.API.Contracts.Lamp;

public record LampUpdateInputDto(string? Manufacturer, int Power, int AmountOfLamps, float Price, string? Color, bool IsEconomical);