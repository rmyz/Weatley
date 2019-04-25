import { Hotel } from '../entities/hotel';

export interface IProfile {
  token: string;
  expiration: string;
  user: IUser;
}

export interface IUser {
  id: string;
  userName: string;
  name: string;
  surname: string;
  userType: string;
  email: string;
  hotel: Hotel;
}
