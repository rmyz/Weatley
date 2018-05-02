import { Customer } from './customer';
import { Room } from './room';
import { BookedRoom } from './bookedRoom';

export class Booking {
	id: string;
	startingDate: Date;
	endDate: Date;
	comment: string;
	price: number;
	customer: Customer;
	bookedRooms: BookedRoom[];
	rooms: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
