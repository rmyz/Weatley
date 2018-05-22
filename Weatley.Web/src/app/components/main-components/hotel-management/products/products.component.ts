import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../../../core/entities/product';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { ProductDataService } from '../../../../core/data-services/product-data.service';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';

const uuidv4 = require('uuid/v4');

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
	providers: [ProductDataService]
})
export class ProductsComponent implements OnInit {

	displayedColumns = ['name', 'description', 'productType', 'price', 'available', 'function'];

	dataSource: MatTableDataSource<Product>;
	dataAccount: Product[] = [];

	private temp = '';
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	isLoading = true;

	constructor(private productDataService: ProductDataService,
				private router: Router,
				private dialog: MatDialog,
				public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.productDataService.getProduct().subscribe(product => {
			this.dataAccount = product;
			this.dataSource = new MatTableDataSource<Product>(this.dataAccount);
			setTimeout(() => {
				this.dataSource.paginator = this.paginator;
				this.dataSource.sort = this.sort;
			});
			this.isLoading = false;
		});
	}

	goToEdit(id) {
		this.router.navigate([RoutingEnum.HOTEL_MANAGEMENT + '/' + RoutingEnum.HOTEL_MANAGEMENT_PRODUCTS_EDIT + '/' + id]);
	}

	goToCreate() {
		this.router.navigate([RoutingEnum.HOTEL_MANAGEMENT + '/' + RoutingEnum.HOTEL_MANAGEMENT_PRODUCTS_CREATE]);
	}

	onDelete(item) {
		const dialogRef = this.dialog.open(DialogComponent);

		dialogRef.afterClosed().subscribe(result => {
			this.deleteRow(item, result);
		});
	}

	applyFilter(filterValue: string) {

		filterValue = filterValue.trim();
		filterValue = filterValue.toLowerCase();
		this.dataSource.filter = filterValue;
	}

	deleteRow(item, isDeleteable) {
		if (isDeleteable) {
			const index = this.dataSource.data.findIndex(i =>
				i.id === item.id
			);
			this.productDataService.deleteProduct(item.id).subscribe(res => {
				this.snackBar.open('Room deleted succesfully', 'Dismiss', {
					duration: 3000,
					verticalPosition: 'top',
					horizontalPosition: 'end'
				});
			}, err => {
				console.log(err);
			});
			this.dataSource.data.splice(index, 1);
		}
		this.dataSource = new MatTableDataSource<Product>(this.dataSource.data);
		setTimeout(() => {
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

}
