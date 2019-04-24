import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    const mutation = gql`
      mutation {
        login(email: "romeuhd@gmail.com", password: "test123") {
          token
          user {
            password
            name
            email
            id
          }
        }
      }
    `;

    this.apollo
      .mutate({
        mutation: mutation,
      })
      .subscribe((result) => {
        console.log(result);
      });
  }
}
