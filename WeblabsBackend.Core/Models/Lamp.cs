namespace WeblabsBackend.Core.Models;

public class Lamp
{
    public Guid Id { get; set; }
    public string? Manufacturers { get; set; }
    public int Power { get; set; }
    public int AmountOfLamps { get; set; }
}