using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace E_CommerceFlipkartnew.Migrations
{
    /// <inheritdoc />
    public partial class Cart2Migration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.CreateTable(
                name: "CartItems",
                columns: table => new
                {
                    CartItemId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CartId = table.Column<int>(type: "int", nullable: false),
                    ElectronicId = table.Column<int>(type: "int", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    Cart2CartId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartItems", x => x.CartItemId);
                    table.ForeignKey(
                        name: "FK_CartItems_Cartss_Cart2CartId",
                        column: x => x.Cart2CartId,
                        principalTable: "Cartss",
                        principalColumn: "CartId");
                    table.ForeignKey(
                        name: "FK_CartItems_Electronics_ElectronicId",
                        column: x => x.ElectronicId,
                        principalTable: "Electronics",
                        principalColumn: "ElectronicId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_Cart2CartId",
                table: "CartItems",
                column: "Cart2CartId");

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_ElectronicId",
                table: "CartItems",
                column: "ElectronicId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CartItems");

            migrationBuilder.DropTable(
                name: "Cartss");

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
    }
}
