using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Weatley.Backend.Migrations
{
    public partial class product : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Price",
                table: "Product",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AlterColumn<DateTime>(
                name: "OrderDate",
                table: "Order",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 17, 10, 44, 33, 390, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 887, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartingDate",
                table: "Booking",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 17, 10, 44, 33, 385, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 880, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartHour",
                table: "Activity",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 17, 10, 44, 33, 384, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 878, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Accounting",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 17, 10, 44, 33, 381, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 874, DateTimeKind.Local));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Price",
                table: "Product");

            migrationBuilder.AlterColumn<DateTime>(
                name: "OrderDate",
                table: "Order",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 887, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 17, 10, 44, 33, 390, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartingDate",
                table: "Booking",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 880, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 17, 10, 44, 33, 385, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartHour",
                table: "Activity",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 878, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 17, 10, 44, 33, 384, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Accounting",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 874, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 17, 10, 44, 33, 381, DateTimeKind.Local));
        }
    }
}
