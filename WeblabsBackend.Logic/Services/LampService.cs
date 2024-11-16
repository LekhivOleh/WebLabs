using WeblabsBackend.Core.Interface.Repositories;
using WeblabsBackend.Core.Interface.Services;
using WeblabsBackend.Core.Models;

namespace WeblabsBackend.Logic.Services;

public class LampService : ILampService 
{
    private readonly ILampRepository _lampRepository;

    public LampService(ILampRepository lampRepository)
    {
        _lampRepository = lampRepository;
    }

    public List<Lamp> GetLamps(string search, string sort)
    {
        return _lampRepository.GetLamps(search, sort);
    }

    public void UpdateLamp(Guid id, string? manufacturers, int power, int amountOfLamps)
    {
        var lamp = _lampRepository.GetLampById(id);
        lamp.Manufacturers = manufacturers;
        lamp.Power = power;
        lamp.AmountOfLamps = amountOfLamps;
        _lampRepository.UpdateLamp(lamp);
    }

    public void AddLamp(string? manufacturers, int power, int amountOfLamps)
    {
        var id = Guid.NewGuid();
        var lamp = new Lamp
        {
            Id = id,
            Manufacturers = manufacturers,
            Power = power,
            AmountOfLamps = amountOfLamps
        };
        _lampRepository.AddLamp(lamp);
    }

    public void DeleteLamp(Guid id)
    {
        var lamp = _lampRepository.GetLampById(id);
        _lampRepository.DeleteLamp(lamp);
    }

    public int CountLampsPower(string search)
    {
        return _lampRepository.CountLampsPower(search);
    }
}