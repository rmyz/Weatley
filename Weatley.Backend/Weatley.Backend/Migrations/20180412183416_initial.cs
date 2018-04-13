using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Weatley.Backend.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "OrderDate",
                table: "Order",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 912, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 10, 17, 59, 53, 228, DateTimeKind.Local));

            migrationBuilder.AddColumn<string>(
                name: "StatusComment",
                table: "Order",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "signalRId",
                table: "Order",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartingDate",
                table: "Booking",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 906, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 10, 17, 59, 53, 222, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartHour",
                table: "Activity",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 904, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 10, 17, 59, 53, 220, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Accounting",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 902, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 10, 17, 59, 53, 217, DateTimeKind.Local));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StatusComment",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "signalRId",
                table: "Order");

            migrationBuilder.AlterColumn<DateTime>(
                name: "OrderDate",
                table: "Order",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 10, 17, 59, 53, 228, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 912, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartingDate",
                table: "Booking",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 10, 17, 59, 53, 222, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 906, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartHour",
                table: "Activity",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 10, 17, 59, 53, 220, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 904, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Accounting",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 10, 17, 59, 53, 217, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 12, 20, 34, 15, 902, DateTimeKind.Local));
        }
    }
}
