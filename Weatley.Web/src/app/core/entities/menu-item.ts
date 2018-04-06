export class MenuItem {
    name: string;
    icon: string;
    route: string;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
