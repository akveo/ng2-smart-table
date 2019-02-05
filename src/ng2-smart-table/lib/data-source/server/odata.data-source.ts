import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LocalDataSource } from '../local/local.data-source';

import { map } from 'rxjs/operators';

export class ODataDataSource extends LocalDataSource {

  protected lastRequestCount: number = 0;

  constructor(protected http: HttpClient, protected endpoint: string) {
    super();
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
    return res.body.value;
  }

  /**
   * Extracts total rows count from the server response
   * Looks for the count in the heders first, then in the response body
   * @param res
   * @returns {any}
   */
  protected extractTotalFromResponse(res: any): number {
    return res.body['@odata.count'];
  }

  protected requestElements(): Observable<any> {
    let httpParams = this.createRequesParams();
    return this.http.get(this.endpoint, { params: httpParams, observe: 'response' });
  }

  protected createRequesParams(): HttpParams {
    let httpParams = new HttpParams().append('$count', 'true');
    httpParams = this.addSortRequestParams(httpParams);
    httpParams = this.addFilterRequestParams(httpParams);
    return this.addPagerRequestParams(httpParams);
  }

  protected addSortRequestParams(httpParams: HttpParams): HttpParams {
    if (this.sortConf) {
      this.sortConf.forEach((fieldConf) => {
        httpParams = httpParams.set('$orderby', fieldConf.field + ' ' + fieldConf.direction);
      });
    }

    return httpParams;
  }

  protected addFilterRequestParams(httpParams: HttpParams): HttpParams {

    if (this.filterConf.filters) {

      var filter = '';

      this.filterConf.filters.forEach((fieldConf: any) => {
        if (fieldConf['search']) {
          if (filter)
            filter += ' and ';
          filter += 'contains(' + fieldConf['field'] + ', \'' + fieldConf['search'] + '\')';
        }
      });

      httpParams = httpParams.set('$filter', filter);

    }

    return httpParams;
  }

  protected addPagerRequestParams(httpParams: HttpParams): HttpParams {

    if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
      httpParams = httpParams.set('$skip', String((this.pagingConf['page'] - 1) * this.pagingConf['perPage']));
      httpParams = httpParams.set('$top', this.pagingConf['perPage']);
    }

    return httpParams;
  }
}
