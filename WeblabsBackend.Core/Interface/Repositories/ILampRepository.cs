using WeblabsBackend.Core.Models;

namespace WeblabsBackend.Core.Interface.Repositories;

public interface ILampRepository
{
    List<Lamp> GetLamps(string search, string sort);
    void UpdateLamp(Lamp lamp);
    Lamp GetLampById(Guid id);
    void AddLamp(Lamp lamp);
    void DeleteLamp(Lamp lamp);
    int CountLampsPower(string search);
}