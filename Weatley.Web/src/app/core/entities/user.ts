import { Hotel } from './hotel';

export class User {
	id: string;
	username: string;
	password: string;
	userType: string;
	name: string;
	hotel: Hotel;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
