import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ProductDataService } from "~/core/data-services/product-data.service";
import { Product } from "~/core/entities/product";
import { Order } from "~/core/entities/order";
import { ProductOrdered } from "~/core/entities/product-ordered";
import { Customer } from "~/core/entities/customer";
import { CustomerDataService } from "~/core/data-services/customer-data.service";

const uuidv4 = require("uuid/v4");

@Component({
	selector: "OrderNew",
	moduleId: module.id,
	templateUrl: "./order-new.component.html",
	styleUrls: ["./order-new.component.scss"],
	providers: [ProductDataService, CustomerDataService]
})
export class OrderNewComponent implements OnInit {
	private foodItems: Array<Product> = [];
	private drinkItems: Array<Product> = [];
	private serviceItems: Array<Product> = [];

	private comment: string = "";
	private finalPrice: number = 0;
	private orderId = uuidv4();
	private orderItems: Order = new Order();
	private customer: Customer;
	private customerId = "ed90a54c-d224-49aa-8046-f88ba013f854";

	constructor(private routerExtensions: RouterExtensions,
				private productDataService: ProductDataService,
				private customerDataService: CustomerDataService) { }

	ngOnInit(): void {
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
		});
	}

	goBack() {
		this.routerExtensions.back();
	}

	onTapFood(food) {
		if (this.orderItems.productsOrdered) {
			let changed = false;
			const found = this.orderItems.productsOrdered.find(p => p.product.name === this.foodItems[food.index].name);
			if (found) {
				found.quantity += 1;
				changed = true;
				this.finalPrice = this.finalPrice + this.foodItems[food.index].price;
				this.orderItems.finalPrice = this.finalPrice;
			} else {
				this.finalPrice = this.finalPrice + this.foodItems[food.index].price;
				this.orderItems.productsOrdered.push(new ProductOrdered({
					id: uuidv4(),
					order: new Order({
						id: this.orderId,
						orderDate: new Date(),
						customer: this.customer,
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
					customer: this.customer,
					comment: this.comment,
					finalPrice: this.finalPrice
				}),
				product: this.foodItems[food.index],
				quantity: 1
			}));
		}
		this.updateOrder();
	}

	onTapDrink(drink) {
		if (this.orderItems.productsOrdered) {
			let changed = false;
			const found = this.orderItems.productsOrdered.find(p => p.product.name === this.drinkItems[drink.index].name);
			if (found) {
				found.quantity += 1;
				changed = true;
				this.finalPrice = this.finalPrice + this.drinkItems[drink.index].price;
				this.orderItems.finalPrice = this.finalPrice;
			} else {
				this.finalPrice = this.finalPrice + this.drinkItems[drink.index].price;
				this.orderItems.productsOrdered.push(new ProductOrdered({
					id: uuidv4(),
					order: new Order({
						id: this.orderId,
						orderDate: new Date(),
						customer: this.customer,
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
					customer: this.customer,
					comment: this.comment,
					finalPrice: this.finalPrice
				}),
				product: this.drinkItems[drink.index],
				quantity: 1
			}));
		}
		this.updateOrder();
	}

	onTapService(service) {
		if (this.orderItems.productsOrdered) {
			let changed = false;
			const found = this.orderItems.productsOrdered.find(p => p.product.name === this.serviceItems[service.index].name);
			if (found) {
				found.quantity += 1;
				changed = true;
				this.finalPrice = this.finalPrice + this.serviceItems[service.index].price;
				this.orderItems.finalPrice = this.finalPrice;
			} else {
				this.finalPrice = this.finalPrice + this.serviceItems[service.index].price;
				this.orderItems.productsOrdered.push(new ProductOrdered({
					id: uuidv4(),
					order: new Order({
						id: this.orderId,
						orderDate: new Date(),
						customer: this.customer,
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
					customer: this.customer,
					comment: this.comment,
					finalPrice: this.finalPrice
				}),
				product: this.serviceItems[service.index],
				quantity: 1
			}));
		}
		this.updateOrder();
	}

	updateOrder() {
		this.orderItems.customer = this.customer;
		this.orderItems.id = this.orderId;
		this.orderItems.finalPrice = this.finalPrice;
		this.orderItems.comment = this.comment;
		this.orderItems.status = "pending";
	}

	onTapCartItem(cartItem) {

	}
}
