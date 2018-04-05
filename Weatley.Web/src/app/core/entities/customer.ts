export class Customer {
    id: string;
    name: string;
    surname: string;
    identificationDocument: string;
    phoneNumber: string;
    email: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
