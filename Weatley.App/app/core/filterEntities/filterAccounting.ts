export class FilterAccounting {
	id: string;
	finalPrice: number;
	date: Date;
	paymentType: string;
	name: string;
	surname: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}

