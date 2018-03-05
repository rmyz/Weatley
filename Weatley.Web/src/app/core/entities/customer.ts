export class Customer {
    id: number;
    name: string;
    surname: string;
    dni: string;
    phone: string;
    email: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
