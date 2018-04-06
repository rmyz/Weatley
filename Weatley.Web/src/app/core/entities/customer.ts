import { Booking } from './booking';

export class Customer {
	id: string;
	name: string;
	surname: string;
	identificationDocument: string;
	phoneNumber: string;
	email: string;
	bookings: Booking[];

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
