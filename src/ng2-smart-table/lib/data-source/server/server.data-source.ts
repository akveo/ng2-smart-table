import { Http } from '@angular/http';
import { LocalDataSource } from '../local/local.data-source';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { URLSearchParams } from '@angular/http/src/url_search_params';

export class ServerDataSource extends LocalDataSource {

  lastRequestCount: number = 0;

  constructor(protected http: Http, protected endPoint: string) {
    super();
  }

  count(): number {
    return this.lastRequestCount;
  }

  getElements(): Promise<any> {
    let requestOptions: RequestOptionsArgs = {};
    let searchParams: URLSearchParams = new URLSearchParams();
    
    if (this.sortConf) {
      this.sortConf.forEach((fieldConf) => {
        searchParams.set('_sort', fieldConf.field);
        searchParams.set('_order', fieldConf.direction.toUpperCase());
      });
    }

    if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
      searchParams.set('_page', this.pagingConf['page']);
      searchParams.set('_limit', this.pagingConf['perPage']);
    }

    if (this.filterConf.filters) {
      this.filterConf.filters.forEach((fieldConf) => {
        if (fieldConf['search']) {
          searchParams.set(fieldConf['field'] + '_like', fieldConf['search']);
        }
      });
    }
    requestOptions.search = searchParams;
    
    return this.http.get(this.endPoint, requestOptions).map(res => {
      this.lastRequestCount = +res.headers.get('x-total-count');
      return res.json();
    }).toPromise();
  }
}