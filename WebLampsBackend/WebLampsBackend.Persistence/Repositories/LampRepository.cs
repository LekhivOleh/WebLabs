using Microsoft.AspNetCore.Http.HttpResults;
using WebLampsBackend.Core.Interface.Repositories;
using WebLampsBackend.Core.Models;

namespace WebLampsBackend.Persistence.Repositories;

public class LampRepository(WeblampsBackendDbContext context) : ILampRepository
{
    public List<Lamp> GetLamps(string search, string sortManufacturer, string filterPower, string filterPrice, string filterIsEconomical)
{
    var lamps = context.Lamps.AsQueryable();

    if (!string.IsNullOrEmpty(search.Trim()))
    {
        lamps = lamps.Where(x => x.Manufacturer.Contains(search.Trim()) ||
                                 x.AmountOfLamps.ToString().Contains(search.Trim()) ||
                                 x.Power.ToString().Contains(search.Trim()));
    }

    if (!string.IsNullOrEmpty(sortManufacturer))
    {
        lamps = sortManufacturer switch
        {
            "manufacturers increasing" => lamps.OrderBy(x => x.Manufacturer),
            "manufacturers decreasing" => lamps.OrderByDescending(x => x.Manufacturer),
            _ => lamps
        };
    }

    if (!string.IsNullOrEmpty(filterPower))
    {
        lamps = filterPower switch
        {
            "0 - 499" => lamps.Where(x => x.Power >= 0 && x.Power <= 499),
            "500 - 999" => lamps.Where(x => x.Power >= 500 && x.Power <= 999),
            "1000 - 1501" => lamps.Where(x => x.Power >= 1000 && x.Power <= 1499),
            "1500 - 2001" => lamps.Where(x => x.Power >= 1500 && x.Power <= 1999),
            "2000+" => lamps.Where(x => x.Power >= 2000),
            _ => lamps
        };
    }

    if (!string.IsNullOrEmpty(filterPrice))
    {
        lamps = filterPrice switch
        {
            "0 - 499" => lamps.Where(x => x.Price >= 0 && x.Price <= 499),
            "500 - 999" => lamps.Where(x => x.Price >= 500 && x.Price <= 999),
            "1000 - 1501" => lamps.Where(x => x.Price >= 1000 && x.Price <= 1499),
            "1500 - 2001" => lamps.Where(x => x.Price >= 1500 && x.Price <= 1999),
            "2000+" => lamps.Where(x => x.Price >= 2000),
            _ => lamps
        };
    }

    if (!string.IsNullOrEmpty(filterIsEconomical))
    {
        lamps = filterIsEconomical switch
        {
            "true" => lamps.Where(x => x.IsEconomical),
            "false" => lamps.Where(x => !x.IsEconomical),
            _ => lamps
        };
    }

    return lamps.ToList();
}

    public void UpdateLamp(Lamp lamp)
    {
        context.Lamps.Update(lamp);
        context.SaveChanges();
    }
    
    public Lamp GetLampById(Guid id)
    {
        return context.Lamps.FirstOrDefault(x => x.Id == id) ?? throw new Exception("Lamp not found");
    }

    public void AddLamp(Lamp lamp)
    {
        context.Lamps.Add(lamp);
        context.SaveChanges();
    }
    
    public void DeleteLamp(Lamp lamp)
    {
        context.Lamps.Remove(lamp);
        context.SaveChanges();
    }
}