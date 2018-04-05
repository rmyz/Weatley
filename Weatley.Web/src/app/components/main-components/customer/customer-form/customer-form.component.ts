import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CustomerDataService } from '../../../../core/data-services/customer-data.service';
import { Customer } from '../../../../core/entities/customer';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
const uuidv4 = require('uuid/v4');

@Component({
    selector: 'app-customer-form',
    templateUrl: './customer-form.component.html',
    styleUrls: ['./customer-form.component.scss'],
    providers: [CustomerDataService]
})
export class CustomerFormComponent implements OnInit {

    private customerForm = new FormGroup({
        name: new FormControl(),
        surname: new FormControl(),
        identificationDocument: new FormControl(),
        phoneNumber: new FormControl(),
        email: new FormControl()
    });
    private customerById: Customer = new Customer();
    private id: string;
    private customers: Customer[] = [];

    constructor(private route: ActivatedRoute,
        private customerDataService: CustomerDataService,
        private fb: FormBuilder,
        private snackBar: MatSnackBar) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.loadData(this.id);
        });

        this.customerDataService.getCustomers().subscribe(customers => {
            this.customers = customers;
        });
    }

    private loadData(id: string) {
        if (id) {
            this.customerDataService.getCustomerById(id).subscribe(customers => {
                this.customerById = customers;

                this.customerForm = this.fb.group({
                    name: [this.customerById.name, Validators.required],
                    surname: [this.customerById.surname, Validators.required],
                    identificationDocument: [this.customerById.identificationDocument, Validators.required],
                    phoneNumber: [this.customerById.phoneNumber, Validators.required],
                    email: [this.customerById.email, Validators.required]
                });
            });
        } else {
            this.customerForm = this.fb.group({
                name: ['', Validators.required],
                surname: ['', Validators.required],
                identificationDocument: ['', Validators.required],
                phoneNumber: ['', Validators.required],
                email: ['', Validators.required]
            });
        }
    }

    submitCustomer() {
        
        if (this.customerForm.valid) {
            this.customerById = this.customerForm.value;
            if (this.id) {
                this.customerById.id = this.id;
                this.customerDataService.updateCustomers(this.customerById).subscribe(res => {
                    this.snackBar.open('Customers updated succesfully', 'Dismiss', {
                        duration: 3000,
                        verticalPosition: 'top',
                        horizontalPosition: 'end'
                    });
                    this.cancel();
                }, err => {
                    console.log(err);
                });
            } else {
                this.customerById.id = uuidv4();
                this.customerDataService.createCustomer(this.customerById).subscribe(res => {
                    this.snackBar.open('Customer created succesfully', 'Dismiss', {
                        duration: 3000,
                        verticalPosition: 'top',
                        horizontalPosition: 'end'
                    });
                    this.cancel();
                }, err => {
                    console.log(err);
                });
            }
        } else {
            this.snackBar.open('The inputs are not valid', 'Dismiss', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'end'
            });
        }
    }

    cancel() {
        history.go(-1);
    }
}