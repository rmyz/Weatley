import { Product } from './product';
import { Customer } from './customer';

export class Order {
	id: number;
	finalPrice: number;
	comment: string;
	OrderDate: Date;
	DeliveryDate: Date;
	customer: Customer;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
