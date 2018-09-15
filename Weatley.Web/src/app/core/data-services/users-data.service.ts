import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';
import { IUser } from '../models/user-model';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UsersDataService {
	constructor(private http: HttpClient,
		private commonService: CommonService) { }

	getUsers(): Observable<Array<IUser>> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.get<Array<IUser>>(url + 'Users', {headers: options});
	}

	getUserById(id: string): Observable<IUser> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.get<IUser>(url + 'Users/' + id, {headers: options});
	}

	updateUser(user: IUser): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put<IUser>(url + 'Users/' + user.id , user, {headers: options});
	}

	deleteUser(userId: string): Observable<any> {

		const url = this.commonService.getBaseUrl();
		const options = this.commonService.checkAuth();

		return this.http
			.delete<IUser>(url + 'Users/' + userId, {headers: options});
	}
}
