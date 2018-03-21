import { Customer } from './customer';

export class Accounting {
	id: string;
	price: number;
	date: string;
	paymentType: string;
	customer: Customer;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}


