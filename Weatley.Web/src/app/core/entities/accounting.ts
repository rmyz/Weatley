import { Customer } from './customer';

export class Accounting {
	id: string;
	finalPrice: number;
	date: Date;
	paymentType: string;
	customer: Customer;
	paid: boolean;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}


