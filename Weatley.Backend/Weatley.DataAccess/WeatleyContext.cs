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
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }

            #region Accounting
            modelBuilder.Entity<Accounting>()
                .ToTable("Accounting");

            modelBuilder.Entity<Accounting>()
                .Property(s => s.Id)
                .IsRequired();

            modelBuilder.Entity<Accounting>()
               .Property(s => s.Date)
               .HasDefaultValue(DateTime.Now);
            #endregion
        }
    }
}
