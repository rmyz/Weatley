export class Activities {
    id: number;
    name: string;
    description: string;
    startHour: string;
    endHour: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
