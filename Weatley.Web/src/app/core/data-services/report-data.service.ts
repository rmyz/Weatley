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
		private commonService: CommonService) {}

	getReports(): Observable<Report[]> {
		const url = 'http://localhost:5000/api/Reports';

		const options = this.commonService.checkAuth();
		return this.http.get(url, options)
			.map(res => res.json());
	}

	getReportById(id: string): Observable<Report> {
		const url = 'http://localhost:5000/api/Reports/' + id;

		const options = this.commonService.checkAuth();
		return this.http.get(url, options)
			.map(res => <Report>res.json());
	}

	createReports(report: Report) {
		const options = this.commonService.checkAuth();

		return this.http
			.post('http://localhost:5000/api/Reports/', report, options)
			.map((res: Response) => {
				return new Report(res.json());
			});
	}

	updateReport(report: Report): Observable<any> {
		const options = this.commonService.checkAuth();

		return this.http
			.put('http://localhost:5000/api/Reports/' + report.id , report, options)
			.map((res: Response) => {
				return new Report(res.json());
		});
	}

	deleteReport(reportId: string): Observable<any> {
		const options = this.commonService.checkAuth();

		return this.http
			.delete('http://localhost:5000/api/Reports/' + reportId, options)
			.map((res: Response) => {
				return res.json();
		});
	}
}
