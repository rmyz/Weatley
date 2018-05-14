using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Weatley.Backend.Migrations
{
    public partial class paid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "OrderDate",
                table: "Order",
                nullable: false,
                defaultValue: new DateTime(2018, 5, 14, 20, 1, 49, 961, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 18, 18, 41, 18, 132, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartingDate",
                table: "Booking",
                nullable: false,
                defaultValue: new DateTime(2018, 5, 14, 20, 1, 49, 956, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 18, 18, 41, 18, 126, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartHour",
                table: "Activity",
                nullable: false,
                defaultValue: new DateTime(2018, 5, 14, 20, 1, 49, 954, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 18, 18, 41, 18, 125, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Accounting",
                nullable: false,
                defaultValue: new DateTime(2018, 5, 14, 20, 1, 49, 951, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 18, 18, 41, 18, 122, DateTimeKind.Local));

            migrationBuilder.AddColumn<bool>(
                name: "Paid",
                table: "Accounting",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Paid",
                table: "Accounting");

            migrationBuilder.AlterColumn<DateTime>(
                name: "OrderDate",
                table: "Order",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 18, 18, 41, 18, 132, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 5, 14, 20, 1, 49, 961, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartingDate",
                table: "Booking",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 18, 18, 41, 18, 126, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 5, 14, 20, 1, 49, 956, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartHour",
                table: "Activity",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 18, 18, 41, 18, 125, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 5, 14, 20, 1, 49, 954, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Accounting",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 18, 18, 41, 18, 122, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 5, 14, 20, 1, 49, 951, DateTimeKind.Local));
        }
    }
}
