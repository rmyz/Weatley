export class FilterBooking {
	id: string;
	startingDate: Date;
	endDate: Date;
	comment: string;
	price: number;
	name: string;
	surname: string;
	rooms: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
