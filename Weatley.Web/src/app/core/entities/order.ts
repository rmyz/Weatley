import { Product } from './product';
import { Customer } from './customer';

export class Order {
    id: number;
    price: number;
    comment: string;
    status: boolean;
    orderDate: string;
    deliveryDate: string;
    products: Product[];
    customer: Customer;
}
