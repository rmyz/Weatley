import { Product } from './product';
import { Customer } from './customer';
import { ProductOrdered } from './product-ordered';

export class Order {
	id: string;
	finalPrice: number;
	comment: string;
	orderDate: Date;
	deliveryDate: Date;
	customer: Customer;
	productsOrdered: ProductOrdered[];
	status: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
