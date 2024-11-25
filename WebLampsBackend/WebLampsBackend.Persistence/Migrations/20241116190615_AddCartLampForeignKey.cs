using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebLampsBackend.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddCartLampForeignKey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Carts",
                keyColumn: "Type",
                keyValue: null,
                column: "Type",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "Carts",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Carts_LampId",
                table: "Carts",
                column: "LampId");

            migrationBuilder.AddForeignKey(
                name: "FK_Carts_Lamps_LampId",
                table: "Carts",
                column: "LampId",
                principalTable: "Lamps",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Carts_Lamps_LampId",
                table: "Carts");

            migrationBuilder.DropIndex(
                name: "IX_Carts_LampId",
                table: "Carts");

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "Carts",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }
    }
}
