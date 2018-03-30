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

		return this.http
					.get('http://localhost:5000/api/Rooms', options)
					.map((res: Response) => res.json());
	}
}
