export class Activity {
	id: string;
	name: string;
	description: string;
	startHour: Date;
	endHour: Date;
	hotelId: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
