import {defaultComparator} from './local.sorter';
import {LocalPager} from './local.pager';
import {DataSource, IFilterConfig, IPagingConfig, ISortConfig} from '../data-source';
import {deepExtend} from '../../helpers';
import {ColumnCompareFunction, ColumnFilterFunction} from "../../settings";

export class LocalDataSource extends DataSource {

  protected data: Array<any> = [];
  protected filteredAndSorted: Array<any> = [];
  protected sortConf: Array<ISortConfig> = [];
  protected filterConf: Array<IFilterConfig> = [];
  protected pagingConf: IPagingConfig = {page: 1, perPage: 10};

  private selectedItems: Array<any> = [];
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
    this.prepareData(data); // this would return only the current page, but it sets filteredAndSorted array
    return Promise.resolve(this.filteredAndSorted);
  }

  getAll(): Promise<any> {
    const data = this.data.slice(0);
    return Promise.resolve(data);
  }

  reset(silent = false) {
    this.setFilter([], false);
    this.setSort([], false);
    this.setPage(1, !silent);
  }

  empty(): Promise<any> {
    this.data = [];

    return super.empty();
  }

  count(): number {
    return this.filteredAndSorted.length;
  }

  toggleItem(row: any, isSelected: boolean): void {
    if (isSelected) this.selectedItems.push(row);
    else this.selectedItems = this.selectedItems.filter((i) => i !== row);
  }

  // TODO: actually there is no need that this is an async function, but changing the signature would be a breaking change
  async selectAllItems(checked: boolean, onlyFiltered: boolean = false): Promise<void> {
    if (checked) {
      const itemsToSelect = onlyFiltered ? this.filteredAndSorted : this.data;
      this.selectedItems = itemsToSelect.slice(0);
    } else this.selectedItems = [];
  }

  isEveryElementSelected(onlyFiltered: boolean = false, reportEmptyAsFalse: boolean = false): boolean {
    const itemsToCheck = onlyFiltered ? this.filteredAndSorted : this.data;
    if (itemsToCheck.length === 0) {
      return !reportEmptyAsFalse;
    }
    if (onlyFiltered) {
      // TODO: this is an ugly and costly O(n²) check, but currently we have no other choice....
      if (itemsToCheck.length !== this.selectedItems.length) return false;
      for (const item of itemsToCheck) {
        if (this.selectedItems.indexOf(itemsToCheck) < 0) return false;
      }
      return true;
    } else {
      return itemsToCheck.length === this.selectedItems.length;
    }
  }

  getSelectedItems(): Array<any> {
    return this.selectedItems;
  }

  setSort(conf: Array<ISortConfig>, doEmit = true): void {
    this.sortConf = conf;
    super.setSort(conf, doEmit);
  }

  updateSort(conf: Array<ISortConfig>, doEmit = true): void {
    if (conf !== null) {
      conf.forEach((fieldConf) => {
        const found = this.sortConf.findIndex(c => c.field === fieldConf.field);
        if (found >= 0) {
          if (fieldConf.compare === undefined) {
            // keep the previously configured compare function
            fieldConf.compare = this.sortConf[found].compare;
          }
          this.sortConf.splice(found, 1);
        }
        // push the updated config to the front of the array (highest sort priority)
        this.sortConf = [fieldConf, ...this.sortConf];
      });
    }
    super.setSort(conf, doEmit);
  }

  /**
   *
   * Replaces all filters with the given array of filters.
   * [
   *  {field: string, search: string, filter: ColumnCompareFunction|null},
   * ]
   *
   * @param conf the array of filters
   * @param doEmit true if an event shall be emitted that triggers a table refresh
   */
  setFilter(conf: Array<IFilterConfig>, doEmit = true): void {
    this.filterConf = conf;
    super.setFilter(conf, doEmit);
  }

  /**
   *
   * Adds a filter to this data source.
   *
   * {field: string, search: string, filter: ColumnFilterFunction|null},
   *
   * @param fieldConf the filter config
   * @param doEmit true if an event shall be emitted that triggers a table refresh
   */
  addFilter(fieldConf: IFilterConfig, doEmit: boolean = true): void {
    let found = false;
    this.filterConf.forEach((currentFieldConf: IFilterConfig, index: number) => {
      if (currentFieldConf.field === fieldConf.field) {
        this.filterConf[index] = fieldConf;
        found = true;
      }
    });
    if (!found) {
      this.filterConf.push(fieldConf);
    }
    super.addFilter(fieldConf, doEmit);
  }

  removeFilter(fieldName: string, doEmit: boolean = true): void {
    this.filterConf = this.filterConf.filter(c => c.field !== fieldName);
    super.removeFilter(fieldName, doEmit);
  }

  setPaging(page: number, perPage: number, doEmit: boolean = true): void {
    this.pagingConf.page = page;
    this.pagingConf.perPage = perPage;

    super.setPaging(page, perPage, doEmit);
  }

  setPage(page: number, doEmit: boolean = true): void {
    this.pagingConf.page = page;
    super.setPage(page, doEmit);
  }

  getSort(): Array<ISortConfig> {
    return this.sortConf;
  }

  getFilter(): Array<IFilterConfig> {
    return this.filterConf;
  }

  getPaging(): IPagingConfig {
    return this.pagingConf;
  }

  protected prepareData(data: Array<any>): Array<any> {
    data = this.filter(data);
    data = this.sort(data);
    this.filteredAndSorted = data.slice(0);

    return this.paginate(data);
  }

  protected sort(data: Array<any>): Array<any> {
    // only use the part of the config where sorting is enabled
    const sortConfig = this.sortConf.filter(c => c.direction !== null);

    return data.sort((a, b) => {
      for (const sc of sortConfig) {
        const dir: number = (sc.direction === 'asc') ? 1 : -1;
        const compare: ColumnCompareFunction = sc.compare ? sc.compare : defaultComparator;
        let parts = sc.field.split(".");
        let propA = a;
        for (let i = 0; i < parts.length && typeof propA !== 'undefined'; i++) {
          propA = propA[parts[i]];
        }
        let propB = b;
        for (let i = 0; i < parts.length && typeof propB !== 'undefined'; i++) {
          propB = propB[parts[i]];
        }
        const result = compare.call(null, dir, propA, propB);
        if (result !== 0) return result;
      }
      return 0;
    });
  }

  protected filter(data: Array<any>): Array<any> {
    if (this.filterConf) {
      for (const filterConf of this.filterConf) {
        const filter: ColumnFilterFunction = filterConf.filter ?? ((v, s) => (v?.toString()??'').toLowerCase().includes(s.toLowerCase()));
        data = data.filter((el) => {
          let parts = filterConf.field.split(".");
          let prop = el;
          for (let i = 0; i < parts.length && typeof prop !== 'undefined'; i++) {
            prop = prop[parts[i]];
          }
          return filter.call(null, prop, filterConf.search);
        });
      }
    }
    return data;
  }

  protected paginate(data: Array<any>): Array<any> {
    return LocalPager.paginate(data, this.pagingConf.page, this.pagingConf.perPage);
  }
}
