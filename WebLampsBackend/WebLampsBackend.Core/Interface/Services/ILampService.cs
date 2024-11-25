using WebLampsBackend.Core.Models;

namespace WebLampsBackend.Core.Interface.Services;

public interface ILampService
{
    List<Lamp> GetLamps(string search, string sortManufacturer, string filterPower, string filterPrice, string filterIsEconomical);
    void UpdateLamp(Guid id, string? manufacturer, int power, int amountOfLamps, float price, string? color, bool isEconomical);
    void AddLamp(string? manufacturer, int power, int amountOfLamps, float price, string? color, bool isEconomical);
    void DeleteLamp(Guid id);
    Lamp GetLampById(Guid id);
}