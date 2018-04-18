export class FilterOrder {
	id: string;
	finalPrice: number;
	name: string;
	surname: string;
	status: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
