import { Hotel } from '../entities/hotel';

export interface IProfile {
	token: string;
	expiration: string;
	claims: IClaim[];
	currentUser: IUser;
}

interface IClaim {
	type: string;
	value: string;
}

export interface IUser {
	id: string;
	username: string;
	email;
	userType: string;
	name: string;
	surname: string;
	hotel: Hotel;
}
