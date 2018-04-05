import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-customer-accouting-dialog',
  templateUrl: './customer-accouting-dialog.component.html',
  styleUrls: ['./customer-accouting-dialog.component.scss']
})
export class CustomerAccoutingDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CustomerAccoutingDialogComponent>) { }

  ngOnInit() {
  }

}
