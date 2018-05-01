import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { OrdersDataService } from "~/core/data-services/orders-data.service";
import { Order } from "~/core/entities/order";

@Component({
	selector: "OrderDetails",
	moduleId: module.id,
	templateUrl: "./order-details.component.html",
	providers: [OrdersDataService],
	styleUrls: ["./order-details.component.scss"]
})
export class OrderDetailsComponent implements OnInit {
	private id: string;
	private order: Order;
	constructor(private pageRoute: PageRoute,
				private routerExtensions: RouterExtensions,
				private orderDataService: OrdersDataService) {}

	ngOnInit(): void {
		this.pageRoute.activatedRoute.pipe(
			switchMap((activatedRoute) => activatedRoute.params)
		).forEach((params) => {
			this.id = params["id"];
			this.orderDataService.getOrderById(this.id).subscribe((order) => {
				this.order = order;
			});
		});

	}

	goBack() {
		this.routerExtensions.back();
	}
}
