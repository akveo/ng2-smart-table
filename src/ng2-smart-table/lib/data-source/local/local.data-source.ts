import { LocalSorter } from './local.sorter';
import { LocalFilter } from './local.filter';
import { LocalPager } from './local.pager';
import { DataSource } from '../data-source';
import { deepExtend } from '../../helpers';

export class LocalDataSource extends DataSource {

  protected data: Array<any> = [];
  protected filteredAndSorted: Array<any> = [];
  protected sortConf: Array<any> = [];
  protected filterConf: any = {
    filters: [],
    andOperator: true,
  };
  protected pagingConf: any = {};

  constructor(data: Array<any> = []) {
    super();

    this.data = data;
  }

  load(data: Array<any>): Promise<any> {
    this.data = data;

    return super.load(data);
  }

  prepend(element: any): Promise<any> {
    this.reset(true);

    this.data.unshift(element);
    return super.prepend(element);
  }

  append(element: any): Promise<any> {
    this.reset(true);

    this.data.push(element);
    return super.append(element);
  }

  add(element: any): Promise<any> {
    this.data.push(element);

    return super.add(element);
  }

  remove(element: any): Promise<any> {
    this.data = this.data.filter(el => el !== element);

    return super.remove(element);
  }

  update(element: any, values: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.find(element).then((found) => {
        found = deepExtend(found, values);
        super.update(found, values).then(resolve).catch(reject);
      }).catch(reject);
    });
  }

  find(element: any): Promise<any> {
    const found = this.data.find(el => el === element);
    if (found) {
      return Promise.resolve(found);
    }

    return Promise.reject(new Error('Element was not found in the dataset'));
  }

  getElements(): Promise<any> {
    const data = this.data.slice(0);
    return Promise.resolve(this.prepareData(data));
  }

  getFilteredAndSorted(): Promise<any> {
    let data = this.data.slice(0);
    this.prepareData(data);
    return Promise.resolve(this.filteredAndSorted);
  }

  getAll(): Promise<any> {
    const data = this.data.slice(0);
    return Promise.resolve(data);
  }

  reset(silent = false) {
    if (silent) {
      this.filterConf = {
        filters: [],
        andOperator: true,
      };
      this.sortConf = [];
      this.pagingConf['page'] = 1;
    } else {
      this.setFilter([], true, false);
      this.setSort([], false);
      this.setPage(1);
    }
  }

  empty(): Promise<any> {
    this.data = [];

    return super.empty();
  }

  count(): number {
    return this.filteredAndSorted.length;
  }

  /**
   *
   * Array of conf objects
   * [
   *  {field: string, direction: asc|desc|null, compare: Function|null},
   * ]
   * @param conf
   * @param doEmit
   * @returns {LocalDataSource}
   */
  setSort(conf: Array<any>, doEmit = true): LocalDataSource {
    if (conf !== null) {

      conf.forEach((fieldConf) => {
        if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
          throw new Error('Sort configuration object is not valid');
        }
      });
      this.sortConf = conf;
    }

    super.setSort(conf, doEmit);
    return this;
  }

  /**
   *
   * Array of conf objects
   * [
   *  {field: string, search: string, filter: Function|null},
   * ]
   * @param conf
   * @param andOperator
   * @param doEmit
   * @returns {LocalDataSource}
   */
  setFilter(conf: Array<any>, andOperator = true, doEmit = true): LocalDataSource {
    if (conf && conf.length > 0) {
      conf.forEach((fieldConf) => {
        this.addFilter(fieldConf, andOperator, false);
      });
    } else {
      this.filterConf = {
        filters: [],
        andOperator: true,
      };
    }
    this.filterConf.andOperator = andOperator;
    this.pagingConf['page'] = 1;

    super.setFilter(conf, andOperator, doEmit);
    return this;
  }

  addFilter(fieldConf: any, andOperator = true, doEmit: boolean = true): LocalDataSource {
    if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
      throw new Error('Filter configuration object is not valid');
    }

    let found = false;
    this.filterConf.filters.forEach((currentFieldConf: any, index: any) => {
      if (currentFieldConf['field'] === fieldConf['field']) {
        this.filterConf.filters[index] = fieldConf;
        found = true;
      }
    });
    if (!found) {
      this.filterConf.filters.push(fieldConf);
    }
    this.filterConf.andOperator = andOperator;
    super.addFilter(fieldConf, andOperator, doEmit);
    return this;
  }

  setPaging(page: number, perPage: number, doEmit: boolean = true): LocalDataSource {
    this.pagingConf['page'] = page;
    this.pagingConf['perPage'] = perPage;

    super.setPaging(page, perPage, doEmit);
    return this;
  }

  setPage(page: number, doEmit: boolean = true): LocalDataSource {
    this.pagingConf['page'] = page;
    super.setPage(page, doEmit);
    return this;
  }

  getSort(): any {
    return this.sortConf;
  }

  getFilter(): any {
    return this.filterConf;
  }

  getPaging(): any {
    return this.pagingConf;
  }

  protected prepareData(data: Array<any>): Array<any> {
    data = this.filter(data);
    data = this.sort(data);
    this.filteredAndSorted = data.slice(0);

    return this.paginate(data);
  }

  protected sort(data: Array<any>): Array<any> {
    if (this.sortConf) {
      this.sortConf.forEach((fieldConf) => {
        data = LocalSorter
          .sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
      });
    }
    return data;
  }

  // TODO: refactor?
  protected filter(data: Array<any>): Array<any> {
    if (this.filterConf.filters) {
      if (this.filterConf.andOperator) {
        this.filterConf.filters.forEach((fieldConf: any) => {
          if (fieldConf['search'].length > 0) {
            data = LocalFilter
              .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
          }
        });
      } else {
        let mergedData: any = [];
        this.filterConf.filters.forEach((fieldConf: any) => {
          if (fieldConf['search'].length > 0) {
            mergedData = mergedData.concat(LocalFilter
              .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
          }
        });
        // remove non unique items
        data = mergedData.filter((elem: any, pos: any, arr: any) => {
          return arr.indexOf(elem) === pos;
        });
      }
    }
    return data;
  }

  protected paginate(data: Array<any>): Array<any> {
    if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
      data = LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
    }
    return data;
  }
}
