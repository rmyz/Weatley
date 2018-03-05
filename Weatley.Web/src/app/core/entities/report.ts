import { Customer } from './customer';

export class Report {
    id: number;
    description: string;
    date: string;
    fixed: boolean;
    customer: Customer;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
