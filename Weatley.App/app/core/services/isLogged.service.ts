import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import "rxjs/add/observable/throw";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class IsLoggedService {

	private subject = new BehaviorSubject<any>(true);

	sendMessage(message: boolean) {
		this.subject.next(message);
	}

	getMessage(): Observable<any> {
		return this.subject.asObservable();
	}
}
