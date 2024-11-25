using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebLampsBackend.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class RenameManufacturersToManufacturer : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Manufacturers",
                table: "Lamps",
                newName: "Manufacturer");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Manufacturer",
                table: "Lamps",
                newName: "Manufacturers");
        }
    }
}
