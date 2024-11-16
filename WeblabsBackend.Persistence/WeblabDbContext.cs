using Microsoft.EntityFrameworkCore;
using WeblabsBackend.Core.Models;
using WeblabsBackend.Persistence.Configurations;

namespace WeblabsBackend.Persistence;

public class WeblabsBackendDbContext(DbContextOptions<WeblabsBackendDbContext> options) : DbContext(options)
{
    public DbSet<Lamp> Lamps { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new LampConfiguration());
    }

}