import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ProductDataService } from "~/core/data-services/product-data.service";
import { Product } from "~/core/entities/product";
import { Order } from "~/core/entities/order";
import { ProductOrdered } from "~/core/entities/product-ordered";
import { Customer } from "~/core/entities/customer";
import { CustomerDataService } from "~/core/data-services/customer-data.service";

import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import { TextField } from "ui/text-field";

import { confirm } from "ui/dialogs";
import { OrdersDataService } from "~/core/data-services/orders-data.service";

import { getString } from "tns-core-modules/application-settings/application-settings";
require("nativescript-nodeify");

const uuidv4 = require("uuid/v4");

@Component({
	selector: "OrderNew",
	moduleId: module.id,
	templateUrl: "./order-new.component.html",
	styleUrls: ["./order-new.component.scss"],
	providers: [ProductDataService, CustomerDataService, OrdersDataService]
})
export class OrderNewComponent implements OnInit {
	_SnackBar: SnackBar = new SnackBar();
	private foodItems: Array<Product> = [];
	private drinkItems: Array<Product> = [];
	private serviceItems: Array<Product> = [];

	private comment: string = "";
	private finalPrice: number = 0;
	private orderId = uuidv4();
	private orderItems: Order = new Order();
	private customer: Customer;
	private customerId;

	constructor(private routerExtensions: RouterExtensions,
				private productDataService: ProductDataService,
				private customerDataService: CustomerDataService,
				private orderDataService: OrdersDataService) { }

	ngOnInit(): void {
		this.customerId = getString("customer_id");

		this.productDataService.getProduct().subscribe((products) => {
			products.forEach(product => {
				if (product.available) {
					if (product.productType === "Food") {
						this.foodItems.push(product);
					} else if (product.productType === "Service") {
						this.serviceItems.push(product);
					} else {
						this.drinkItems.push(product);
					}
				}
			});
		});
		this.customerDataService.getCustomerById(this.customerId).subscribe((customer) => {
			this.customer = customer;
		}, (err) => {
			console.log("the customer was not found");
		});
	}

	goBack() {
		this.routerExtensions.back();
	}

	onTapFood(food) {
		if (this.orderItems.productsOrdered) {
			const found = this.orderItems.productsOrdered.find(p => p.product.name === this.foodItems[food.index].name);
			if (found) {
				found.quantity += 1;
				this.finalPrice = this.finalPrice + this.foodItems[food.index].price;
				this.orderItems.finalPrice = this.finalPrice;
			} else {
				this.finalPrice = this.finalPrice + this.foodItems[food.index].price;
				this.orderItems.productsOrdered.push(new ProductOrdered({
					id: uuidv4(),
					order: new Order({
						id: this.orderId,
						orderDate: new Date(),
						comment: this.comment,
						finalPrice: this.finalPrice
					}),
					product: this.foodItems[food.index],
					quantity: 1
				}));
			}
		} else {
			this.orderItems.productsOrdered = new Array<ProductOrdered>();
			this.finalPrice = this.foodItems[food.index].price;
			this.orderItems.productsOrdered.push(new ProductOrdered({
				id: uuidv4(),
				order: new Order({
					id: this.orderId,
					orderDate: new Date(),
					comment: this.comment,
					finalPrice: this.finalPrice
				}),
				product: this.foodItems[food.index],
				quantity: 1
			}));
		}
		this.showSnackbar(this.foodItems[food.index].name + " added to cart");
		this.updateOrder();
	}

	onTapDrink(drink) {
		if (this.orderItems.productsOrdered) {
			const found = this.orderItems.productsOrdered.find(p => p.product.name === this.drinkItems[drink.index].name);
			if (found) {
				found.quantity += 1;
				this.finalPrice = this.finalPrice + this.drinkItems[drink.index].price;
				this.orderItems.finalPrice = this.finalPrice;
			} else {
				this.finalPrice = this.finalPrice + this.drinkItems[drink.index].price;
				this.orderItems.productsOrdered.push(new ProductOrdered({
					id: uuidv4(),
					order: new Order({
						id: this.orderId,
						orderDate: new Date(),
						comment: this.comment,
						finalPrice: this.finalPrice
					}),
					product: this.drinkItems[drink.index],
					quantity: 1
				}));
			}
		} else {
			this.orderItems.productsOrdered = new Array<ProductOrdered>();
			this.finalPrice = this.drinkItems[drink.index].price;
			this.orderItems.productsOrdered.push(new ProductOrdered({
				id: uuidv4(),
				order: new Order({
					id: this.orderId,
					orderDate: new Date(),
					comment: this.comment,
					finalPrice: this.finalPrice
				}),
				product: this.drinkItems[drink.index],
				quantity: 1
			}));
		}
		this.showSnackbar(this.drinkItems[drink.index].name + " added to cart");
		this.updateOrder();
	}

