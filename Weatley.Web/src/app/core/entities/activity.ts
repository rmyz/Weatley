import { Hotel } from './hotel';

export class Activity {
	id: string;
	name: string;
	description: string;
	startHour: Date;
	endHour: Date;
	hotel: Hotel;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
