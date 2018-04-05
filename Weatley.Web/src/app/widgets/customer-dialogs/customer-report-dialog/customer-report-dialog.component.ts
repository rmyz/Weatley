import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-customer-report-dialog',
  templateUrl: './customer-report-dialog.component.html',
  styleUrls: ['./customer-report-dialog.component.scss']
})
export class CustomerReportDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CustomerReportDialogComponent>) { }

  ngOnInit() {
  }

}
