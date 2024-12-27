import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {LocalDataSource} from '../local/local.data-source';
import {ServerSourceConf} from './server-source.conf';
import {getDeepFromObject} from '../../helpers';

import {map} from 'rxjs/operators';

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

  override count(): number {
    return this.lastRequestCount;
  }

  override getAll(): Promise<any> {
    return this.loadData(false, false, false);
  }

  override getElements(): Promise<any> {
    return this.loadData(true, true, true);
  }

  override getFilteredAndSorted(): Promise<any> {
    return this.loadData(true, true, false);
  }

  protected loadData(filtered: boolean, sorted: boolean, paginated: boolean): Promise<any> {
    return this.requestElements(filtered, sorted, paginated)
      .pipe(map(res => {
        this.lastRequestCount = this.extractTotalFromResponse(res);
        // TODO: the following two lines are obviously incorrect
        //       but whoever hacked this ServerDataSource into the project did not think about compatibility to the interface
        this.data = this.extractDataFromResponse(res);
        this.filteredAndSorted = this.data;
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

    throw new Error(`Data must be an array. Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
  }

  /**
   * Extracts total rows count from the server response
   * Looks for the count in the headers first, then in the response body
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

  protected requestElements(filtered: boolean, sorted: boolean, paginated: boolean): Observable<any> {
    let httpParams = new HttpParams();

    if (filtered) httpParams = this.addFilterRequestParams(httpParams);
    if (sorted) httpParams = this.addSortRequestParams(httpParams);
    if (paginated) httpParams = this.addPagerRequestParams(httpParams);

    return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
  }

  protected addSortRequestParams(httpParams: HttpParams): HttpParams {
    if (this.sortConf) {
      let fields: string[] = [];
      let directions: string[] = [];
      this.sortConf.forEach((fieldConf) => {
        if (fieldConf.direction !== null) {
          fields.push(fieldConf.field);
          directions.push(fieldConf.direction.toUpperCase());
        }
      });
      httpParams = httpParams.set(this.conf.sortFieldKey, fields.join(','));
      httpParams = httpParams.set(this.conf.sortDirKey, directions.join(','));
    }

    return httpParams;
  }

  protected addFilterRequestParams(httpParams: HttpParams): HttpParams {
    this.filterConf.forEach((fieldConf) => {
      if (fieldConf['search']) {
        httpParams = httpParams.set(this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
      }
    });

    return httpParams;
  }

  protected addPagerRequestParams(httpParams: HttpParams): HttpParams {
    httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf.page);
    httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf.perPage);
    return httpParams;
  }
}
