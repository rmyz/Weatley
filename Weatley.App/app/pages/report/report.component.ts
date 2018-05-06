import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { TNSFontIconService } from "nativescript-ngx-fonticon";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "report", loadChildren: "./report/report.module#ReportModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
	selector: "Report",
	moduleId: module.id,
	styleUrls: ["report.scss"],
	templateUrl: "./report.component.html"
})
export class ReportComponent implements OnInit {
	constructor(private tnsFontIconService: TNSFontIconService) {
		/* ***********************************************************
		* Use the constructor to inject app services that you need in this component.
		*************************************************************/
	}

	ngOnInit(): void {
		/* ***********************************************************
		* Use the "ngOnInit" handler to initialize data for this component.
		*************************************************************/
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
