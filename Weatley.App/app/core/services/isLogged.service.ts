import { Injectable } from "@angular/core";
import { Observable ,  Subject } from "rxjs";

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
