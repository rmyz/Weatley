import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
	selector: "OrderNew",
	moduleId: module.id,
	templateUrl: "./order-new.component.html",
	styleUrls: ["./order-new.component.scss"]
})
export class OrderNewComponent implements OnInit {
	constructor(private routerExtensions: RouterExtensions) { }

	ngOnInit(): void {

	}

	goBack() {
		this.routerExtensions.back();
	}
}
