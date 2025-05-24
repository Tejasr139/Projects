using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace E_CommerceFlipkartnew.Migrations
{
    /// <inheritdoc />
    public partial class newcartItemmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItems_Cartss_Cart2CartId",
                table: "CartItems");

            migrationBuilder.DropTable(
                name: "Cartss");

            migrationBuilder.DropIndex(
                name: "IX_CartItems_Cart2CartId",
                table: "CartItems");

            migrationBuilder.DropColumn(
                name: "Cart2CartId",
                table: "CartItems");

            migrationBuilder.DropColumn(
                name: "CartId",
                table: "CartItems");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Cart2CartId",
                table: "CartItems",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CartId",
                table: "CartItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Cartss",
                columns: table => new
                {
                    CartId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cartss", x => x.CartId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_Cart2CartId",
                table: "CartItems",
                column: "Cart2CartId");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItems_Cartss_Cart2CartId",
                table: "CartItems",
                column: "Cart2CartId",
                principalTable: "Cartss",
                principalColumn: "CartId");
        }
    }
}
