using System;
using System.Collections.Generic;
using System.Text;
using Weatley.Model.Entities;

namespace Weatley.DataAccess.Abstract
{
        public interface IAccountingRepository : IEntityBaseRepository<Accounting> { }

        public interface IActivityRepository : IEntityBaseRepository<Activity> { }

        public interface IBookedRoomRepository : IEntityBaseRepository<BookedRoom> { }

        public interface IBookingRepository : IEntityBaseRepository<Booking> { }

        public interface ICustomerRepository : IEntityBaseRepository<Customer> { }

        public interface IHotelRepository : IEntityBaseRepository<Hotel> { }

        public interface IOrderRepository : IEntityBaseRepository<Order> { }

        public interface IProductRepository : IEntityBaseRepository<Product> { }

        public interface IProductOrderedRepository : IEntityBaseRepository<ProductOrdered> { }

        public interface IReportRepository : IEntityBaseRepository<Report> { }

        public interface IRoomRepository : IEntityBaseRepository<Room> { }

        public interface IServiceRepository : IEntityBaseRepository<Service> { }

}
