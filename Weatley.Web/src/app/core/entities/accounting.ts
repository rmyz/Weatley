import { Booking } from './booking';
import { Order } from './order';

export class Accounting {
    id: number;
    price: number;
    date: string;
    paymentType: string;
    booking: Booking;
    orders: Order[];

}
