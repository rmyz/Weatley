import { Component, OnInit, ViewChild } from '@angular/core';
import { GraphQLDataService } from '../../../../core/data-services/graphql-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FilterAccounting } from '../../../../core/filterEntities/filterAccounting';
import { CommonService } from '../../../../core/services/common.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss'],
  providers: [GraphQLDataService],
})
export class AccountingComponent implements OnInit {
  displayedColumns = ['name', 'surname', 'date', 'finalPrice', 'paid', 'paymentType', 'function'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  dataSource: MatTableDataSource<FilterAccounting>;
  dataAccount: FilterAccounting[] = [];
  isLoading = true;

  constructor(
    private graphQLDataService: GraphQLDataService,
    private router: Router,
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
    private commonService: CommonService,
  ) {}

  async ngOnInit() {
    const { get } = await this.commonService.importQuery('accounting');

    this.graphQLDataService.get(get).subscribe(({ data: { accountings }, loading }) => {
      this.dataAccount = accountings.map((accounting) => {
        return new FilterAccounting({
          ...accounting,
          name: accounting.customer.name,
          surname: accounting.customer.surname,
        });
      });

      this.dataSource = new MatTableDataSource<FilterAccounting>(this.dataAccount);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

      this.isLoading = loading;
    });
  }

  goToEdit(id) {
    this.router.navigate([RoutingEnum.ACCOUNTING_EDIT_ROUTE + '/' + id]);
  }

  goToCreate() {
    this.router.navigate([RoutingEnum.ACCOUNTING_CREATE_ROUTE]);
  }

  onDelete(item) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.deleteRow(item);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  async deleteRow(item) {
    const index = this.dataSource.data.findIndex((i) => i.id === item.id);
    const { deleteQuery } = await this.commonService.importQuery('accounting');
    this.graphQLDataService.delete(deleteQuery, item.id).subscribe(
      () => {
        this.snackBar.open('Accounting deleted successfully', 'Dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
        });
      },
      (err) => {
        console.error(err);
      },
    );
    this.dataSource.data.splice(index, 1);

    this.dataSource = new MatTableDataSource<FilterAccounting>(this.dataSource.data);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
