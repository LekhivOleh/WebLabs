using WebLampsBackend.Core.Models;

namespace WebLampsBackend.Core.Interface.Repositories;

public interface ILampRepository
{
    List<Lamp> GetLamps(string search, string sortManufacturer, string filterPower, string filterPrice, string filterIsEconomical);
    void UpdateLamp(Lamp lamp);
    Lamp GetLampById(Guid id);
    void AddLamp(Lamp lamp);
    void DeleteLamp(Lamp lamp);
}