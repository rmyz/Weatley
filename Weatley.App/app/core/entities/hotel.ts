import { Service } from './service';
import { Product } from './product';
import { Activity } from './activity';
import { Room } from './room';
import { IUser } from '../models/user-model';

export class Hotel {
	id: string;
	name: string;
	description: string;
	address: string;
	email: string;
	phoneNumber: string;
	website: string;
	activities: Activity[];
	rooms: Room[];
	products: Product[];
	services: Service[];
	users: IUser[];

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
