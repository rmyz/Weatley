using System;
using System.Collections.Generic;
using System.Linq;
using Weatley.Model.Entities;
using Weatley.Model.Enums;

namespace Weatley.DataAccess
{
    public class WeatleyDbInitializer
    {
        private static WeatleyContext context;

        public static void Initialize(WeatleyContext Context)
        {
            context = Context;
            context.Database.EnsureCreated();

            InitializeWeatleyDB();
        }

        private static void InitializeWeatleyDB()
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
                    Id = Guid.NewGuid(),
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


            context.SaveChanges();
        }
    }
}
