using Microsoft.EntityFrameworkCore.Migrations;

namespace WebLampsBackend.Persistence.Migrations
{
    public partial class ForceRenameLampTypeToType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LampType",
                table: "Carts",
                newName: "Type");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Type",
                table: "Carts",
                newName: "LampType");
        }
    }
}