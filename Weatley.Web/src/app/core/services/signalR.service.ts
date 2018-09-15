import { Injectable } from '@angular/core';
import { Observable ,  Subject } from 'rxjs';

@Injectable()
export class SignalRService {

	private subject = new Subject<any>();

	sendReport(report: any) {
		this.subject.next(report);
	}

	sendOrder(order: any) {
		this.subject.next(order);
	}

	getMessage(): Observable<any> {
		return this.subject.asObservable();
	}
}
