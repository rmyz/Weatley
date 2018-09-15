import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Report } from "../entities/report";
import { CommonService } from "../services/common.service";

@Injectable()
export class ReportsDataService {
	constructor(
		private http: HttpClient,
		private commonService: CommonService) { }

	getReports(): Observable<Array<Report>> {
		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http.get<Array<Report>>(url + "Reports", { headers: options });
	}

	getReportById(id: string): Observable<Report> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http.get<Report>(url + "Reports/" + id, { headers: options });
	}

	createReports(report: Report) {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.post<Report>(url + "Reports/", report, { headers: options });
	}

	updateReport(report: Report): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put<Report>(url + "Reports/" + report.id, Report, { headers: options });
	}

	deleteReport(reportId: string): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.delete<Report>(url + "Reports/" + reportId, { headers: options });
	}
}
