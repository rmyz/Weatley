import { Customer } from './customer';
import { Room } from './room';

export class Booking {
    id: number;
    startDate: string;
    endDate: string;
    comment: string;
    price: number;
    room: Room[];
    customer: Customer;

        constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
