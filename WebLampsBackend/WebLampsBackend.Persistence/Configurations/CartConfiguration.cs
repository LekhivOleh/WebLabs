using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebLampsBackend.Core.Models;

namespace WebLampsBackend.Persistence.Configurations
{
    public class CartConfiguration : IEntityTypeConfiguration<Cart>
    {
        public void Configure(EntityTypeBuilder<Cart> builder)
        {
            builder.HasKey(d => d.Id);
            builder.Property(d => d.Amount).IsRequired();
            builder.Property(d => d.Type).IsRequired();
            builder.HasOne(d => d.Lamp)
                   .WithMany()
                   .HasForeignKey(d => d.LampId);
        }
    }
}