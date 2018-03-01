export class MenuItem {
    name: string;
    icon: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
