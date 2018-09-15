using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using Weatley.Model.Entities;
using Weatley.Model.Enums;

namespace Weatley.DataAccess
{
    public class WeatleyDbInitializer
    {
        public static void Seed(WeatleyContext context, UserManager<User> userManager)
        {
            #region Users
            if (!context.Users.Any())
            {
                var user = new User
                {
                    Email = "Admin@admin.com",
                    UserName = "Admin",
                    Name = "Admin",
                    Surname = "Test",
                    UserType = UserTypeEnum.Admin,
                    Hotel = context.Hotels.FirstOrDefault()
                };
                userManager.CreateAsync(user, "Pa$$w0rd");
            }
            #endregion
            #region Customers
            if (!context.Customers.Any())
            {
                Customer cust_01 = new Customer
                {
                    Id = Guid.NewGuid(),
                    Email = "pam@gmail.com",
                    IdentificationDocument = "20193013T",
                    Accountings = new List<Accounting>(),
                    Name = "Pam",
                    Surname = "Merchant",
                    PhoneNumber = "641567532",
                    Bookings = new List<Booking>(),
                    Orders = new List<Order>(),
                    Reports = new List<Report>()
                };

                Customer cust_02 = new Customer
                {
                    Id = Guid.NewGuid(),
                    Email = "eckehard@gmail.com",
                    IdentificationDocument = "31193537T",
                    Accountings = new List<Accounting>(),
                    Name = "Eckehard",
                    Surname = "Whinery",
                    PhoneNumber = "698712617",
                    Bookings = new List<Booking>(),
                    Orders = new List<Order>(),
                    Reports = new List<Report>()
                };

                Customer cust_03 = new Customer
                {
                    Id = Guid.NewGuid(),
                    Email = "ernst@gmail.com",
                    IdentificationDocument = "21496537T",
                    Accountings = new List<Accounting>(),
                    Name = "Ernst",
                    Surname = "Adam",
                    PhoneNumber = "658712629",
                    Bookings = new List<Booking>(),
                    Orders = new List<Order>(),
                    Reports = new List<Report>()
                };

                Customer cust_04 = new Customer
                {
                    Id = Guid.NewGuid(),
                    Email = "charlene@gmail.com",
                    IdentificationDocument = "24802230L",
                    Accountings = new List<Accounting>(),
                    Name = "Charlene",
                    Surname = "Beltz",
                    PhoneNumber = "648412647",
                    Bookings = new List<Booking>(),
                    Orders = new List<Order>(),
                    Reports = new List<Report>()
                };

                Customer cust_05 = new Customer
                {
                    Id = Guid.NewGuid(),
                    Email = "mora@gmail.com",
                    IdentificationDocument = "22902718P",
                    Accountings = new List<Accounting>(),
                    Name = "Mora",
                    Surname = "Reynoso",
                    PhoneNumber = "751937180",
                    Bookings = new List<Booking>(),
                    Orders = new List<Order>(),
                    Reports = new List<Report>()
                };

                Customer cust_06 = new Customer
                {
                    Id = Guid.NewGuid(),
                    Email = "pichi@gmail.com",
                    IdentificationDocument = "89852086X",
                    Accountings = new List<Accounting>(),
                    Name = "Pichi",
                    Surname = "Ramos",
                    PhoneNumber = "766139091",
                    Bookings = new List<Booking>(),
                    Orders = new List<Order>(),
                    Reports = new List<Report>()
                };

                Customer cust_07 = new Customer
                {
                    Id = Guid.NewGuid(),
                    Email = "pichi@gmail.com",
                    IdentificationDocument = "53652814R",
                    Accountings = new List<Accounting>(),
                    Name = "Ariel",
                    Surname = "Atkinson",
                    PhoneNumber = "781501291",
                    Bookings = new List<Booking>(),
                    Orders = new List<Order>(),
                    Reports = new List<Report>()
                };

                Customer cust_08 = new Customer
                {
                    Id = Guid.NewGuid(),
                    Email = "dani@gmail.com",
                    IdentificationDocument = "50005059T",
                    Accountings = new List<Accounting>(),
                    Name = "Dani",
                    Surname = "Bonner",
                    PhoneNumber = "748851603",
                    Bookings = new List<Booking>(),
                    Orders = new List<Order>(),
                    Reports = new List<Report>()
                };

                Customer cust_09 = new Customer
                {
                    Id = Guid.NewGuid(),
                    Email = "kevin@gmail.com",
                    IdentificationDocument = "22102477Y",
                    Accountings = new List<Accounting>(),
                    Name = "Kevin",
                    Surname = "Lynton",
                    PhoneNumber = "696410390",
                    Bookings = new List<Booking>(),
                    Orders = new List<Order>(),
                    Reports = new List<Report>()
                };

                Customer cust_10 = new Customer
                {
                    Id = Guid.NewGuid(),
                    Email = "Lois@gmail.com",
                    IdentificationDocument = "85274839Q",
                    Accountings = new List<Accounting>(),
                    Name = "Lois",
                    Surname = "Griffin",
                    PhoneNumber = "763895071",
                    Bookings = new List<Booking>(),
                    Orders = new List<Order>(),
                    Reports = new List<Report>()
                };

                context.Customers.Add(cust_01);
                context.Customers.Add(cust_02);
                context.Customers.Add(cust_03);
                context.Customers.Add(cust_04);
                context.Customers.Add(cust_05);
                context.Customers.Add(cust_06);
                context.Customers.Add(cust_07);
                context.Customers.Add(cust_08);
                context.Customers.Add(cust_09);
                context.Customers.Add(cust_10);
                context.SaveChanges();
            }
            #endregion
            #region Hotels
            if (!context.Hotels.Any())
            {
                Hotel hot_01 = new Hotel
                {
                    Id = Guid.Parse("782A6441-7A9D-4C1C-9B9F-27E13ABD7CD1"),
                    Name = "King's Time Hotel",
                    Description = "King's Time Hotel was founded in 1732.",
                    Address = "Oak Street 3",
                    Email = "kingstime@gmail.com",
                    PhoneNumber = "936842157",
                    Website = "kingstimehotel.com",
                    Activities = new List<Activity>(),
                    Services = new List<Service>(),
                    Products = new List<Product>(),
                    Users = new List<User>(),
                    Rooms = new List<Room>()
                };

                context.Hotels.Add(hot_01);
                context.SaveChanges();
            }
            #endregion 
            #region Accountings
            if (!context.Accountings.Any())
            {
                Accounting acc_01 = new Accounting
                {
                    Id = Guid.NewGuid(),
                    Customer = context.Customers.Single(c => c.Name == "Pam"),
                    PaymentType = PaymentTypeEnum.Cash,
                    Date = DateTime.Now,
                    FinalPrice = 290,
                    Paid = true
                };

                Accounting acc_02 = new Accounting
                {
                    Id = Guid.NewGuid(),
                    Customer = context.Customers.Single(c => c.Name == "Eckehard"),
                    PaymentType = PaymentTypeEnum.CreditCard,
                    Date = DateTime.Now.AddDays(3),
                    FinalPrice = 350.25,
                    Paid = false
                };

                Accounting acc_03 = new Accounting
                {
                    Id = Guid.NewGuid(),
                    Customer = context.Customers.Single(c => c.Name == "Ernst"),
                    PaymentType = PaymentTypeEnum.CreditCard,
                    Date = DateTime.Now.AddDays(6),
                    FinalPrice = 150.25,
                    Paid = true
                };

                Accounting acc_04 = new Accounting
                {
                    Id = Guid.NewGuid(),
                    Customer = context.Customers.Single(c => c.Name == "Charlene"),
                    PaymentType = PaymentTypeEnum.CreditCard,
                    Date = DateTime.Now.AddDays(1),
                    FinalPrice = 332.55,
                    Paid = false
                };

                Accounting acc_05 = new Accounting
                {
                    Id = Guid.NewGuid(),
                    Customer = context.Customers.Single(c => c.Name == "Mora"),
                    PaymentType = PaymentTypeEnum.Cash,
                    Date = DateTime.Now.AddDays(2),
                    FinalPrice = 208,
                    Paid = true
                };

                Accounting acc_06 = new Accounting
                {
                    Id = Guid.NewGuid(),
                    Customer = context.Customers.Single(c => c.Name == "Pichi"),
                    PaymentType = PaymentTypeEnum.Cash,
                    Date = DateTime.Now,
                    FinalPrice = 500,
                    Paid = true
                };

                context.Accountings.Add(acc_01);
                context.Accountings.Add(acc_02);
                context.Accountings.Add(acc_03);
                context.Accountings.Add(acc_04);
                context.Accountings.Add(acc_05);
                context.Accountings.Add(acc_06);
                context.SaveChanges();
            }
            #endregion
            #region Activities
            if (!context.Activities.Any())
            {
                Activity act_01 = new Activity
                {
                    Id = Guid.NewGuid(),
                    Name = "Free mojitos on the pool",
                    Description = "Come to the pool to drink some free mojitos",
                    StartHour = DateTime.Now,
                    EndHour = DateTime.Now.AddHours(2),
                    Hotel = context.Hotels.FirstOrDefault()
                };

                Activity act_02 = new Activity
                {
                    Id = Guid.NewGuid(),
                    Name = "Kids camp",
                    Description = "Come to the reception to let your kids have a good time",
                    StartHour = DateTime.Now,
                    EndHour = DateTime.Now.AddHours(1),
                    Hotel = context.Hotels.FirstOrDefault()
                };

                Activity act_03 = new Activity
                {
                    Id = Guid.NewGuid(),
                    Name = "Yan The Magician",
                    Description = "Come to the bar to enjoy our greatest magician Yan",
                    StartHour = DateTime.Now,
                    EndHour = DateTime.Now.AddHours(2).AddDays(1),
                    Hotel = context.Hotels.FirstOrDefault()
                };

                Activity act_04 = new Activity
                {
                    Id = Guid.NewGuid(),
                    Name = "Sing Alone with Bort",
                    Description = "Bort is singing in the pool, come and join him!",
                    StartHour = DateTime.Now,
                    EndHour = DateTime.Now.AddHours(5).AddDays(3),
                    Hotel = context.Hotels.FirstOrDefault()
                };

                Activity act_05 = new Activity
                {
                    Id = Guid.NewGuid(),
                    Name = "Trivial Night",
                    Description = "Community games you can play with your own family or with others",
                    StartHour = DateTime.Now,
                    EndHour = DateTime.Now.AddHours(2).AddDays(4),
                    Hotel = context.Hotels.FirstOrDefault()
                };

                context.Activities.Add(act_01);
                context.Activities.Add(act_02);
                context.Activities.Add(act_03);
                context.Activities.Add(act_04);
                context.Activities.Add(act_05);
                context.SaveChanges();
            }
            #endregion
            #region Bookings
            if (!context.Bookings.Any())
            {
                Booking bk_01 = new Booking
                {
                    Id = Guid.NewGuid(),
                    StartingDate = DateTime.Now,
                    EndDate = DateTime.Now.AddDays(10),
                    Price = 502.25,
                    Customer = context.Customers.Single(c => c.Name == "Pam"),
                    BookedRooms = new List<BookedRoom>()
                };

                Booking bk_02 = new Booking
                {
                    Id = Guid.NewGuid(),
                    StartingDate = DateTime.Parse("10-01-2018"),
                    EndDate = DateTime.Parse("10-01-2018").AddDays(6),
                    Price = 365.95,
                    Customer = context.Customers.Single(c => c.Name == "Eckehard"),
                    BookedRooms = new List<BookedRoom>()
                };

                Booking bk_03 = new Booking
                {
                    Id = Guid.NewGuid(),
                    StartingDate = DateTime.Parse("15-01-2018"),
                    EndDate = DateTime.Parse("15-01-2018").AddDays(9),
                    Price = 450,
                    Customer = context.Customers.Single(c => c.Name == "Ernst"),
                    BookedRooms = new List<BookedRoom>()
                };

                Booking bk_04 = new Booking
                {
                    Id = Guid.NewGuid(),
                    StartingDate = DateTime.Parse("09-01-2018"),
                    EndDate = DateTime.Parse("09-01-2018").AddDays(3),
                    Price = 190,
                    Customer = context.Customers.Single(c => c.Name == "Charlene"),
                    BookedRooms = new List<BookedRoom>()
                };

                Booking bk_05 = new Booking
                {
                    Id = Guid.NewGuid(),
                    StartingDate = DateTime.Parse("03-02-2018"),
                    EndDate = DateTime.Parse("03-02-2018").AddDays(3),
                    Price = 210,
                    Customer = context.Customers.Single(c => c.Name == "Mora"),
                    BookedRooms = new List<BookedRoom>()
                };

                Booking bk_06 = new Booking
                {
                    Id = Guid.NewGuid(),
                    StartingDate = DateTime.Parse("07-02-2018"),
                    EndDate = DateTime.Parse("07-02-2018").AddDays(5),
                    Price = 355.90,
                    Customer = context.Customers.Single(c => c.Name == "Pichi"),
                    BookedRooms = new List<BookedRoom>()
                };

                Booking bk_07 = new Booking
                {
                    Id = Guid.NewGuid(),
                    StartingDate = DateTime.Parse("21-02-2018"),
                    EndDate = DateTime.Parse("21-02-2018").AddDays(2),
                    Price = 160,
                    Customer = context.Customers.Single(c => c.Name == "Ariel"),
                    BookedRooms = new List<BookedRoom>()
                };

                Booking bk_08 = new Booking
                {
                    Id = Guid.NewGuid(),
                    StartingDate = DateTime.Parse("28-02-2018"),
                    EndDate = DateTime.Parse("28-02-2018").AddDays(6),
                    Price = 479.15,
                    Customer = context.Customers.Single(c => c.Name == "Dani"),
                    BookedRooms = new List<BookedRoom>()
                };

                Booking bk_09 = new Booking
                {
                    Id = Guid.NewGuid(),
                    StartingDate = DateTime.Parse("05-03-2018"),
                    EndDate = DateTime.Parse("05-03-2018").AddDays(2),
                    Price = 124.95,
                    Customer = context.Customers.Single(c => c.Name == "Kevin"),
                    BookedRooms = new List<BookedRoom>()
                };

                Booking bk_10 = new Booking
                {
                    Id = Guid.NewGuid(),
                    StartingDate = DateTime.Parse("24-03-2018"),
                    EndDate = DateTime.Parse("24-03-2018").AddDays(4),
                    Price = 410,
                    Customer = context.Customers.Single(c => c.Name == "Lois"),
                    BookedRooms = new List<BookedRoom>()
                };

                context.Bookings.Add(bk_01);
                context.Bookings.Add(bk_02);
                context.Bookings.Add(bk_03);
                context.Bookings.Add(bk_04);
                context.Bookings.Add(bk_05);
                context.Bookings.Add(bk_06);
                context.Bookings.Add(bk_07);
                context.Bookings.Add(bk_08);
                context.Bookings.Add(bk_09);
                context.Bookings.Add(bk_10);
                context.SaveChanges();
            }
            #endregion
            #region Rooms
            if (!context.Rooms.Any())
            {
                Room rm_01 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 101,
                    RoomType = RoomTypeEnum.Single,
                    FloorNumber = 1,
                    Price = 25,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_02 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 102,
                    Price = 40,
                    RoomType = RoomTypeEnum.Double,
                    FloorNumber = 1,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_03 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 201,
                    Price = 100,
                    RoomType = RoomTypeEnum.Suite,
                    FloorNumber = 2,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_04 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 103,
                    RoomType = RoomTypeEnum.Single,
                    FloorNumber = 1,
                    Price = 25,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_05 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 105,
                    RoomType = RoomTypeEnum.Single,
                    FloorNumber = 1,
                    Price = 25,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_06 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 107,
                    RoomType = RoomTypeEnum.Single,
                    FloorNumber = 1,
                    Price = 25,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_07 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 109,
                    RoomType = RoomTypeEnum.Single,
                    FloorNumber = 1,
                    Price = 25,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_08 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 104,
                    Price = 40,
                    RoomType = RoomTypeEnum.Double,
                    FloorNumber = 1,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_09 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 106,
                    Price = 40,
                    RoomType = RoomTypeEnum.Double,
                    FloorNumber = 1,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_10 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 108,
                    Price = 40,
                    RoomType = RoomTypeEnum.Double,
                    FloorNumber = 1,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_11 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 202,
                    Price = 100,
                    RoomType = RoomTypeEnum.Suite,
                    FloorNumber = 2,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_12 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 203,
                    Price = 100,
                    RoomType = RoomTypeEnum.Suite,
                    FloorNumber = 2,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_13 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 204,
                    Price = 100,
                    RoomType = RoomTypeEnum.Suite,
                    FloorNumber = 2,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_14 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 205,
                    Price = 100,
                    RoomType = RoomTypeEnum.Suite,
                    FloorNumber = 2,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                context.Rooms.Add(rm_01);
                context.Rooms.Add(rm_02);
                context.Rooms.Add(rm_03);
                context.Rooms.Add(rm_04);
                context.Rooms.Add(rm_05);
                context.Rooms.Add(rm_06);
                context.Rooms.Add(rm_07);
                context.Rooms.Add(rm_08);
                context.Rooms.Add(rm_09);
                context.Rooms.Add(rm_10);
                context.Rooms.Add(rm_11);
                context.Rooms.Add(rm_12);
                context.Rooms.Add(rm_13);
                context.Rooms.Add(rm_14);
                context.SaveChanges();
            }
            #endregion
            #region BookedRooms
            if (!context.BookedRooms.Any())
            {
                BookedRoom br_01 = new BookedRoom
                {
                    Id = Guid.NewGuid(),
                    Booking = context.Bookings.Single(b => b.Price == 502.25),
                    BookingId = context.Bookings.Single(b => b.Price == 502.25).Id,
                    Room = context.Rooms.Single(r => r.RoomNumber == 101),
                    RoomId = context.Rooms.Single(r => r.RoomNumber == 101).Id
                };

                BookedRoom br_02 = new BookedRoom
                {
                    Id = Guid.NewGuid(),
                    Booking = context.Bookings.Single(b => b.Price == 365.95),
                    BookingId = context.Bookings.Single(b => b.Price == 365.95).Id,
                    Room = context.Rooms.Single(r => r.RoomNumber == 102),
                    RoomId = context.Rooms.Single(r => r.RoomNumber == 102).Id
                };

                BookedRoom br_03 = new BookedRoom
                {
                    Id = Guid.NewGuid(),
                    Booking = context.Bookings.Single(b => b.Price == 450),
                    BookingId = context.Bookings.Single(b => b.Price == 450).Id,
                    Room = context.Rooms.Single(r => r.RoomNumber == 103),
                    RoomId = context.Rooms.Single(r => r.RoomNumber == 103).Id
                };

                BookedRoom br_04 = new BookedRoom
                {
                    Id = Guid.NewGuid(),
                    Booking = context.Bookings.Single(b => b.Price == 190),
                    BookingId = context.Bookings.Single(b => b.Price == 190).Id,
                    Room = context.Rooms.Single(r => r.RoomNumber == 105),
                    RoomId = context.Rooms.Single(r => r.RoomNumber == 105).Id
                };

                BookedRoom br_05 = new BookedRoom
                {
                    Id = Guid.NewGuid(),
                    Booking = context.Bookings.Single(b => b.Price == 210),
                    BookingId = context.Bookings.Single(b => b.Price == 210).Id,
                    Room = context.Rooms.Single(r => r.RoomNumber == 201),
                    RoomId = context.Rooms.Single(r => r.RoomNumber == 201).Id
                };

                BookedRoom br_06 = new BookedRoom
                {
                    Id = Guid.NewGuid(),
                    Booking = context.Bookings.Single(b => b.Price == 355.90),
                    BookingId = context.Bookings.Single(b => b.Price == 355.90).Id,
                    Room = context.Rooms.Single(r => r.RoomNumber == 104),
                    RoomId = context.Rooms.Single(r => r.RoomNumber == 104).Id
                };

                BookedRoom br_07 = new BookedRoom
                {
                    Id = Guid.NewGuid(),
                    Booking = context.Bookings.Single(b => b.Price == 160),
                    BookingId = context.Bookings.Single(b => b.Price == 160).Id,
                    Room = context.Rooms.Single(r => r.RoomNumber == 107),
                    RoomId = context.Rooms.Single(r => r.RoomNumber == 107).Id
                };

                BookedRoom br_08 = new BookedRoom
                {
                    Id = Guid.NewGuid(),
                    Booking = context.Bookings.Single(b => b.Price == 479.15),
                    BookingId = context.Bookings.Single(b => b.Price == 479.15).Id,
                    Room = context.Rooms.Single(r => r.RoomNumber == 106),
                    RoomId = context.Rooms.Single(r => r.RoomNumber == 106).Id
                };

                BookedRoom br_09 = new BookedRoom
                {
                    Id = Guid.NewGuid(),
                    Booking = context.Bookings.Single(b => b.Price == 124.95),
                    BookingId = context.Bookings.Single(b => b.Price == 124.95).Id,
                    Room = context.Rooms.Single(r => r.RoomNumber == 109),
                    RoomId = context.Rooms.Single(r => r.RoomNumber == 109).Id
                };

                BookedRoom br_10 = new BookedRoom
                {
                    Id = Guid.NewGuid(),
                    Booking = context.Bookings.Single(b => b.Price == 410),
                    BookingId = context.Bookings.Single(b => b.Price == 410).Id,
                    Room = context.Rooms.Single(r => r.RoomNumber == 202),
                    RoomId = context.Rooms.Single(r => r.RoomNumber == 202).Id
                };

                context.BookedRooms.Add(br_01);
                context.BookedRooms.Add(br_02);
                context.BookedRooms.Add(br_03);
                context.BookedRooms.Add(br_04);
                context.BookedRooms.Add(br_05);
                context.BookedRooms.Add(br_06);
                context.BookedRooms.Add(br_07);
                context.BookedRooms.Add(br_08);
                context.BookedRooms.Add(br_09);
                context.BookedRooms.Add(br_10);

                context.SaveChanges();
            }
            #endregion
            #region Orders
            if (!context.Orders.Any())
            {
                Order or_01 = new Order
                {
                    Id = Guid.NewGuid(),
                    FinalPrice = 20.25,
                    Comment = "-",
                    OrderDate = DateTime.Now,
                    Customer = context.Customers.Single(c => c.Name == "Pichi"),
                    ProductsOrdered = new List<ProductOrdered>(),
                    Status = "pending",
                    StatusComment = String.Empty,
                    signalRId = String.Empty
                };

                Order or_02 = new Order
                {
                    Id = Guid.NewGuid(),
                    FinalPrice = 10.25,
                    Comment = "-",
                    OrderDate = DateTime.Now.AddHours(2),
                    Customer = context.Customers.Single(c => c.Name == "Lois"),
                    ProductsOrdered = new List<ProductOrdered>(),
                    Status = "pending",
                    StatusComment = String.Empty,
                    signalRId = String.Empty
                };

                Order or_03 = new Order
                {
                    Id = Guid.NewGuid(),
                    FinalPrice = 12,
                    Comment = "-",
                    OrderDate = DateTime.Now.AddHours(1),
                    Customer = context.Customers.Single(c => c.Name == "Lois"),
                    ProductsOrdered = new List<ProductOrdered>(),
                    Status = "accepted",
                    StatusComment = String.Empty,
                    signalRId = String.Empty
                };

                Order or_04 = new Order
                {
                    Id = Guid.NewGuid(),
                    FinalPrice = 15,
                    Comment = "-",
                    OrderDate = DateTime.Now.AddHours(3),
                    Customer = context.Customers.Single(c => c.Name == "Dani"),
                    ProductsOrdered = new List<ProductOrdered>(),
                    Status = "pending",
                    StatusComment = String.Empty,
                    signalRId = String.Empty
                };

                Order or_05 = new Order
                {
                    Id = Guid.NewGuid(),
                    FinalPrice = 8.90,
                    Comment = "-",
                    OrderDate = DateTime.Now.AddHours(5),
                    Customer = context.Customers.Single(c => c.Name == "Ariel"),
                    ProductsOrdered = new List<ProductOrdered>(),
                    Status = "accepted",
                    StatusComment = String.Empty,
                    signalRId = String.Empty
                };

                Order or_06 = new Order
                {
                    Id = Guid.NewGuid(),
                    FinalPrice = 11.25,
                    Comment = "-",
                    OrderDate = DateTime.Now.AddHours(2),
                    Customer = context.Customers.Single(c => c.Name == "Pichi"),
                    ProductsOrdered = new List<ProductOrdered>(),
                    Status = "denied",
                    StatusComment = "No stock",
                    signalRId = String.Empty
                };

                Order or_07 = new Order
                {
                    Id = Guid.NewGuid(),
                    FinalPrice = 3.35,
                    Comment = "-",
                    OrderDate = DateTime.Now.AddHours(4),
                    Customer = context.Customers.Single(c => c.Name == "Kevin"),
                    ProductsOrdered = new List<ProductOrdered>(),
                    Status = "pending",
                    StatusComment = String.Empty,
                    signalRId = String.Empty
                };

                context.Orders.Add(or_01);
                context.Orders.Add(or_02);
                context.Orders.Add(or_03);
                context.Orders.Add(or_04);
                context.Orders.Add(or_05);
                context.Orders.Add(or_06);
                context.Orders.Add(or_07);

                context.SaveChanges();
            }
            #endregion
            #region Products
            if (!context.Products.Any())
            {
                Product pr_01 = new Product
                {
                    Id = Guid.NewGuid(),
                    Hotel = context.Hotels.FirstOrDefault(),
                    Name = "Coca-Cola",
                    Description = "Cold drink with cola flavour",
                    ProductType = ProductTypeEnum.Drink,
                    Available = true,
                    Price = 1.50,
                    ProductsOrdered = new List<ProductOrdered>()
                };

                Product pr_02 = new Product
                {
                    Id = Guid.NewGuid(),
                    Hotel = context.Hotels.FirstOrDefault(),
                    Name = "Towell",
                    Description = "A towell for your needs",
                    ProductType = ProductTypeEnum.Service,
                    Available = true,
                    Price = 3,
                    ProductsOrdered = new List<ProductOrdered>()
                };

                Product pr_03 = new Product
                {
                    Id = Guid.NewGuid(),
                    Hotel = context.Hotels.FirstOrDefault(),
                    Name = "Pizza Peperoni",
                    Description = "Handmade pizza with peperoni and mozarella",
                    ProductType = ProductTypeEnum.Food,
                    Available = false,
                    Price = 5.90,
                    ProductsOrdered = new List<ProductOrdered>()
                };

                Product pr_04 = new Product
                {
                    Id = Guid.NewGuid(),
                    Hotel = context.Hotels.FirstOrDefault(),
                    Name = "Fish and Chips",
                    Description = "Fresh fish with some potato chips",
                    ProductType = ProductTypeEnum.Food,
                    Available = true,
                    Price = 8,
                    ProductsOrdered = new List<ProductOrdered>()
                };

                Product pr_05 = new Product
                {
                    Id = Guid.NewGuid(),
                    Hotel = context.Hotels.FirstOrDefault(),
                    Name = "Rice with meat",
                    Description = "White rice with meat",
                    ProductType = ProductTypeEnum.Food,
                    Available = true,
                    Price = 6,
                    ProductsOrdered = new List<ProductOrdered>()
                };

                Product pr_06 = new Product
                {
                    Id = Guid.NewGuid(),
                    Hotel = context.Hotels.FirstOrDefault(),
                    Name = "Nuggets",
                    Description = "Chicken nuggets",
                    ProductType = ProductTypeEnum.Food,
                    Available = true,
                    Price = 5.90,
                    ProductsOrdered = new List<ProductOrdered>()
                };

                Product pr_07 = new Product
                {
                    Id = Guid.NewGuid(),
                    Hotel = context.Hotels.FirstOrDefault(),
                    Name = "Frankfurt",
                    Description = "Frankfurt with the sauces you want!",
                    ProductType = ProductTypeEnum.Food,
                    Available = true,
                    Price = 2.90,
                    ProductsOrdered = new List<ProductOrdered>()
                };

                Product pr_08 = new Product
                {
                    Id = Guid.NewGuid(),
                    Hotel = context.Hotels.FirstOrDefault(),
                    Name = "Lipton",
                    Description = "Lipton Tea",
                    ProductType = ProductTypeEnum.Drink,
                    Available = true,
                    Price = 1.90,
                    ProductsOrdered = new List<ProductOrdered>()
                };

                Product pr_09 = new Product
                {
                    Id = Guid.NewGuid(),
                    Hotel = context.Hotels.FirstOrDefault(),
                    Name = "Champagne",
                    Description = "French champagne",
                    ProductType = ProductTypeEnum.Drink,
                    Available = true,
                    Price = 8.90,
                    ProductsOrdered = new List<ProductOrdered>()
                };

                Product pr_10 = new Product
                {
                    Id = Guid.NewGuid(),
                    Hotel = context.Hotels.FirstOrDefault(),
                    Name = "Coffee",
                    Description = "Black coffee",
                    ProductType = ProductTypeEnum.Drink,
                    Available = true,
                    Price = 1.25,
                    ProductsOrdered = new List<ProductOrdered>()
                };

                Product pr_11 = new Product
                {
                    Id = Guid.NewGuid(),
                    Hotel = context.Hotels.FirstOrDefault(),
                    Name = "Red Wine",
                    Description = "Red wine from our country",
                    ProductType = ProductTypeEnum.Drink,
                    Available = true,
                    Price = 7,
                    ProductsOrdered = new List<ProductOrdered>()
                };

                Product pr_12 = new Product
                {
                    Id = Guid.NewGuid(),
                    Hotel = context.Hotels.FirstOrDefault(),
                    Name = "Massage",
                    Description = "Massage in your room",
                    ProductType = ProductTypeEnum.Service,
                    Available = true,
                    Price = 25,
                    ProductsOrdered = new List<ProductOrdered>()
                };

                Product pr_13 = new Product
                {
                    Id = Guid.NewGuid(),
                    Hotel = context.Hotels.FirstOrDefault(),
                    Name = "Soap",
                    Description = "Soap recharge for the shower",
                    ProductType = ProductTypeEnum.Service,
                    Available = true,
                    Price = 1,
                    ProductsOrdered = new List<ProductOrdered>()
                };

                Product pr_14 = new Product
                {
                    Id = Guid.NewGuid(),
                    Hotel = context.Hotels.FirstOrDefault(),
                    Name = "Pool Chair",
                    Description = "Reserved chair for you",
                    ProductType = ProductTypeEnum.Service,
                    Available = true,
                    Price = 5,
                    ProductsOrdered = new List<ProductOrdered>()
                };

                context.Products.Add(pr_01);
                context.Products.Add(pr_02);
                context.Products.Add(pr_03);
                context.Products.Add(pr_04);
                context.Products.Add(pr_05);
                context.Products.Add(pr_06);
                context.Products.Add(pr_07);
                context.Products.Add(pr_08);
                context.Products.Add(pr_09);
                context.Products.Add(pr_10);
                context.Products.Add(pr_11);
                context.Products.Add(pr_12);
                context.Products.Add(pr_13);
                context.Products.Add(pr_14);
                context.SaveChanges();
            }
            #endregion
            #region ProductsOrdered
            if (!context.ProductsOrdered.Any())
            {
                ProductOrdered po_01 = new ProductOrdered
                {
                    Id = Guid.NewGuid(),
                    Product = context.Products.Single(p => p.Name == "Coca-Cola"),
                    ProductId = context.Products.Single(p => p.Name == "Coca-Cola").Id,
                    Comments = "Coca-cola without lemon",
                    Quantity = 10,
                    Price = 21.45,
                    Order = context.Orders.Single(o => o.FinalPrice == 20.25),
                    OrderId = context.Orders.Single(o => o.FinalPrice == 20.25).Id
                };

                ProductOrdered po_02 = new ProductOrdered
                {
                    Id = Guid.NewGuid(),
                    Product = context.Products.Single(p => p.Name == "Frankfurt"),
                    ProductId = context.Products.Single(p => p.Name == "Frankfurt").Id,
                    Comments = "",
                    Quantity = 5,
                    Price = 21.45,
                    Order = context.Orders.Single(o => o.FinalPrice == 20.25),
                    OrderId = context.Orders.Single(o => o.FinalPrice == 20.25).Id
                };

                ProductOrdered po_03 = new ProductOrdered
                {
                    Id = Guid.NewGuid(),
                    Product = context.Products.Single(p => p.Name == "Towell"),
                    ProductId = context.Products.Single(p => p.Name == "Towell").Id,
                    Comments = "Towell should be clean",
                    Quantity = 2,
                    Price = 10,
                    Order = context.Orders.Single(o => o.FinalPrice == 10.25),
                    OrderId = context.Orders.Single(o => o.FinalPrice == 10.25).Id
                };

                ProductOrdered po_04 = new ProductOrdered
                {
                    Id = Guid.NewGuid(),
                    Product = context.Products.Single(p => p.Name == "Rice with meat"),
                    ProductId = context.Products.Single(p => p.Name == "Rice with meat").Id,
                    Comments = "Meat well done please",
                    Quantity = 2,
                    Price = 10,
                    Order = context.Orders.Single(o => o.FinalPrice == 12),
                    OrderId = context.Orders.Single(o => o.FinalPrice == 12).Id
                };

                ProductOrdered po_05 = new ProductOrdered
                {
                    Id = Guid.NewGuid(),
                    Product = context.Products.Single(p => p.Name == "Fish and Chips"),
                    ProductId = context.Products.Single(p => p.Name == "Fish and Chips").Id,
                    Comments = "",
                    Quantity = 2,
                    Price = 16,
                    Order = context.Orders.Single(o => o.FinalPrice == 15),
                    OrderId = context.Orders.Single(o => o.FinalPrice == 15).Id
                };

                ProductOrdered po_06 = new ProductOrdered
                {
                    Id = Guid.NewGuid(),
                    Product = context.Products.Single(p => p.Name == "Nuggets"),
                    ProductId = context.Products.Single(p => p.Name == "Nuggets").Id,
                    Comments = "",
                    Quantity = 2,
                    Price = 10,
                    Order = context.Orders.Single(o => o.FinalPrice == 8.90),
                    OrderId = context.Orders.Single(o => o.FinalPrice == 8.90).Id
                };

                ProductOrdered po_07 = new ProductOrdered
                {
                    Id = Guid.NewGuid(),
                    Product = context.Products.Single(p => p.Name == "Lipton"),
                    ProductId = context.Products.Single(p => p.Name == "Lipton").Id,
                    Comments = "",
                    Quantity = 6,
                    Price = 16,
                    Order = context.Orders.Single(o => o.FinalPrice == 11.25),
                    OrderId = context.Orders.Single(o => o.FinalPrice == 11.25).Id
                };

                ProductOrdered po_08 = new ProductOrdered
                {
                    Id = Guid.NewGuid(),
                    Product = context.Products.Single(p => p.Name == "Pool Chair"),
                    ProductId = context.Products.Single(p => p.Name == "Pool Chair").Id,
                    Comments = "",
                    Quantity = 1,
                    Price = 3,
                    Order = context.Orders.Single(o => o.FinalPrice == 3.35),
                    OrderId = context.Orders.Single(o => o.FinalPrice == 3.35).Id
                };

                context.ProductsOrdered.Add(po_01);
                context.ProductsOrdered.Add(po_02);
                context.ProductsOrdered.Add(po_03);

                context.SaveChanges();
            }
            #endregion
            #region Reports
            if (!context.Reports.Any())
            {
                Report rp_01 = new Report
                {
                    Id = Guid.NewGuid(),
                    Description = "Bathroom is not clean",
                    Date = DateTime.Now,
                    Status = "pending",
                    Customer = context.Customers.Single(c => c.Name == "Pichi")
                };

                Report rp_02 = new Report
                {
                    Id = Guid.NewGuid(),
                    Description = "No toilet paper left",
                    Date = DateTime.Now,
                    Status = "pending",
                    Customer = context.Customers.Single(c => c.Name == "Ariel")
                };

                Report rp_03 = new Report
                {
                    Id = Guid.NewGuid(),
                    Description = "Broken glass at pool",
                    Date = DateTime.Now,
                    Status = "seen",
                    Customer = context.Customers.Single(c => c.Name == "Lois")
                };

                Report rp_04 = new Report
                {
                    Id = Guid.NewGuid(),
                    Description = "No waiters at bar",
                    Date = DateTime.Now,
                    Status = "seen",
                    Customer = context.Customers.Single(c => c.Name == "Dani")
                };

                context.Reports.Add(rp_01);
                context.Reports.Add(rp_02);
                context.Reports.Add(rp_03);
                context.Reports.Add(rp_04);

                context.SaveChanges();
            }
            #endregion
            #region Services
            if (!context.Services.Any())
            {
                Service sv_01 = new Service
                {
                    Id = Guid.NewGuid(),
                    Name = "SPA",
                    Description = "Luxury spa in the second floor with private jacuzzi that can be reserved",
                    Hotel = context.Hotels.FirstOrDefault()
                };

                Service sv_02 = new Service
                {
                    Id = Guid.NewGuid(),
                    Name = "GYM",
                    Description = "Luxury gym in the first floor",
                    Hotel = context.Hotels.FirstOrDefault()
                };

                Service sv_03 = new Service
                {
                    Id = Guid.NewGuid(),
                    Name = "Massages",
                    Description = "Massages with diferent techniques, hot stones, mud...",
                    Hotel = context.Hotels.FirstOrDefault()
                };

                Service sv_04 = new Service
                {
                    Id = Guid.NewGuid(),
                    Name = "Pool",
                    Description = "Pool to enjoy the summer",
                    Hotel = context.Hotels.FirstOrDefault()
                };

                Service sv_05 = new Service
                {
                    Id = Guid.NewGuid(),
                    Name = "Kids camp",
                    Description = "Leave your kids with our friendly crew",
                    Hotel = context.Hotels.FirstOrDefault()
                };

                context.Services.Add(sv_01);
                context.Services.Add(sv_02);
                context.Services.Add(sv_03);
                context.Services.Add(sv_04);
                context.Services.Add(sv_05);

                context.SaveChanges();
            }
            #endregion         

            context.SaveChanges();
        }

    }
}
