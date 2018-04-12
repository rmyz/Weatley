using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Weatley.Backend.Migrations
{
    public partial class initial3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeliveryDate",
                table: "Order");

            migrationBuilder.AlterColumn<DateTime>(
                name: "OrderDate",
                table: "Order",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 12, 20, 38, 42, 71, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 912, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartingDate",
                table: "Booking",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 12, 20, 38, 42, 66, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 906, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartHour",
                table: "Activity",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 12, 20, 38, 42, 64, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 904, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Accounting",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 12, 20, 38, 42, 62, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 902, DateTimeKind.Local));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "OrderDate",
                table: "Order",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 912, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 12, 20, 38, 42, 71, DateTimeKind.Local));

            migrationBuilder.AddColumn<DateTime>(
                name: "DeliveryDate",
                table: "Order",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartingDate",
                table: "Booking",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 906, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 12, 20, 38, 42, 66, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartHour",
                table: "Activity",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 904, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 12, 20, 38, 42, 64, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Accounting",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 902, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 12, 20, 38, 42, 62, DateTimeKind.Local));
        }
    }
}
