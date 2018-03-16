export class Service {
    id: number;
    name: string;
    description: string;
    hotelId: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
