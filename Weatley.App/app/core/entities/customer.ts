import { Booking } from './booking';
import { Accounting } from './accounting';
import { Order } from './order';
import { Report } from './report';

export class Customer {
	id: string;
	name: string;
	surname: string;
	identificationDocument: string;
	phoneNumber: string;
	email: string;
	bookings: Booking[];
	accountings: Accounting[];
	orders: Order[];
	reports: Report[];

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