	onTapService(service) {
		if (this.orderItems.productsOrdered) {
			const found = this.orderItems.productsOrdered.find(p => p.product.name === this.serviceItems[service.index].name);
			if (found) {
				found.quantity += 1;
				this.finalPrice = this.finalPrice + this.serviceItems[service.index].price;
				this.orderItems.finalPrice = this.finalPrice;
			} else {
				this.finalPrice = this.finalPrice + this.serviceItems[service.index].price;
				this.orderItems.productsOrdered.push(new ProductOrdered({
					id: uuidv4(),
					order: new Order({
						id: this.orderId,
						orderDate: new Date(),
						comment: this.comment,
						finalPrice: this.finalPrice
					}),
					product: this.serviceItems[service.index],
					quantity: 1
				}));
			}
		} else {
			this.orderItems.productsOrdered = new Array<ProductOrdered>();
			this.finalPrice = this.serviceItems[service.index].price;
			this.orderItems.productsOrdered.push(new ProductOrdered({
				id: uuidv4(),
				order: new Order({
					id: this.orderId,
					orderDate: new Date(),
					comment: this.comment,
					finalPrice: this.finalPrice
				}),
				product: this.serviceItems[service.index],
				quantity: 1
			}));
		}
		this.showSnackbar(this.serviceItems[service.index].name + " added to cart");
		this.updateOrder();
	}

	updateOrder() {

		this.orderItems.finalPrice = this.finalPrice;
		this.orderItems.productsOrdered.forEach((order) => {
			//order.order.customer = this.customer;
			order.order.finalPrice = this.finalPrice;
			order.order.comment = this.comment;
			order.order.id = this.orderId;
			order.order.status = "pending";
		});
	}

	showSnackbar(text: string) {
		const options: SnackBarOptions = {
			actionText: "Dismiss",
			snackText: text,
			hideDelay: 3000,
			textColor: "#ffffff",
			backgroundColor: "#2196F3"
		};

		this._SnackBar.action(options);
	}

	showSnackbarError(text: string) {
		const options: SnackBarOptions = {
			actionText: "Dismiss",
			snackText: text,
			hideDelay: 3000,
			textColor: "#ffffff",
			backgroundColor: "#FF5555"
		};

		this._SnackBar.action(options);
	}

	addQuantity(item) {
		item.quantity = item.quantity + 1;
		this.finalPrice = this.finalPrice + item.product.price;
		this.updateOrder();
	}

	removeQuantity(item) {
		if (item.quantity > 1) {
			item.quantity = item.quantity - 1;
			this.finalPrice = this.finalPrice - item.product.price;
		} else {
			const itemToRemove = this.orderItems.productsOrdered.indexOf(item);
			this.orderItems.productsOrdered.splice(itemToRemove, 1);
			this.finalPrice = this.finalPrice - item.product.price;
		}

		this.updateOrder();
	}

	onTextChange(args) {
		const textField = <TextField>args.object;
		this.comment = textField.text;
	}

	submitOrder() {
		if (this.finalPrice > 0) {

			const options = {
				title: "Confirm order",
				message: "Are you sure?",
				okButtonText: "Yes",
				cancelButtonText: "No"
			};

			confirm(options).then((result: boolean) => {
				if (result) {
					this.orderItems.customer = this.customer;
					this.orderItems.id = this.orderId;
					this.orderItems.comment = this.comment;
					this.orderItems.status = "pending";
					this.orderItems.orderDate = new Date();
					this.updateOrder();

					this.orderDataService.createOrders(this.orderItems).subscribe((res) => {
						this.orderId = uuidv4();
						this.showSnackbar("Ordered succesfully");
						this.routerExtensions.navigate(["/orderList"], {
							transition: {
								name: "fade"
							},
							clearHistory: true
						});
					}, (err) => {
						console.log(err);
						this.showSnackbarError("An error has ocurred");
						this.orderId = uuidv4();
					});
				}
			});

		} else {
			this.showSnackbarError("You must select a product");
		}
	}
}
