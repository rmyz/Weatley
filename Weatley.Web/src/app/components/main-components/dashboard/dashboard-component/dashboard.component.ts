import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../../core/entities/booking';
import { Customer } from '../../../../core/entities/customer';
import { Order } from '../../../../core/entities/order';

import { OrdersDataService } from '../../../../core/data-services/orders-data.service';
import { CustomerDataService } from '../../../../core/data-services/customer-data.service';
import { ReportDataService } from '../../../../core/data-services/reports-data.service';
import { BookingDataService } from '../../../../core/data-services/bookings-data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [OrdersDataService, CustomerDataService, ReportDataService, BookingDataService],
})
export class DashboardComponent implements OnInit {
  ordersRevenue = 0;
  order1: Order;
  order2: Order;
  order3: Order;

  customer1: Customer;
  customer2: Customer;
  customer3: Customer;

  customerCount = 0;

  notification = 0;

  isLoading = true;

  constructor(
    private ordersDataService: OrdersDataService,
    private customerDataService: CustomerDataService,
    private reportDataService: ReportDataService,
    private bookingDataService: BookingDataService,
  ) {}

  ngOnInit() {
    this.ordersDataService.getOrders().subscribe((orders) => {
      const order: Order[] = orders;
      for (let i = 0; i < order.length; i++) {
        this.ordersRevenue = this.ordersRevenue + order[i].finalPrice;
        this.order1 = order[0];
        this.order2 = order[1];
        this.order3 = order[2];
        if (order[i].status === 'pending') {
          this.notification = this.notification + 1;
        }
      }
      this.isLoading = false;
    });

    this.bookingDataService.getBookings().subscribe((bookings) => {
      const booking: Booking[] = bookings;
      for (let i = 0; i < booking.length; i++) {
        this.customer1 = booking[0].customer;
        this.customer2 = booking[1].customer;
        this.customer3 = booking[2].customer;
      }
      this.customerCount = booking.length;
    });

    this.reportDataService.getReports().subscribe((reports) => {
      reports.forEach((r) => {
        if (r.status === 'pending') {
          this.notification = this.notification + 1;
        }
      });
    });
  }
}
