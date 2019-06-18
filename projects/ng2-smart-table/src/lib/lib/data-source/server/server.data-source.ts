import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LocalDataSource } from '../local/local.data-source';
import { ServerSourceConf } from './server-source.conf';
import { getDeepFromObject } from '../../helpers';

import { map } from 'rxjs/operators';

export class ServerDataSource extends LocalDataSource {

  protected conf: ServerSourceConf;

  protected lastRequestCount: number = 0;

  constructor(protected http: HttpClient, conf: ServerSourceConf | {} = {}) {
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
    return this.requestElements()
      .pipe(map(res => {
        this.lastRequestCount = this.extractTotalFromResponse(res);
        this.data = this.extractDataFromResponse(res);

        return this.data;
      })).toPromise();
  }

  /**
   * Extracts array of data from server response
   * @param res
   * @returns {any}
   */
  protected extractDataFromResponse(res: any): Array<any> {
    const rawData = res.body;
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
      const rawData = res.body;
      return getDeepFromObject(rawData, this.conf.totalKey, 0);
    }
  }

  protected requestElements(): Observable<any> {
    let httpParams = this.createRequesParams();
    return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
  }

  protected createRequesParams(): HttpParams {
    let httpParams = new HttpParams();

    httpParams = this.addSortRequestParams(httpParams);
    httpParams = this.addFilterRequestParams(httpParams);
    return this.addPagerRequestParams(httpParams);
  }

  protected addSortRequestParams(httpParams: HttpParams): HttpParams {
    if (this.sortConf) {
      this.sortConf.forEach((fieldConf) => {
        httpParams = httpParams.set(this.conf.sortFieldKey, fieldConf.field);
        httpParams = httpParams.set(this.conf.sortDirKey, fieldConf.direction.toUpperCase());
      });
    }

    return httpParams;
  }

  protected addFilterRequestParams(httpParams: HttpParams): HttpParams {

    if (this.filterConf.filters) {
      this.filterConf.filters.forEach((fieldConf: any) => {
        if (fieldConf['search']) {
          httpParams = httpParams.set(this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
        }
      });
    }

    return httpParams;
  }

  protected addPagerRequestParams(httpParams: HttpParams): HttpParams {

    if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
      httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
      httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
    }

    return httpParams;
  }
}
