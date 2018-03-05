export class Room {
    id: number;
    roomNumber: number;
    floor: number;
    type: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
