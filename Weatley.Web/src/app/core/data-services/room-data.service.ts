import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../entities/room';
import { CommonService } from '../services/common.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RoomDataService {
	constructor(private http: HttpClient,
		private commonService: CommonService) {}

	getRooms(): Observable<Array<Room>> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get<Array<Room>>(url + 'Rooms', {headers: options});
	}

	getRoomById(id: string): Observable<Room> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get<Room>(url + 'Rooms/' + id, {headers: options});
	}

	createRoom(room: Room) {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.post<Room>(url + 'Rooms/', room, {headers: options});
	}

	updateRoom(room: Room): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put<Room>(url + 'Rooms/' + room.id , room, {headers: options});
	}

	deleteRoom(roomId: string): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.delete<Room>(url + 'Rooms/' + roomId, {headers: options});
		}
}
