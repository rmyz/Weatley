import { Booking } from './booking';
import { Order } from './order';

export class Accounting {
	id: string;
	price: number;
	date: Date;
	paymentType: string;
	customerId: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}


