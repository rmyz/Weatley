import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { v4 } from 'uuid';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Accounting } from '../../../../core/entities/accounting';
import { GraphQLDataService } from '../../../../core/data-services/graphql-data.service';
import { Customer } from '../../../../core/entities/customer';
import { CommonService } from '../../../../core/services/common.service';

@Component({
  selector: 'app-accounting-form',
  templateUrl: './accounting-form.component.html',
  styleUrls: ['./accounting-form.component.scss'],
  providers: [GraphQLDataService],
})
export class AccountingFormComponent implements OnInit {
  private accountingForm = new FormGroup({
    customer: new FormControl(),
    finalPrice: new FormControl(),
    date: new FormControl(),
    paid: new FormControl(),
    paymentType: new FormControl(),
  });
  private accountingById: Accounting = new Accounting({
    customer: null,
  });
  private id: string;
  private fullName;
  private customers: Customer[] = [];

  constructor(
    private graphQLDataService: GraphQLDataService,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.loadData();
    });
  }

  private async loadData() {
    if (this.id) {
      const { getById } = await this.commonService.importQuery('accounting');
      this.graphQLDataService.getById(getById, this.id).subscribe(({ data: { accounting } }) => {
        this.accountingById = accounting;
        this.accountingById.date = new Date(this.accountingById.date);
        this.fullName = `${this.accountingById.customer.name} ${
          this.accountingById.customer.surname
        }`;

        this.accountingForm = this.fb.group({
          customer: [this.accountingById.customer, Validators.required],
          finalPrice: [this.accountingById.finalPrice, Validators.required],
          date: [this.accountingById.date, Validators.required],
          paid: [this.accountingById.paid, Validators.required],
          paymentType: [this.accountingById.paymentType, Validators.required],
        });
        this.accountingForm.value;
      });
    } else {
      this.accountingForm = this.fb.group({
        customer: [null, Validators.required],
        finalPrice: ['', Validators.required],
        date: ['', Validators.required],
        paid: [null, Validators.required],
        paymentType: ['', Validators.required],
      });

      const { get } = await this.commonService.importQuery('customer');
      this.graphQLDataService.get(get).subscribe(({ data: { customers } }) => {
        this.customers = customers;
      });
    }
  }

  async submitAccounting() {
    if (this.accountingForm.valid) {
      this.accountingById = this.accountingForm.value;

      if (this.id) {
        this.accountingById.id = this.id;
        const { update } = await this.commonService.importQuery('accounting');

        this.graphQLDataService.update(update, this.accountingById).subscribe(
          () => {
            this.snackBar.open('Accounting updated successfully', 'Dismiss', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'end',
            });
            this.goBack();
          },
          (err) => {
            console.error(err);
          },
        );
      } else {
        this.accountingById.id = v4();
        const { create } = await this.commonService.importQuery('accounting');

        this.graphQLDataService.create(create, this.accountingById).subscribe(
          () => {
            this.snackBar.open('Accounting created successfully', 'Dismiss', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'end',
            });
            this.goBack();
          },
          (err) => {
            console.error(err);
          },
        );
      }
    } else {
      this.snackBar.open('The inputs are not valid', 'Dismiss', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'end',
      });
    }
  }

  goBack() {
    history.go(-1);
  }
}
