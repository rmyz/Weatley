import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Room } from '../entities/room';
import { CommonService } from '../services/common.service';

@Injectable()
export class RoomDataService {
	constructor(private http: Http,
		private commonService: CommonService) {}

	getRooms(): Observable<Room[]> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get(url + 'Rooms', options)
					.map((res: Response) => res.json());
	}

	getRoomById(id: string): Observable<Room> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get(url + 'Rooms/' + id, options)
					.map((res: Response) => res.json());
	}

	createRoom(room: Room) {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.post(url + 'Rooms/', room, options)
			.map((res: Response) => {
				return new Room(res.json());
			});
	}

	updateRoom(room: Room): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put(url + 'Rooms/' + room.id , room, options)
			.map((res: Response) => {
				return new Room(res.json());
		});
	}

	deleteRoom(roomId: string): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.delete(url + 'Rooms/' + roomId, options)
			.map((res: Response) => {
				return res.json();
			});
		}
}
