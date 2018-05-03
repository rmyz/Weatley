import { AfterViewInit, Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
	selector: "Home",
	moduleId: module.id,
	templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, AfterViewInit {

	constructor() {  }

	ngOnInit(): void {  }

	ngAfterViewInit(): void {
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
