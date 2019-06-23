import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { UserProfile } from '../Auth-services/User.Profile';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CommonService {
  private baseUrl = 'http://weatleywebapi.azurewebsites.net/api/';
  private localUrl = 'http://localhost:4466/';

  constructor(private authProfile: UserProfile) {}

  getBaseUrl(): string {
    return this.localUrl;
  }

  formatGraphQLError(error: string): string {
    return error.replace('GraphQL error:', '').trim();
  }

  handleFullError(error: HttpErrorResponse) {
    return observableThrowError(error);
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    const errorMessage = error;
    console.error(errorMessage);
    return observableThrowError(errorMessage.error || 'Server error');
  }

  checkAuth(): HttpHeaders {
    const profile = this.authProfile.getProfile();

    if (profile) {
      return new HttpHeaders({ Authorization: 'Bearer ' + profile.token });
    }
  }

  importQuery(query) {
    return import(`../queries/${query}`);
  }
}
