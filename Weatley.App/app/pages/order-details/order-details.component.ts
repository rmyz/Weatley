import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";

@Component({
	selector: "OrderDetails",
	moduleId: module.id,
	templateUrl: "./order-details.component.html"
})
export class OrderDetailsComponent implements OnInit {
	private id: string;
 constructor(private pageRoute: PageRoute,
	            private routerExtensions: RouterExtensions) {
		// use switchMap to get the latest activatedRoute instance
		this.pageRoute.activatedRoute.pipe(
			switchMap((activatedRoute) => activatedRoute.params)
		  ).forEach((params) => { this.id = params["id"]; });
		}

	ngOnInit(): void {
		/* ***********************************************************
		* Use the "ngOnInit" handler to initialize data for this component.
		*************************************************************/
	}

	goBack() {
		this.routerExtensions.back();
	}
}
