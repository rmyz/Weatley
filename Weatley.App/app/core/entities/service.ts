import { Hotel } from './hotel';

export class Service {
	id: string;
	name: string;
	description: string;
	hotel: Hotel;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
