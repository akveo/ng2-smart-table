import { LocalDataSource } from '../../../../../../src/ng2-smart-table/lib';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomServerDataSource extends LocalDataSource {

  lastRequestCount: number = 0;

  constructor(protected http: Http) {
    super();
  }

  count(): number {
    return this.lastRequestCount;
  }

  getElements(): Promise<any> {
    let url = 'https://jsonplaceholder.typicode.com/photos?';

    if (this.sortConf) {
      this.sortConf.forEach((fieldConf) => {
        url += `_sort=${fieldConf.field}&_order=${fieldConf.direction.toUpperCase()}&`;
      });
    }

    if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
      url += `_page=${this.pagingConf['page']}&_limit=${this.pagingConf['perPage']}&`;
    }

    if (this.filterConf.filters) {
      this.filterConf.filters.forEach((fieldConf) => {
        if (fieldConf['search']) {
          url += `${fieldConf['field']}_like=${fieldConf['search']}&`;
        }
      });
    }

    return this.http.get(url).map(res => {
      this.lastRequestCount = +res.headers.get('x-total-count');
      return res.json();
    }).toPromise();
  }
}