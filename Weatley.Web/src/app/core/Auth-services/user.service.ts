import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CommonService } from '../services/common.service';
import { contentHeaders } from '../common/headers';
import { UserProfile } from './User.Profile';
import { IProfile, IUser } from '../models/user-model';

@Injectable()
export class UserService {
  redirectUrl: string;
  errorMessage: string;

  constructor(
    private http: HttpClient,
    private authProfile: UserProfile,
    private commonService: CommonService,
    private apollo: Apollo,
  ) {}

  isAuthenticated() {
    const profile = this.authProfile.getProfile();
    const validToken = profile.token !== '' && profile.token !== null;
    const isTokenExpired = this.isTokenExpired(profile);
    return validToken && !isTokenExpired;
  }
  isAuthorized() {
    const profile = this.authProfile.getProfile();
    const validToken = profile.token !== '' && profile.token !== null;
    const isTokenExpired = this.isTokenExpired(profile);
    return validToken && !isTokenExpired;
  }
  isTokenExpired(profile: IProfile) {
    const expiration = new Date(profile.expiration);
    return expiration < new Date();
  }

  login(username: string, password: string) {
    if (!username || !password) {
      return;
    }

    const loginMutation = gql`
      mutation login($username: String!, $password: String!) {
        login(email: $username, password: $password) {
          token
          user {
            id
            name
            surname
            userType
            email
          }
        }
      }
    `;

    return this.apollo
      .mutate({
        mutation: loginMutation,
        variables: {
          username,
          password,
        },
      })
      .pipe(
        map((response) => {
          const userProfile: IProfile = response.data.login;
          this.authProfile.setProfile(userProfile);
          return response;
        }),
      );
  }

  register(user: IUser, password: string, confirmPassword: string) {
    if (!user.email || !password) {
      return;
    }

    const credentials = {
      userName: user.userName,
      name: user.name,
      surname: user.surname,
      userType: user.userType,
      email: user.email,
      password: password,
      confirmPassword: confirmPassword,
    };
    const url = this.commonService.getBaseUrl() + 'auth/register';
    return this.http.post<IProfile>(url, credentials, { headers: contentHeaders }).pipe(
      map((response) => {
        return response;
      }),
    );
  }

  logout() {
    this.authProfile.resetProfile();
  }
}
