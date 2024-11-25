using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebLampsBackend.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class UpdateAttributes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsEconomical",
                table: "Lamps",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsEconomical",
                table: "Lamps");
        }
    }
}
