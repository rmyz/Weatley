using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Weatley.Model.Entities;

namespace Weatley.DataAccess
{
    public class WeatleyContext : DbContext
    {
        public DbSet<Accounting> Accountings { get; set; }
        public DbSet<Activity> Activities { get; set; }
        public DbSet<BookedRoom> BookedRooms { get; set; }
        public DbSet<Booking> Booking { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductOrdered> ProductsOrdered { get; set; }
        public DbSet<Report> Reports { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<User> Users { get; set; }

        public WeatleyContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Cascade;
            }

            #region Accounting
            modelBuilder.Entity<Accounting>()
                .ToTable("Accounting");

            modelBuilder.Entity<Accounting>()
                .Property(a => a.Id)
                .IsRequired();

            modelBuilder.Entity<Accounting>()
                .Property(a => a.Id)
                .HasDefaultValueSql("NEWID()");

            modelBuilder.Entity<Accounting>()
               .Property(a => a.Date)
               .HasDefaultValue(DateTime.Now);

            modelBuilder.Entity<Accounting>()
                .HasOne(a => a.Customer)
                .WithMany(c => c.Accountings);

            #endregion
            #region Activity
            modelBuilder.Entity<Activity>()
                .ToTable("Activity");

            modelBuilder.Entity<Activity>()
                .Property(a => a.Id)
                .IsRequired();

            modelBuilder.Entity<Activity>()
                .Property(a => a.Id)
                .HasDefaultValueSql("NEWID()");

            modelBuilder.Entity<Activity>()
                .Property(a => a.StartHour)
                .HasDefaultValue(DateTime.Now);

            modelBuilder.Entity<Activity>()
                .HasOne(a => a.Hotel)
                .WithMany(h => h.Activities);

            #endregion
            #region BookedRoom

            modelBuilder.Entity<BookedRoom>()
                .ToTable("BookedRoom");

            modelBuilder.Entity<BookedRoom>()
                .HasKey(br => new { br.BookingId, br.RoomId });

            modelBuilder.Entity<BookedRoom>()
                .HasOne(br => br.Booking)
                .WithMany(b => b.BookedRooms)
                .HasForeignKey(br => br.BookingId);

            modelBuilder.Entity<BookedRoom>()
               .HasOne(br => br.Room)
               .WithMany(r => r.BookedRooms)
               .HasForeignKey(br => br.RoomId);

            #endregion
            #region Booking

            modelBuilder.Entity<Booking>()
               .ToTable("Booking");

            modelBuilder.Entity<Booking>()
                .Property(b => b.Id)
                .IsRequired();

            modelBuilder.Entity<Booking>()
                .Property(b => b.Id)
                .HasDefaultValueSql("NEWID()");

            modelBuilder.Entity<Booking>()
                .Property(b => b.StartingDate)
                .HasDefaultValue(DateTime.Now);

            modelBuilder.Entity<Booking>()
                .HasOne(b => b.Customer)
                .WithMany(c => c.Bookings);

            modelBuilder.Entity<Booking>()
                .HasMany(b => b.BookedRooms)
                .WithOne(br => br.Booking);

            #endregion
            #region Customer

            modelBuilder.Entity<Customer>()
                .ToTable("Customer");

            modelBuilder.Entity<Customer>()
                .Property(c => c.Id)
                .IsRequired();

            modelBuilder.Entity<Customer>()
                .Property(c => c.Id)
                .HasDefaultValueSql("NEWID()");

            modelBuilder.Entity<Customer>()
                .HasMany(c => c.Accountings)
                .WithOne(a => a.Customer);

            modelBuilder.Entity<Customer>()
                .HasMany(c => c.Bookings)
                .WithOne(b => b.Customer);

            modelBuilder.Entity<Customer>()
                .HasMany(c => c.Reports)
                .WithOne(r => r.Customer);

            modelBuilder.Entity<Customer>()
                .HasMany(c => c.Orders)
                .WithOne(o => o.Customer);

            #endregion
            #region Hotel
            modelBuilder.Entity<Hotel>()
                .ToTable("Hotel");

            modelBuilder.Entity<Hotel>()
                .Property(h => h.Id)
                .IsRequired();

            modelBuilder.Entity<Hotel>()
                .Property(h => h.Id)
                .HasDefaultValueSql("NEWID()");

            modelBuilder.Entity<Hotel>()
                .HasMany(h => h.Activities)
                .WithOne(a => a.Hotel);

            modelBuilder.Entity<Hotel>()
                .HasMany(h => h.Users)
                .WithOne(u => u.Hotel);

            modelBuilder.Entity<Hotel>()
                .HasMany(h => h.Products)
                .WithOne(p => p.Hotel);

            modelBuilder.Entity<Hotel>()
                .HasMany(h => h.Rooms)
                .WithOne(r => r.Hotel);

            modelBuilder.Entity<Hotel>()
                .HasMany(h => h.Services)
                .WithOne(s => s.Hotel);
            #endregion
            #region Order
            modelBuilder.Entity<Order>()
                .ToTable("Order");

            modelBuilder.Entity<Order>()
                .Property(o => o.Id)
                .IsRequired();

            modelBuilder.Entity<Order>()
                .Property(o => o.Id)
                .HasDefaultValueSql("NEWID()");

            modelBuilder.Entity<Order>()
               .Property(o => o.OrderDate)
               .HasDefaultValue(DateTime.Now);

            modelBuilder.Entity<Order>()
                .HasOne(o => o.Customer)
                .WithMany(c => c.Orders);

            modelBuilder.Entity<Order>()
                .HasMany(o => o.ProductsOrdered)
                .WithOne(po => po.Order);
            #endregion
            #region Product

            modelBuilder.Entity<Product>()
                .ToTable("Product");

            modelBuilder.Entity<Product>()
                .Property(p => p.Id)
                .IsRequired();

            modelBuilder.Entity<Product>()
                .Property(p => p.Id)
                .HasDefaultValueSql("NEWID()");

            modelBuilder.Entity<Product>()
                .HasOne(p => p.Hotel)
                .WithMany(h => h.Products);

            modelBuilder.Entity<Product>()
                .HasMany(p => p.ProductsOrdered)
                .WithOne(po => po.Product);

            #endregion
            #region ProductOrdered

            modelBuilder.Entity<ProductOrdered>()
               .ToTable("ProductOrdered");

            modelBuilder.Entity<ProductOrdered>()
                .HasKey(po => new { po.OrderId, po.ProductId });

            modelBuilder.Entity<ProductOrdered>()
                .HasOne(po => po.Product)
                .WithMany(p => p.ProductsOrdered)
                .HasForeignKey(po => po.ProductId);

            modelBuilder.Entity<ProductOrdered>()
               .HasOne(po => po.Order)
               .WithMany(o => o.ProductsOrdered)
               .HasForeignKey(po => po.OrderId);
            #endregion
            #region Report

            modelBuilder.Entity<Report>()
               .ToTable("Report");

            modelBuilder.Entity<Report>()
                .Property(r => r.Id)
                .IsRequired();

            modelBuilder.Entity<Report>()
                .Property(r => r.Id)
                .HasDefaultValueSql("NEWID()");

            modelBuilder.Entity<Report>()
                .HasOne(r => r.Customer)
                .WithMany(c => c.Reports);

            #endregion
            #region Room
            modelBuilder.Entity<Room>()
               .ToTable("Room");

            modelBuilder.Entity<Room>()
                .Property(r => r.Id)
                .IsRequired();

            modelBuilder.Entity<Room>()
                .Property(r => r.Id)
                .HasDefaultValueSql("NEWID()");

            modelBuilder.Entity<Room>()
                .HasOne(r => r.Hotel)
                .WithMany(h => h.Rooms);

            modelBuilder.Entity<Room>()
                .HasMany(r => r.BookedRooms)
                .WithOne(br => br.Room);
            #endregion
            #region Service
            modelBuilder.Entity<Service>()
               .ToTable("Service");

            modelBuilder.Entity<Service>()
                .Property(s => s.Id)
                .IsRequired();

            modelBuilder.Entity<Service>()
                .Property(s => s.Id)
                .HasDefaultValueSql("NEWID()");

            modelBuilder.Entity<Service>()
                .HasOne(s => s.Hotel)
                .WithMany(h => h.Services);

            #endregion
            #region User

            modelBuilder.Entity<User>()
               .ToTable("User");

            modelBuilder.Entity<User>()
                .Property(u => u.Id)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(u => u.Id)
                .HasDefaultValueSql("NEWID()");

            modelBuilder.Entity<User>()
                .HasOne(u => u.Hotel)
                .WithMany(h => h.Users);

            #endregion

        }
    }
}
