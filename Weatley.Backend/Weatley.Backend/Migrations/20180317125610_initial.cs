using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Weatley.Backend.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false, defaultValueSql: "NEWID()"),
                    Email = table.Column<string>(nullable: true),
                    IdentificationDocument = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Surname = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Hotel",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false, defaultValueSql: "NEWID()"),
                    Address = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Website = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hotel", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Accounting",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false, defaultValueSql: "NEWID()"),
                    CustomerId = table.Column<Guid>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(2018, 3, 17, 13, 55, 59, 186, DateTimeKind.Local)),
                    FinalPrice = table.Column<double>(nullable: false),
                    PaymentType = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounting", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Accounting_Customer_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Booking",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false, defaultValueSql: "NEWID()"),
                    Comment = table.Column<string>(nullable: true),
                    CustomerId = table.Column<Guid>(nullable: true),
                    EndDate = table.Column<DateTime>(nullable: false),
                    Price = table.Column<double>(nullable: false),
                    StartingDate = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(2018, 3, 17, 13, 55, 59, 190, DateTimeKind.Local))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Booking", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Booking_Customer_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Order",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false, defaultValueSql: "NEWID()"),
                    Comment = table.Column<string>(nullable: true),
                    CustomerId = table.Column<Guid>(nullable: true),
                    DeliveryDate = table.Column<DateTime>(nullable: false),
                    FinalPrice = table.Column<double>(nullable: false),
                    OrderDate = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(2018, 3, 17, 13, 55, 59, 195, DateTimeKind.Local))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Order", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Order_Customer_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Report",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false, defaultValueSql: "NEWID()"),
                    CustomerId = table.Column<Guid>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Status = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Report", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Report_Customer_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Activity",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false, defaultValueSql: "NEWID()"),
                    Description = table.Column<string>(nullable: true),
                    EndHour = table.Column<DateTime>(nullable: false),
                    HotelId = table.Column<Guid>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    StartHour = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(2018, 3, 17, 13, 55, 59, 188, DateTimeKind.Local))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Activity", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Activity_Hotel_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false, defaultValueSql: "NEWID()"),
                    Available = table.Column<bool>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    HotelId = table.Column<Guid>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    ProductType = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Product_Hotel_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Room",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false, defaultValueSql: "NEWID()"),
                    FloorNumber = table.Column<int>(nullable: false),
                    HotelId = table.Column<Guid>(nullable: true),
                    RoomNumber = table.Column<int>(nullable: false),
                    RoomType = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Room", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Room_Hotel_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Service",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false, defaultValueSql: "NEWID()"),
                    Description = table.Column<string>(nullable: true),
                    HotelId = table.Column<Guid>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Service", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Service_Hotel_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false, defaultValueSql: "NEWID()"),
                    HotelId = table.Column<Guid>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    UserType = table.Column<int>(nullable: false),
                    Username = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                    table.ForeignKey(
                        name: "FK_User_Hotel_HotelId",
                        column: x => x.HotelId,
                        principalTable: "Hotel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductOrdered",
                columns: table => new
                {
                    OrderId = table.Column<Guid>(nullable: false),
                    ProductId = table.Column<Guid>(nullable: false),
                    Comments = table.Column<string>(nullable: true),
                    Id = table.Column<Guid>(nullable: false),
                    Price = table.Column<double>(nullable: false),
                    Quantity = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductOrdered", x => new { x.OrderId, x.ProductId });
                    table.ForeignKey(
                        name: "FK_ProductOrdered_Order_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Order",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductOrdered_Product_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Product",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BookedRoom",
                columns: table => new
                {
                    BookingId = table.Column<Guid>(nullable: false),
                    RoomId = table.Column<Guid>(nullable: false),
                    Id = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookedRoom", x => new { x.BookingId, x.RoomId });
                    table.ForeignKey(
                        name: "FK_BookedRoom_Booking_BookingId",
                        column: x => x.BookingId,
                        principalTable: "Booking",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BookedRoom_Room_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Room",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Accounting_CustomerId",
                table: "Accounting",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Activity_HotelId",
                table: "Activity",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_BookedRoom_RoomId",
                table: "BookedRoom",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_Booking_CustomerId",
                table: "Booking",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Order_CustomerId",
                table: "Order",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Product_HotelId",
                table: "Product",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductOrdered_ProductId",
                table: "ProductOrdered",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Report_CustomerId",
                table: "Report",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Room_HotelId",
                table: "Room",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_Service_HotelId",
                table: "Service",
                column: "HotelId");

            migrationBuilder.CreateIndex(
                name: "IX_User_HotelId",
                table: "User",
                column: "HotelId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Accounting");

            migrationBuilder.DropTable(
                name: "Activity");

            migrationBuilder.DropTable(
                name: "BookedRoom");

            migrationBuilder.DropTable(
                name: "ProductOrdered");

            migrationBuilder.DropTable(
                name: "Report");

            migrationBuilder.DropTable(
                name: "Service");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Booking");

            migrationBuilder.DropTable(
                name: "Room");

            migrationBuilder.DropTable(
                name: "Order");

            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.DropTable(
                name: "Customer");

            migrationBuilder.DropTable(
                name: "Hotel");
        }
    }
}
