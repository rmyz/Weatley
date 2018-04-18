import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../../../../core/data-services/product-data.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../../../../core/entities/product';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

const uuidv4 = require('uuid/v4');

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.scss'],
	providers: [ProductDataService]
})
export class ProductFormComponent implements OnInit {

	private productForm = new FormGroup ({
		name: new FormControl(),
		description: new FormControl(),
		price: new FormControl(),
		available: new FormControl(),
		productType: new FormControl()
	});
	private productById: Product = new Product({
	});
	private id: string;

	constructor(private productDataService: ProductDataService,
				private route: ActivatedRoute,
				private fb: FormBuilder,
				private snackBar: MatSnackBar) { }

	ngOnInit() {
			this.route.params.subscribe(params => {
				this.id = params['id'];
				this.loadData(this.id);
			});
	}

	private loadData(id: string) {
		if (id) {
			this.productDataService.getProductById(id).subscribe(product => {
				console.log(product);
				this.productById = product;

				this.productForm = this.fb.group({
					name: [this.productById.name, Validators.required],
					description: [this.productById.description, Validators.required],
					price: [this.productById.price, Validators.required],
					available: [this.productById.available, Validators.required],
					productType: [this.productById.productType, Validators.required]
				});
			});
		} else {
			this.productForm = this.fb.group({
				name: ['', Validators.required],
				description: ['', Validators.required],
				price: ['', Validators.required],
				available: [null, Validators.required],
				productType: [null, Validators.required]
			});
		}
	}

	submitRoom() {
		if (this.productForm.valid) {
			this.productById = this.productForm.value;
			if (this.id) {
				this.productById.id = this.id;
				this.productDataService.updateProduct(this.productById).subscribe(res => {
					this.snackBar.open('Product updated succesfully', 'Dismiss', {
						duration: 3000,
						verticalPosition: 'top',
						horizontalPosition: 'end'
					});
					this.cancel();
				}, err => {
					console.log(err);
				});
			} else {
				this.productById.id = uuidv4();
				this.productDataService.createProduct(this.productById).subscribe(res => {
					this.snackBar.open('Product created succesfully', 'Dismiss', {
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
