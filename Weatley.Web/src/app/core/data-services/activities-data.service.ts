import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';
import { Activity } from '../entities/activity';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ActivitiesDataService {
	constructor(private http: HttpClient,
		private commonService: CommonService) { }

		getActivity(): Observable<Array<Activity>> {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
						.get<Array<Activity>>(url + 'Activities', {headers: options});
		}

		getActivityById(id: string): Observable<Activity> {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
						.get<Activity>(url + 'Activities/' + id, {headers: options});
		}

		createActivity(activity: Activity) {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
				.post<Activity>(url + 'Activities/', activity, {headers: options});
		}

		updateActivity(activity: Activity): Observable<any> {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
				.put<Activity>(url + 'Activities/' + activity.id , activity, {headers: options});
		}

		deleteActivity(activityId: string): Observable<any> {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
				.delete<Activity>(url + 'Activities/' + activityId, {headers: options});
		}
}
