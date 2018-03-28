import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Room } from '../entities/room';

@Injectable()
export class RoomDataService {
	constructor(private http: Http) {}

	getRooms(): Observable<Room[]> {
		return this.http
					.get('http://localhost:5000/api/Rooms')
					.map((res: Response) => res.json());
	}
}
