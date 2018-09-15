import { Hotel } from './hotel';

export class Room {
	id: string;
	roomNumber: number;
	floorNumber: number;
	roomType: string;
	price: number;
	hotel: Hotel;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
