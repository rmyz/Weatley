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
            #region Customers
            if (!context.Customers.Any())
            {
                Customer cust_01 = new Customer
                {
                    Id = Guid.NewGuid(),
                    Email = "user@gmail.com",
                    IdentificationDocument = "20193013T",
                    Accountings = new List<Accounting>(),
                    Name = "User",
                    Surname = "One",
                    PhoneNumber = "641567532",
                    Bookings = new List<Booking>(),
                    Orders = new List<Order>(),
                    Reports = new List<Report>()
                };

                Customer cust_02 = new Customer
                {
                    Id = Guid.NewGuid(),
                    Email = "user2@gmail.com",
                    IdentificationDocument = "31193537T",
                    Accountings = new List<Accounting>(),
                    Name = "User",
                    Surname = "Two",
                    PhoneNumber = "698712617",
                    Bookings = new List<Booking>(),
                    Orders = new List<Order>(),
                    Reports = new List<Report>()
                };
                context.Customers.Add(cust_01);
                context.Customers.Add(cust_02);
                context.SaveChanges();
            }
            #endregion
            #region Hotels
            if (!context.Hotels.Any())
            {
                Hotel hot_01 = new Hotel
                {
                    Id = Guid.NewGuid(),
                    Name = "Hotel One",
                    Description = "Just a test hotel",
                    Address = "Fake Street 123",
                    Email = "hotelone@gmail.com",
                    PhoneNumber = "936842157",
                    Website = "hotelone.com",
                    Activities = new List<Activity>(),
                    Services = new List<Service>(),
                    Products = new List<Product>(),
                    Users = new List<User>(),
                    Rooms = new List<Room>()
                };

                Hotel hot_02 = new Hotel
                {
                    Id = Guid.Parse("782A6441-7A9D-4C1C-9B9F-27E13ABD7CD1"),
                    Name = "Hotel Two",
                    Description = "Just a test hotel2",
                    Address = "Fake Street 321",
                    Email = "hoteltwo@gmail.com",
                    PhoneNumber = "968742365",
                    Website = "hoteltwo.com",
                    Activities = new List<Activity>(),
                    Services = new List<Service>(),
                    Products = new List<Product>(),
                    Users = new List<User>(),
                    Rooms = new List<Room>()
                };
                context.Hotels.Add(hot_01);
                context.Hotels.Add(hot_02);
                context.SaveChanges();
            }
            #endregion 
            #region Accountings
            if (!context.Accountings.Any())
            {
                Accounting acc_01 = new Accounting
                {
                    Id = Guid.NewGuid(),
                    Customer = context.Customers.FirstOrDefault(),
                    PaymentType = PaymentTypeEnum.Cash,
                    Date = DateTime.Now,
                    FinalPrice = 290
                };

                Accounting acc_02 = new Accounting
                {
                    Id = Guid.NewGuid(),
                    Customer = context.Customers.FirstOrDefault(),
                    PaymentType = PaymentTypeEnum.CreditCard,
                    Date = DateTime.Now,
                    FinalPrice = 350.25
                };

                context.Accountings.Add(acc_01);
                context.Accountings.Add(acc_02);
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
                    Description = "Come at 5:00 pm at the pool to drink some free mojitos",
                    StartHour = DateTime.Now,
                    EndHour = DateTime.Now.AddHours(2),
                    Hotel = context.Hotels.FirstOrDefault()
                };

                Activity act_02 = new Activity
                {
                    Id = Guid.NewGuid(),
                    Name = "Kids camp",
                    Description = "Come at 12:00 am at the reception to let your kids have a good time",
                    StartHour = DateTime.Now,
                    EndHour = DateTime.Now.AddHours(1),
                    Hotel = context.Hotels.FirstOrDefault()
                };

                context.Activities.Add(act_01);
                context.Activities.Add(act_02);
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
                    EndDate = DateTime.Now.AddDays(3),
                    Price = 250.35,
                    Customer = context.Customers.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Booking bk_02 = new Booking
                {
                    Id = Guid.NewGuid(),
                    StartingDate = DateTime.Now,
                    EndDate = DateTime.Now.AddDays(6),
                    Price = 365.95,
                    Customer = context.Customers.LastOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                context.Bookings.Add(bk_01);
                context.Bookings.Add(bk_02);
                context.SaveChanges();
            }
            #endregion
            #region Rooms
            if (!context.Rooms.Any())
            {
                Room rm_01 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 129,
                    RoomType = RoomTypeEnum.Single,
                    FloorNumber = 1,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_02 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 241,
                    RoomType = RoomTypeEnum.Double,
                    FloorNumber = 2,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                Room rm_03 = new Room
                {
                    Id = Guid.NewGuid(),
                    RoomNumber = 312,
                    RoomType = RoomTypeEnum.Suite,
                    FloorNumber = 3,
                    Hotel = context.Hotels.FirstOrDefault(),
                    BookedRooms = new List<BookedRoom>()
                };

                context.Rooms.Add(rm_01);
                context.Rooms.Add(rm_02);
                context.Rooms.Add(rm_03);

                context.SaveChanges();
            }
            #endregion
            #region BookedRooms
            if (!context.BookedRooms.Any())
            {
                BookedRoom br_01 = new BookedRoom
                {
                    Id = Guid.NewGuid(),
                    Booking = context.Bookings.FirstOrDefault(),
                    BookingId = context.Bookings.FirstOrDefault().Id,
                    Room = context.Rooms.FirstOrDefault(),
                    RoomId = context.Rooms.FirstOrDefault().Id
                };

                BookedRoom br_02 = new BookedRoom
                {
                    Id = Guid.NewGuid(),
                    Booking = context.Bookings.LastOrDefault(),
                    BookingId = context.Bookings.LastOrDefault().Id,
                    Room = context.Rooms.LastOrDefault(),
                    RoomId = context.Rooms.LastOrDefault().Id
                };

                context.BookedRooms.Add(br_01);
                context.BookedRooms.Add(br_02);

                context.SaveChanges();
            }
            #endregion
            #region Orders
            if (!context.Orders.Any())
            {
                Order or_01 = new Order
                {
                    Id = Guid.NewGuid(),
                    FinalPrice = 139.35,
                    Comment = "Cola without lemon",
                    OrderDate = DateTime.Now,
                    Customer = context.Customers.FirstOrDefault(),
                    ProductsOrdered = new List<ProductOrdered>(),
                    Status = "pending",
                    StatusComment = String.Empty,
                    signalRId = String.Empty
                };

                Order or_02 = new Order
                {
                    Id = Guid.NewGuid(),
                    FinalPrice = 250.25,
                    Comment = "No ice on lemonade",
                    OrderDate = DateTime.Now,
                    Customer = context.Customers.LastOrDefault(),
                    ProductsOrdered = new List<ProductOrdered>(),
                    Status = "pending",
                    StatusComment = String.Empty,
                    signalRId = String.Empty
                };

                Order or_03 = new Order
                {
                    Id = Guid.NewGuid(),
                    FinalPrice = 300,
                    Comment = "-",
                    OrderDate = DateTime.Now,
                    Customer = context.Customers.LastOrDefault(),
                    ProductsOrdered = new List<ProductOrdered>(),
                    Status = "accepted",
                    StatusComment = String.Empty,
                    signalRId = String.Empty
                };

                context.Orders.Add(or_01);
                context.Orders.Add(or_02);
                context.Orders.Add(or_03);

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
                    ProductsOrdered = new List<ProductOrdered>()
                };

                context.Products.Add(pr_01);
                context.Products.Add(pr_02);
                context.Products.Add(pr_03);

                context.SaveChanges();
            }
            #endregion
            #region ProductsOrdered
            if (!context.ProductsOrdered.Any())
            {
                ProductOrdered po_01 = new ProductOrdered
                {
                    Id = Guid.NewGuid(),
                    Product = context.Products.FirstOrDefault(),
                    ProductId = context.Products.FirstOrDefault().Id,
                    Comments = "Coca-cola without lemon",
                    Quantity = 10,
                    Price = 21.45,
                    Order = context.Orders.FirstOrDefault(),
                    OrderId = context.Orders.FirstOrDefault().Id
                };

                ProductOrdered po_02 = new ProductOrdered
                {
                    Id = Guid.NewGuid(),
                    Product = context.Products.LastOrDefault(),
                    ProductId = context.Products.LastOrDefault().Id,
                    Comments = "Towell should be clean",
                    Quantity = 2,
                    Price = 10,
                    Order = context.Orders.LastOrDefault(),
                    OrderId = context.Orders.LastOrDefault().Id
                };

                ProductOrdered po_03 = new ProductOrdered
                {
                    Id = Guid.NewGuid(),
                    Product = context.Products.LastOrDefault(),
                    ProductId = context.Products.LastOrDefault().Id,
                    Comments = "Towell should be clean",
                    Quantity = 2,
                    Price = 10,
                    Order = context.Orders.FirstOrDefault(),
                    OrderId = context.Orders.FirstOrDefault().Id
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
                    Customer = context.Customers.FirstOrDefault()
                };

                Report rp_02 = new Report
                {
                    Id = Guid.NewGuid(),
                    Description = "No toilet paper left",
                    Date = DateTime.Now,
                    Status = "pending",
                    Customer = context.Customers.FirstOrDefault()
                };

                Report rp_03 = new Report
                {
                    Id = Guid.NewGuid(),
                    Description = "Broken glass at pool",
                    Date = DateTime.Now,
                    Status = "seen",
                    Customer = context.Customers.FirstOrDefault()
                };

                Report rp_04 = new Report
                {
                    Id = Guid.NewGuid(),
                    Description = "No waiters at bar",
                    Date = DateTime.Now,
                    Status = "seen",
                    Customer = context.Customers.FirstOrDefault()
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

                context.Services.Add(sv_01);
                context.Services.Add(sv_02);

                context.SaveChanges();
            }
            #endregion
            #region Users
            if (!context.Users.Any())
            {
                var user = new User
                {
                    Email = "Admin@admin.com",
                    UserName = "Admin"
                };
                userManager.CreateAsync(user, "Pa$$w0rd");
            }
            #endregion
            context.SaveChanges();
        }

    }
}
