import { Service } from './service';
import { Product } from './product';
import { Activity } from './activity';
import { Room } from './room';
import { User } from './user';

export class Hotel {
	id: string;
	name: string;
	description: string;
	address: string;
	email: string;
	phone: string;
	web: string;
	activities: Activity[];
	rooms: Room[];
	products: Product[];
	services: Service[];
	users: User[];

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
