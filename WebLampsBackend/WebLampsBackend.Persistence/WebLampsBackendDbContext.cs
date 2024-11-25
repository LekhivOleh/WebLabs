using Microsoft.EntityFrameworkCore;
using WebLampsBackend.Core.Models;
using WebLampsBackend.Persistence.Configurations;

namespace WebLampsBackend.Persistence;

public class WeblampsBackendDbContext(DbContextOptions<WeblampsBackendDbContext> options) : DbContext(options)
{
    public DbSet<Lamp> Lamps { get; set; }
    public DbSet<Cart> Carts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new LampConfiguration());
    }
}
