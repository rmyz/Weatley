using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Weatley.Backend.Migrations
{
    public partial class Roles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "OrderDate",
                table: "Order",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 887, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 13, 18, 45, 11, 717, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartingDate",
                table: "Booking",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 880, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 13, 18, 45, 11, 712, DateTimeKind.Local));

            migrationBuilder.AddColumn<string>(
                name: "Surname",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartHour",
                table: "Activity",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 878, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 13, 18, 45, 11, 710, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Accounting",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 874, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 13, 18, 45, 11, 708, DateTimeKind.Local));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Surname",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<DateTime>(
                name: "OrderDate",
                table: "Order",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 13, 18, 45, 11, 717, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 887, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartingDate",
                table: "Booking",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 13, 18, 45, 11, 712, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 880, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "StartHour",
                table: "Activity",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 13, 18, 45, 11, 710, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 878, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Accounting",
                nullable: false,
                defaultValue: new DateTime(2018, 4, 13, 18, 45, 11, 708, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2018, 4, 15, 2, 38, 48, 874, DateTimeKind.Local));
        }
    }
}
