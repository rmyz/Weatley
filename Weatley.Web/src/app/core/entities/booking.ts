import { Customer } from './customer';
import { Room } from './room';

export class Booking {
    id: string;
    startDate: Date;
    endDate: Date;
    comment: string;
    price: number;
    customerId: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
