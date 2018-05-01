import { Product } from './product';
import { Order } from './order';

export class ProductOrdered {
	id: string;
	order: Order;
	product: Product;
	quantity: number;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
