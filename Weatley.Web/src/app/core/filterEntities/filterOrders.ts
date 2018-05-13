import { Order } from '../entities/order';

export class FilterOrder {
	id: string;
	finalPrice: number;
	name: string;
	surname: string;
	status: string;
	orderDate: Date;
	order: Order;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
