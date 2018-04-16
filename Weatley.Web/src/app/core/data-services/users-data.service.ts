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

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.get(url + 'Users', options)
			.map(res => res.json());
	}

	getUserById(id: string): Observable<IUser> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.get(url + 'Users/' + id, options)
			.map(res => <IUser>res.json());
	}

	updateUser(user: IUser): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put(url + 'Users/' + user.id , user, options)
			.map((res: Response) => {
				return (res.json());
		});
	}

	deleteUser(userId: string): Observable<any> {

		const url = this.commonService.getBaseUrl();
		const options = this.commonService.checkAuth();

		return this.http
			.delete(url + 'Users/' + userId, options)
			.map((res: Response) => {
				return res.json();
			});
	}
}
