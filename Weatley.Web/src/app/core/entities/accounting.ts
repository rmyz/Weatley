import { Booking } from './booking';
import { Order } from './order';

export class Accounting {
    id: string;
    price: number;
    date: string;
    paymentType: string;
    booking: Booking;
    orders: Order[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}


