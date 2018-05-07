import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { CustomerDataService } from "~/core/data-services/customer-data.service";
import { ReportsDataService } from "~/core/data-services/reports-data.service";
import { ReportRoutingModule } from "./report-routing.module";
import { ReportComponent } from "./report.component";

@NgModule({
	imports: [
		NativeScriptModule,
		ReportRoutingModule,
		TNSFontIconModule.forRoot({
			// tslint:disable-next-line:object-literal-key-quotes
			"mdi": "material-design-icons.css"
		})
	],
	declarations: [
		ReportComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	providers: [
		ReportsDataService,
		CustomerDataService
	]
})
export class ReportModule { }
