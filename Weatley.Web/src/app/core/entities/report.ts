import { Customer } from './customer';

export class Report {
    id: number;
    description: string;
    date: Date;
    fixed: boolean;
    customerId: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
