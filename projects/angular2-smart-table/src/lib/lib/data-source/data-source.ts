import {Observable, Subject} from 'rxjs';
import {ColumnCompareFunction, ColumnFilterFunction, ISortDirection} from '../settings';

export interface ISortConfig {
  field: string,
  direction: ISortDirection,
  compare?: ColumnCompareFunction,
}

export interface IFilterConfig {
  field: string,
  search: string,
  filter?: ColumnFilterFunction,
}

export interface IPagingConfig {
  page: number;
  perPage: number;
}

export interface DataSourceChangeEvent {
  action: string,
  elements: any, // TODO: this should be Array<any> but getElements() returns Promise<any> for some reason....
  paging: IPagingConfig,
  filter: IFilterConfig[];
  sort: ISortConfig[];
}

export abstract class DataSource {

  protected onChangedSource = new Subject<DataSourceChangeEvent>();
  protected onAddedSource = new Subject<any>();
  protected onUpdatedSource = new Subject<any>();
  protected onRemovedSource = new Subject<any>();

  abstract getAll(): Promise<any>;
  abstract getElements(): Promise<any>;
  abstract getFilteredAndSorted(): Promise<any>;
  abstract getSort(): Array<ISortConfig>;
  abstract getFilter(): Array<IFilterConfig>;
  abstract getPaging(): IPagingConfig;

  /**
   * Returns the total number of elements with respect to the current filter.
   */
  abstract count(): number;
  abstract toggleItem(row: any, isSelected: boolean): void;

  /**
   * Sets the selection state of all (filtered) elements.
   * @param checked the new selection state
   * @param onlyFiltered only consider elements matching the current filter
   */
  abstract selectAllItems(checked: boolean, onlyFiltered: boolean): Promise<void>;
  abstract getSelectedItems(): Array<any>;

  /**
   * Indicates whether every (filtered) element is selected.
   *
   * @param onlyFiltered only consider elements matching the current filter
   * @param reportEmptyAsFalse by logic, in an empty set "all" elements are selected.
   * But if you want this to be reported as `false`, you can set this parameter to `true`.
   * @return true if all (filtered) elements are selected, false otherwise
   * @see selectAllItems
   */
  abstract isEveryElementSelected(onlyFiltered: boolean, reportEmptyAsFalse: boolean): boolean;

  refresh() {
    this.emitOnChanged('refresh');
  }

  load(data: Array<any>): Promise<any> {
    this.emitOnChanged('load');
    return Promise.resolve();
  }

  onChanged(): Observable<DataSourceChangeEvent> {
    return this.onChangedSource.asObservable();
  }

  onAdded(): Observable<any> {
    return this.onAddedSource.asObservable();
  }

  onUpdated(): Observable<any> {
    return this.onUpdatedSource.asObservable();
  }

  onRemoved(): Observable<any> {
    return this.onRemovedSource.asObservable();
  }

  prepend(element: any): Promise<any> {
    this.emitOnAdded(element);
    this.emitOnChanged('prepend');
    return Promise.resolve();
  }

  append(element: any): Promise<any> {
    this.emitOnAdded(element);
    this.emitOnChanged('append');
    return Promise.resolve();
  }

  add(element: any): Promise<any> {
    this.emitOnAdded(element);
    this.emitOnChanged('add');
    return Promise.resolve();
  }

  remove(element: any): Promise<any> {
    this.emitOnRemoved(element);
    this.emitOnChanged('remove');
    return Promise.resolve();
  }

  update(element: any, values: any): Promise<any> {
    this.emitOnUpdated(element);
    this.emitOnChanged('update');
    return Promise.resolve();
  }

  empty(): Promise<any> {
    this.emitOnChanged('empty');
    return Promise.resolve();
  }

  /**
   *
   * Array of conf objects
   * [
   *  {field: string, direction: asc|desc|null, compare?: ColumnCompareFunction|null},
   * ]
   * @param conf the configuration to add
   * @param doEmit indicates whether a sort event shall be emitted
   * @returns this data source
   */
  setSort(conf: Array<ISortConfig>, doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged('sort');
    }
  }

  /**
   *
   * Array of conf objects
   * [
   *  {field: string, direction: asc|desc|null, compare?: ColumnCompareFunction|null},
   * ]
   * @param conf the configuration to add
   * @param doEmit indicates whether a sort event shall be emitted
   * @returns this data source
   */
  updateSort(conf: Array<ISortConfig>, doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged('sort');
    }
  }

  setFilter(conf: Array<IFilterConfig>, doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged('filter');
    }
  }

  addFilter(fieldConf: IFilterConfig, doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged('filter');
    }
  }

  removeFilter(fieldName: string, doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged('filter');
    }
  }

  setPaging(page: number, perPage: number, doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged('paging');
    }
  }

  setPage(page: number, doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged('page');
    }
  }

  protected emitOnRemoved(element: any) {
    this.onRemovedSource.next(element);
  }

  protected emitOnUpdated(element: any) {
    this.onUpdatedSource.next(element);
  }

  protected emitOnAdded(element: any) {
    this.onAddedSource.next(element);
  }

  protected emitOnChanged(action: string) {
    this.getElements().then((elements) => this.onChangedSource.next({
      action: action,
      elements: elements,
      paging: this.getPaging(),
      filter: this.getFilter(),
      sort: this.getSort(),
    }));
  }
}
