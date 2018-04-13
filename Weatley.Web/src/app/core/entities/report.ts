import { Customer } from './customer';

export class Report {
	id: string;
	description: string;
	date: Date;
	status: string;
	customer: Customer;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
