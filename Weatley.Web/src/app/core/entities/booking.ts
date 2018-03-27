import { Customer } from './customer';
import { Room } from './room';
import { BookedRoom } from './bookedRoom';

export class Booking {
	id: string;
	startDate: Date;
	endDate: Date;
	comment: string;
	price: number;
	customer: Customer;
	bookedRooms: BookedRoom[];

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
