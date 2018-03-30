import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class IsLoggedService {

	private subject = new Subject<any>();

	sendMessage(message: boolean) {
		this.subject.next(message);
	}

	getMessage(): Observable<any> {
		return this.subject.asObservable();
	}
}
