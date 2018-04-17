import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Report } from '../entities/report';
import { Order } from '../entities/order';

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
