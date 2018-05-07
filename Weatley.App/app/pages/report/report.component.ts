import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { TNSFontIconService } from "nativescript-ngx-fonticon";
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { isAndroid } from "platform";
import { getString } from "tns-core-modules/application-settings/application-settings";
import { Page } from "ui/page";
import { TextView } from "ui/text-view";
import { CustomerDataService } from "~/core/data-services/customer-data.service";
import { ReportsDataService } from "~/core/data-services/reports-data.service";
import { Customer } from "~/core/entities/customer";
import { Report } from "~/core/entities/report";
import { RouterExtensions } from "nativescript-angular/router";

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

	customer: Customer;
	description = "";

	report: Report = {
		id: "",
		description: "",
		date: null,
		status: "",
		customer: null
	};

	private _SnackBar: SnackBar;

	constructor(
		private tnsFontIconService: TNSFontIconService,
		private reportsDataService: ReportsDataService,
		private routerExtensions: RouterExtensions,
		private customerDataService: CustomerDataService,
		private page: Page) {

			this._SnackBar = new SnackBar();
	}

	ngOnInit(): void {
		this.customerDataService.getCustomerById(getString("customer_id")).subscribe((customer) => {
			this.customer = customer;
		});
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}

	sendReport() {
		if (this.description) {
			this.report = {
				id: "e7ec8fe1-6240-47f7-a225-52e61dc437a8",
				description: this.description,
				date: new Date(),
				status: "pending",
				customer: this.customer
			};

			this.reportsDataService.createReports(this.report).subscribe((report) => {
				console.log(report);
				this.showSnackbar("Report Sent Succefull!");

				this.routerExtensions.navigate(["/home"], {
					transition: {
						name: "fade"
					},
					clearHistory: true
				});

			},
				(error) => {
					console.log(error);
					this.showSnackbar(error.error);
				});
		} else {
			this.showSnackbar("Please provide a report message");
		}

	}

	onTextChange(args) {
		const textview: TextView = <TextView>args.object;

		this.description = textview.text;
	}

	submit(args) {
		const textview: TextView = <TextView>args.object;
		if (isAndroid) {
			textview.android.clearFocus();
		}
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
}
