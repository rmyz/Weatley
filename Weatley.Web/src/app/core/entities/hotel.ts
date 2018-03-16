import { Service } from './service';
import { Product } from './product';

export class Hotel {
    id: string;
    name: string;
    description: string;
    address: string;
    email: string;
    phone: string;
    web: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
