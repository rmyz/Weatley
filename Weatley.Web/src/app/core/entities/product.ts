export class Product {
    id: number;
    name: string;
    description: string;
    type: string;
    available: boolean;
    hotelId: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
