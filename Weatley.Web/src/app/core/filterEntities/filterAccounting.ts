export class FilterAccounting {
	id: string;
	finalPrice: number;
	date: Date;
	paymentType: string;
	name: string;
	surname: string;
	paid: boolean;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}

