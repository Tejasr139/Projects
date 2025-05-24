using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace E_CommerceFlipkartnew.Migrations
{
    /// <inheritdoc />
    public partial class CartMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CartId",
                table: "Electronics",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Carts",
                columns: table => new
                {
                    CartId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carts", x => x.CartId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Electronics_CartId",
                table: "Electronics",
                column: "CartId");

            migrationBuilder.AddForeignKey(
                name: "FK_Electronics_Carts_CartId",
                table: "Electronics",
                column: "CartId",
                principalTable: "Carts",
                principalColumn: "CartId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Electronics_Carts_CartId",
                table: "Electronics");

            migrationBuilder.DropTable(
                name: "Carts");

            migrationBuilder.DropIndex(
                name: "IX_Electronics_CartId",
                table: "Electronics");

            migrationBuilder.DropColumn(
                name: "CartId",
                table: "Electronics");
        }
    }
}
