import { Injectable } from '@angular/core';
import { IProfile } from '../models/user-model';

@Injectable()
export class UserProfile {
  userProfile: IProfile = {
    token: '',
    expiration: '',
    user: {
      id: '',
      userName: '',
      email: '',
      userType: '',
      name: '',
      surname: '',
      hotel: null,
    },
  };

  constructor() {}

  setProfile(profile: IProfile): void {
    const { id, email, name, surname, userType } = profile.user;

    sessionStorage.setItem('access_token', profile.token);
    sessionStorage.setItem('expires_in', profile.expiration);
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('surname', surname);
    sessionStorage.setItem('userType', userType);
  }

  getProfile(): IProfile {
    const accessToken = sessionStorage.getItem('access_token');

    if (accessToken) {
      this.userProfile.token = accessToken;
      this.userProfile.expiration = sessionStorage.getItem('expires_in');

      this.userProfile.user.id = sessionStorage.getItem('id');
      this.userProfile.user.userName = sessionStorage.getItem('username');
      this.userProfile.user.email = sessionStorage.getItem('email');
      this.userProfile.user.name = sessionStorage.getItem('name');
      this.userProfile.user.surname = sessionStorage.getItem('surname');
      this.userProfile.user.userType = sessionStorage.getItem('userType');
    }

    return this.userProfile;
  }

  resetProfile(): IProfile {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('expires_in');
    this.userProfile = {
      token: '',
      expiration: '',
      user: {
        id: '',
        userName: '',
        email: '',
        userType: '',
        name: '',
        surname: '',
        hotel: null,
      },
    };

    return this.userProfile;
  }
}
