using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace homework5_7.Data.Migrations
{
    /// <inheritdoc />
    public partial class update : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "total",
                table: "Cheesecakes",
                newName: "Total");

            migrationBuilder.RenameColumn(
                name: "toppings",
                table: "Cheesecakes",
                newName: "Toppings");

            migrationBuilder.RenameColumn(
                name: "specialRequests",
                table: "Cheesecakes",
                newName: "SpecialRequests");

            migrationBuilder.RenameColumn(
                name: "quantity",
                table: "Cheesecakes",
                newName: "Quantity");

            migrationBuilder.RenameColumn(
                name: "deliveryDate",
                table: "Cheesecakes",
                newName: "DeliveryDate");

            migrationBuilder.RenameColumn(
                name: "baseFlavor",
                table: "Cheesecakes",
                newName: "BaseFlavor");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Cheesecakes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Cheesecakes",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Cheesecakes");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Cheesecakes");

            migrationBuilder.RenameColumn(
                name: "Total",
                table: "Cheesecakes",
                newName: "total");

            migrationBuilder.RenameColumn(
                name: "Toppings",
                table: "Cheesecakes",
                newName: "toppings");

            migrationBuilder.RenameColumn(
                name: "SpecialRequests",
                table: "Cheesecakes",
                newName: "specialRequests");

            migrationBuilder.RenameColumn(
                name: "Quantity",
                table: "Cheesecakes",
                newName: "quantity");

            migrationBuilder.RenameColumn(
                name: "DeliveryDate",
                table: "Cheesecakes",
                newName: "deliveryDate");

            migrationBuilder.RenameColumn(
                name: "BaseFlavor",
                table: "Cheesecakes",
                newName: "baseFlavor");
        }
    }
}
