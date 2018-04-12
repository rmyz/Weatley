export class Room {
	id: number;
	roomNumber: number;
	floor: number;
	type: string;
	hotelId: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
