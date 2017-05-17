import { Http, Headers } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import { LocalDataSource } from '../local/local.data-source';
import { ServerSourceConf } from './server-source.conf';
import { getDeepFromObject } from '../../helpers';

import 'rxjs/add/operator/toPromise';

export class ServerDataSource extends LocalDataSource {

  protected conf: ServerSourceConf;

  protected lastRequestCount: number = 0;

  constructor(protected http: Http, conf: ServerSourceConf | {} = {}) {
    super();

    this.conf = new ServerSourceConf(conf);

    if (!this.conf.endPoint) {
      throw new Error('At least endPoint must be specified as a configuration of the server data source.');
    }
  }

  count(): number {
    return this.lastRequestCount;
  }

  getElements(): Promise<any> {
    return this.requestElements().map(res => {
      this.lastRequestCount = this.extractTotalFromResponse(res);
      this.data = this.extractDataFromResponse(res);

      return this.data;
    }).toPromise();
  }

  /**
   * Extracts array of data from server response
   * @param res
   * @returns {any}
   */
  protected extractDataFromResponse(res: any): Array<any> {
    const rawData = res.json();
    const data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;

    if (data instanceof Array) {
      return data;
    }

    throw new Error(`Data must be an array.
    Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
  }

  /**
   * Extracts total rows count from the server response
   * Looks for the count in the heders first, then in the response body
   * @param res
   * @returns {any}
   */
  protected extractTotalFromResponse(res: any): number {
    if (res.headers.has(this.conf.totalKey)) {
      return +res.headers.get(this.conf.totalKey);
    } else {
      const rawData = res.json();
      return getDeepFromObject(rawData, this.conf.totalKey, 0);
    }
  }

  protected requestElements(): Observable<any> {
      // standard mode, the HTTP request is handled internally
      return this.http.get(this.conf.endPoint, this.createRequestOptions());
  }

  protected createRequestOptions(): RequestOptionsArgs {
    let requestOptions: RequestOptionsArgs = {};
    requestOptions.search = new URLSearchParams();

    requestOptions = this.addHeadersRequestOptions(requestOptions);
    requestOptions = this.addSortRequestOptions(requestOptions);
    requestOptions = this.addFilterRequestOptions(requestOptions);

    return this.addPagerRequestOptions(requestOptions);
  }

  protected addHeadersRequestOptions(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    let confHeaders: any = this.conf.reqHeaders;
    let headers: Headers = new Headers();

    for (let header in confHeaders) {
      if (confHeaders.hasOwnProperty(header)) {
        headers.append(header, confHeaders[header]);
      }
    }

    requestOptions.headers = headers;
    return requestOptions;
  }

  protected addSortRequestOptions(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    let searchParams: URLSearchParams = <URLSearchParams> requestOptions.search;

    if (this.sortConf) {
      this.sortConf.forEach((fieldConf) => {
        if (this.conf.sortKey) {
          searchParams.set(this.conf.sortKey, `${fieldConf.field} ${fieldConf.direction.toUpperCase()}`);
        } else {
          searchParams.set(this.conf.sortFieldKey, fieldConf.field);
          searchParams.set(this.conf.sortDirKey, fieldConf.direction.toUpperCase());
        }
      });
    }

    return requestOptions;
  }

  protected addFilterRequestOptions(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    let searchParams: URLSearchParams = <URLSearchParams> requestOptions.search;

    if (this.filterConf.filters) {
      this.filterConf.filters.forEach((fieldConf) => {
        if (fieldConf['search']) {
          searchParams.set(this.conf.filterFieldKey
          .replace('#field#', fieldConf['field']), fieldConf['search']);
        }
      });
    }

    return requestOptions;
  }

  protected addPagerRequestOptions(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    let searchParams: URLSearchParams = <URLSearchParams> requestOptions.search;

    if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
      if (this.conf.pagerSkipKey) {
        searchParams.set(this.conf.pagerSkipKey, `${(this.pagingConf['page'] - 1) * this.pagingConf['perPage']}`);
      } else {
        searchParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
      }
      searchParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
    }

    return requestOptions;
  }
}
