using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebLampsBackend.Core.Models;

namespace WebLampsBackend.Persistence.Configurations;

public class LampConfiguration : IEntityTypeConfiguration<Lamp>
{
    public void Configure(EntityTypeBuilder<Lamp> builder)
    {
        builder.HasKey(d => d.Id);
        builder.Property(d => d.Manufacturer).IsRequired();
        builder.Property(d => d.Power).IsRequired();
        builder.Property(d => d.AmountOfLamps).IsRequired();
        builder.Property(d => d.Price).IsRequired();
        builder.Property(d => d.Color).IsRequired();
    }
}
