import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import "rxjs/add/observable/throw";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

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
