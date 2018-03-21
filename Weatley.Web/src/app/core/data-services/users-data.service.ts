import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from '../entities/user';

@Injectable()
export class UserDataService {

	constructor(private http: HttpClient) { }

	getUsers(): Observable<User[]> {
		return this.http.get<User[]>('http://localhost:5000/api/Users');
	}

	getUser(id: string): Observable<User> {
		return this.http.get<User>('http://localhost:5000/api/Users/' + id);
	}
}
