import { Product } from './product';
import { Customer } from './customer';

export class Order {
    id: number;
    price: number;
    comment: string;
    status: boolean;
    orderDate: Date;
    deliveryDate: Date;
    customerId: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
