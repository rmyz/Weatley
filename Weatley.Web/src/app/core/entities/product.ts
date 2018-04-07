import { Hotel } from './hotel';

export class Product {
	id: string;
	name: string;
	description: string;
	productType: string;
	available: boolean;
	hotel: Hotel;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
