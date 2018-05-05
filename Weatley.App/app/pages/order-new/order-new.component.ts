import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ProductDataService } from "~/core/data-services/product-data.service";
import { Product } from "~/core/entities/product";

@Component({
	selector: "OrderNew",
	moduleId: module.id,
	templateUrl: "./order-new.component.html",
	styleUrls: ["./order-new.component.scss"],
	providers: [ProductDataService]
})
export class OrderNewComponent implements OnInit {
	private foodItems: Array<Product> = [];
	private drinkItems: Array<Product> = [];
	private serviceItems: Array<Product> = [];

	constructor(private routerExtensions: RouterExtensions,
				private productDataService: ProductDataService) { }

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
	}

	goBack() {
		this.routerExtensions.back();
	}

	onTapFood(food) {
		console.log(food.index);
		console.log(this.foodItems[food.index]);
	}

	onTapDrink(drink) {
		console.log(drink.index);
		console.log(this.drinkItems[drink.index]);
	}

	onTapService(service) {
		console.log(service.index);
		console.log(this.serviceItems[service.index]);
	}
}
