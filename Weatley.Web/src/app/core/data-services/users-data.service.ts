import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserProfile } from '../Auth-services/User.Profile';
import { CommonService } from '../services/common.service';
import { IUser } from '../models/user-model';


@Injectable()
export class UsersDataService {
	constructor(private http: Http,
		private authProfile: UserProfile,
		private commonService: CommonService) { }

	getUsers(): Observable<IUser[]> {
		const url = 'http://localhost:5000/api/Users';

		const options = this.commonService.checkAuth();
		return this.http.get(url, options)
			.map(res => res.json());
	}

	getUserById(id: string): Observable<IUser> {
		const url = 'http://localhost:5000/api/Users/' + id;

		const options = this.commonService.checkAuth();
		return this.http.get(url, options)
			.map(res => <IUser>res.json());
	}

	updateUser(user: IUser): Observable<any> {
		const options = this.commonService.checkAuth();

		return this.http
			.put('http://localhost:5000/api/Users/' + user.id , user, options)
			.map((res: Response) => {
				return (res.json());
		});
	}

	deleteUser(userId: string): Observable<any> {
		const options = this.commonService.checkAuth();

		return this.http
			.delete('http://localhost:5000/api/Users/' + userId, options)
			.map((res: Response) => {
				return res.json();
			});
	}
}
