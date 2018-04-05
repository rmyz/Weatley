import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-customer-order-dialog',
  templateUrl: './customer-order-dialog.component.html',
  styleUrls: ['./customer-order-dialog.component.scss']
})
export class CustomerOrderDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CustomerOrderDialogComponent>) { }

  ngOnInit() {
  }

}
