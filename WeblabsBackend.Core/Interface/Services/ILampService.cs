using WeblabsBackend.Core.Models;

namespace WeblabsBackend.Core.Interface.Services;

public interface ILampService
{
    List<Lamp> GetLamps(string search, string sort);
    
    void UpdateLamp(Guid id, string? manufacturers, int power, int amountOfLamps);
    
    void AddLamp(string? manufacturers, int power, int amountOfLamps);
    
    void DeleteLamp(Guid id);
    
    int CountLampsPower(string search);
}