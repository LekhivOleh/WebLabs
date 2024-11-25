namespace WebLampsBackend.Core.Models;

public class Lamp
{
    public Guid Id { get; set; }
    public string? Manufacturer { get; set; }
    public int Power { get; set; }
    public int AmountOfLamps { get; set; }
    public float Price { get; set; }
    public string? Color { get; set; }
    public bool IsEconomical { get; set; }
}