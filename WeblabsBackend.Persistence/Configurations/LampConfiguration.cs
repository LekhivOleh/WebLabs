using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WeblabsBackend.Core.Models;

namespace WeblabsBackend.Persistence.Configurations;

public class LampConfiguration : IEntityTypeConfiguration<Lamp>
{
    public void Configure(EntityTypeBuilder<Lamp> builder)
    {
        builder.HasKey(d => d.Id);
        builder.Property(d => d.Manufacturers).IsRequired();
        builder.Property(d => d.Power).IsRequired();
        builder.Property(d => d.AmountOfLamps).IsRequired();
    }
}