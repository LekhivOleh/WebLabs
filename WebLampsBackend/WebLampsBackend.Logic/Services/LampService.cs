using WebLampsBackend.Core.Interface.Repositories;
using WebLampsBackend.Core.Interface.Services;
using WebLampsBackend.Core.Models;

namespace WebLampsBackend.Logic.Services;

public class LampService : ILampService
{
    private readonly ILampRepository _lampRepository;
    
    public LampService(ILampRepository lampRepository)
    {
        _lampRepository = lampRepository;
    }
    
    public List<Lamp> GetLamps(string search, string sortManufacturer, string filterPower, string filterPrice, string filterIsEconomical)
    {
        return _lampRepository.GetLamps(search, sortManufacturer, filterPower, filterPrice, filterIsEconomical);
    }
    
    public void UpdateLamp(Guid id, string? manufacturer, int power, int amountOfLamps, float price, string? color, bool isEconomical)
    {
        var lamp = _lampRepository.GetLampById(id);
        lamp.Manufacturer = manufacturer;
        lamp.Power = power;
        lamp.AmountOfLamps = amountOfLamps;
        lamp.Price = price;
        lamp.Color = color;
        lamp.IsEconomical = isEconomical;
        _lampRepository.UpdateLamp(lamp);
    }
    
    public void AddLamp(string? manufacturer, int power, int amountOfLamps, float price, string? color, bool isEconomical)
    {
        var id = Guid.NewGuid();
        var lamp = new Lamp
        {
            Id = id,
            Manufacturer = manufacturer,
            Power = power,
            AmountOfLamps = amountOfLamps,
            Price = price,
            Color = color,
            IsEconomical = isEconomical
        };
        _lampRepository.AddLamp(lamp);
    }
    
    public void DeleteLamp(Guid id)
    {
        var lamp = _lampRepository.GetLampById(id);
        _lampRepository.DeleteLamp(lamp);
    }
    
    public Lamp GetLampById(Guid id)
    {
        return _lampRepository.GetLampById(id);
    }
}