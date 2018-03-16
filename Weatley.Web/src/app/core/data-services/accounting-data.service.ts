import { Injectable } from '@angular/core';
import { Accounting } from '../entities/accounting';

@Injectable()
export class AccountingDataService {
	constructor() {}

	getAccounting(): Accounting[] {
		return  [
		new Accounting ({ id: '1', price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', customerId: '1'}),

		new Accounting ({ id: '2', price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', customerId: '1'}),

		new Accounting ({ id: '3', price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', customerId: '1'}),

		new Accounting ({ id: '4', price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', customerId: '1'}),

		new Accounting ({ id: '5', price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', customerId: '1'}),

		new Accounting ({ id: '6', price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', customerId: '1'}),

		new Accounting ({ id: '7', price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', customerId: '1'}),
		];
	}
}
