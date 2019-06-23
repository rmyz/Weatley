import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';

@Injectable()
export class GraphQLDataService {
  constructor(private apollo: Apollo) {}

  private getRelation(obj) {
    return obj.customer
      ? { customer: { connect: { email: obj.customer.email } } }
      : { hotel: { connect: { email: obj.hotel.email } } };
  }

  private buildParams(params) {
    return { ...params, ...this.getRelation(params), id: undefined };
  }

  get(query): Observable<any> {
    return this.apollo.watchQuery({
      query,
      fetchPolicy: 'network-only',
    }).valueChanges;
  }

  getById(query, id): Observable<any> {
    return this.apollo.watchQuery({ query, variables: { id } }).valueChanges;
  }

  update(mutation, params): Observable<any> {
    return this.apollo
      .mutate({ mutation, variables: { id: params.id, data: this.buildParams(params) } })
      .pipe(map((res) => res));
  }

  create(mutation, params): Observable<any> {
    return this.apollo
      .mutate({ mutation, variables: { data: this.buildParams(params) } })
      .pipe(map((res) => res));
  }

  delete(mutation, id): Observable<any> {
    return this.apollo.mutate({ mutation, variables: { id } }).pipe(map((res) => res));
  }
}
