import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Response } from '@angular/http';

@Injectable()
export class CommonService {
	private baseUrl = 'http://localhost:5000/api';

	constructor() { }

	getBaseUrl(): string {
		return this.baseUrl;
	}

	handleFullError(error: Response) {
		return Observable.throw(error);
	}

	handleError(error: Response): Observable<any> {
		const errorMessage = error.json();
		console.error(errorMessage);
		return Observable.throw(errorMessage.error || 'Server error');
	}
}
