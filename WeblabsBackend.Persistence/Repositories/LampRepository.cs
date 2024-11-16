using WeblabsBackend.Core.Interface.Repositories;
using WeblabsBackend.Core.Models;

namespace WeblabsBackend.Persistence.Repositories;

public class LampRepository : ILampRepository
{
    private readonly WeblabsBackendDbContext _context;

    public LampRepository(WeblabsBackendDbContext context)
    {
        _context = context;
    }
    
    
    public List<Lamp> GetLamps(string search, string sort = "")
    {
        var lamps = _context.Lamps.ToList();
        if (!string.IsNullOrEmpty(search.Trim()))
        {
            return _context.Lamps.Where(x => x.Manufacturers.Contains(search.Trim())).ToList();
        }

        if (!string.IsNullOrEmpty(sort))
        {
            lamps = sort.Trim() switch
            {
                "manufacturers increasing" => lamps.OrderBy(x => x.Manufacturers).ToList(),
                "manufacturers decreasing" => lamps.OrderByDescending(x => x.Manufacturers).ToList(),
                "power increasing" => lamps.OrderBy(x => x.Power).ToList(),
                "power decreasing" => lamps.OrderByDescending(x => x.Power).ToList(),
                "amountOfLamps increasing" => lamps.OrderBy(x => x.AmountOfLamps).ToList(),
                "amountOfLamps decreasing" => lamps.OrderByDescending(x => x.AmountOfLamps).ToList(),
                _ => lamps
            };
        }
        return lamps;
    }

    public void UpdateLamp(Lamp lamp)
    {
        _context.Lamps.Update(lamp);
        _context.SaveChanges();
    }
    

    public Lamp GetLampById(Guid id)
    {
        return _context.Lamps.FirstOrDefault(x => x.Id == id) ?? throw new Exception("Lamp not found");
    }
    
    public void 
        AddLamp(Lamp lamp)
    {
        _context.Lamps.Add(lamp);
        _context.SaveChanges();
    }

    public void DeleteLamp(Lamp lamp)
    {
        _context.Lamps.Remove(lamp);
        _context.SaveChanges();
    }
    
    public int CountLampsPower(string search)
    {
        var lamps =  GetLamps(search);
        return lamps.Sum(lamp => lamp.Power);
    }
    
    
}