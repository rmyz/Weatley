import { Room } from './room';
import { Booking } from './booking';

export class BookedRoom {
	id: string;
	room: Room;
	roomId: string;
	booking: Booking;
	bookingId: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
