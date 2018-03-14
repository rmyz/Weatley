import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-accounting-form',
  templateUrl: './accounting-form.component.html',
  styleUrls: ['./accounting-form.component.scss']
})
export class AccountingFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AccountingFormComponent>) { }

  ngOnInit() {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
