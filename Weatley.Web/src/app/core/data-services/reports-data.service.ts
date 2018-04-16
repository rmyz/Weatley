import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserProfile } from '../Auth-services/User.Profile';
import { CommonService } from '../services/common.service';
import { Report } from '../entities/report';


@Injectable()
export class ReportDataService {
	constructor(private http: Http,
		private authProfile: UserProfile,
		private commonService: CommonService) { }

	getReports(): Observable<Report[]> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http.get(url + 'Reports', options)
			.map(res => res.json());
	}

	getReportById(id: string): Observable<Report> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http.get(url + 'Reports/' + id, options)
			.map(res => <Report>res.json());
	}

	createReports(report: Report) {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.post(url + 'Reports/', report, options)
			.map((res: Response) => {
				return new Report(res.json());
			});
	}

	updateReport(report: Report): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put(url + 'Reports/' + report.id, report, options)
			.map((res: Response) => {
				return new Report(res.json());
			});
	}

	deleteReport(reportId: string): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.delete(url + 'Reports/' + reportId, options)
			.map((res: Response) => {
				return res.json();
			});
	}
}