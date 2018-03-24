import { Injectable } from '@angular/core';
import { Accounting } from '../entities/accounting';

@Injectable()
export class AccountingDataService {
	constructor() {}

	getAccounting(): Accounting[] {
		return  [
		new Accounting ({ id: '1', client: "Manolo1", price: 500.24, date: '2018-03-14T23:00:00.000Z', paymentType: 'Efectiu'}),
		new Accounting ({ id: '2', client: "Manolo2", price: 500.24, date: '5/15/2018', paymentType: 'Efectiu'}),
		new Accounting ({ id: '3', client: "Manolo3", price: 500.24, date: '5/15/2018', paymentType: 'Efectiu'}),
		new Accounting ({ id: '4', client: "Manolo4", price: 500.24, date: '5/15/2018', paymentType: 'Efectiu'}),
		new Accounting ({ id: '5', client: "Manolo5", price: 500.24, date: '5/15/2018', paymentType: 'Efectiu'}),
		new Accounting ({ id: '6', client: "Manolo6", price: 500.24, date: '5/15/2018', paymentType: 'Efectiu'}),
		new Accounting ({ id: '7', client: "Manolo7", price: 500.24, date: '5/15/2018', paymentType: 'Efectiu'}),
		];
	}
	getAccountingById(id: string): Accounting {
		const accountings = this.getAccounting();
		return accountings.find(accounting => accounting.id === id);
	}
}
