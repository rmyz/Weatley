import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { CommonService } from '../services/common.service';
import { UserProfile } from '../Auth-services/User.Profile';
import { Activity } from '../entities/activity';

@Injectable()
export class ActivitiesDataService {
	constructor(private http: Http,
		private authProfile: UserProfile,
		private commonService: CommonService) { }

		getActivity(): Observable<Activity[]> {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
						.get(url + 'Activities', options)
						.map((res: Response) => res.json());
		}

		getActivityById(id: string): Observable<Activity> {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
						.get(url + 'Activities/' + id, options)
						.map((res: Response) => res.json());
		}

		createActivity(activity: Activity) {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
				.post(url + 'Activities/', activity, options)
				.map((res: Response) => {
					return new Activity(res.json());
				});
		}

		updateActivity(activity: Activity): Observable<any> {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
				.put(url + 'Activities/' + activity.id , activity, options)
				.map((res: Response) => {
					return new Activity(res.json());
			});
		}

		deleteActivity(activityId: string): Observable<any> {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
				.delete(url + 'Activities/' + activityId, options)
				.map((res: Response) => {
					return res.json();
				});
		}
}
