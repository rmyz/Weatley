import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { CustomerDataService } from '../../../../core/data-services/customer-data.service';
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBarConfig } from '@angular/material';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from '../../../../core/entities/customer';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss'],
    providers: [CustomerDataService]
})
export class CustomerComponent implements OnInit {

    displayedColumns = ['name', 'surname', 'dni', 'function', 'function_edit'];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    dataSource: MatTableDataSource<Customer>;
    dataCustomer: Customer[] = [];

    constructor(private customerDataService: CustomerDataService,
        private router: Router,
        private dialog: MatDialog,
        public snackBar: MatSnackBar) { }

    ngOnInit() {
        this.customerDataService.getCustomers().subscribe(customers => {
            this.dataCustomer = customers;
            this.dataSource = new MatTableDataSource<Customer>(this.dataCustomer);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            console.log(this.dataCustomer);
        });
    }

    applyFilter(filterValue: string) {

        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    goToEdit(id) {
        console.log(id);
        
		this.router.navigate([RoutingEnum.CUSTOMER_EDIT_ROUTE + '/' + id]);
    }
    goToCreate() {
		this.router.navigate([RoutingEnum.CUSTOMER_CREATE_ROUTE]);
	}
}
