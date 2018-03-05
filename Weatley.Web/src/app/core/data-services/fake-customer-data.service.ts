import { Injectable } from '@angular/core';
import { Customer } from '../entities/customer';

@Injectable()
export class FakeCustomerDataService {
    constructor() {}

    getCustomers(): Customer[] {
        return  [new Customer({id: 1, name: 'Jaime', surname: 'Perez', dni: '39201832Y', phone: '684239210', email: 'jaime@gmail.com'}),
        new Customer({id: 2, name: 'Pere', surname: 'Gomez', dni: '29201832Y', phone: '684239219', email: 'pere@gmail.com'}),
        new Customer({id: 3, name: 'Ignasi', surname: 'Fernandez', dni: '39406832Y', phone: '624249210', email: 'ignasi@gmail.com'}),
        new Customer({id: 4, name: 'Maria', surname: 'Gonzalez', dni: '10201832Y', phone: '684239216', email: 'maria@gmail.com'}),
        new Customer({id: 5, name: 'Teresa', surname: 'Silla', dni: '39271832Y', phone: '684237210', email: 'teresa@gmail.com'}),
        new Customer({id: 6, name: 'Claudia', surname: 'Martinez', dni: '39201332Y', phone: '634239210', email: 'claudia@gmail.com'})];
    }
}
