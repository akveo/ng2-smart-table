import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { ICustomAction } from '../../ng2-smart-table.component';

export interface IChangedSourceEvent<T> {
  action: string;
  elements: T[];
  paging: any;
  filter: any;
  sort: any;
}  
export abstract class DataSource<T = object> {

  protected onChangedSource = new Subject<IChangedSourceEvent<T>>();
  protected onAddedSource = new Subject<T>();
  protected onUpdatedSource = new Subject<T>();
  protected onRemovedSource = new Subject<T>();

  abstract getAll(): Promise<T[]>;
  abstract getElements(): Promise<T[]>;
  abstract getSort(): any;
  abstract getFilter(): any;
  abstract getPaging(): any;
  abstract count(): number;

  refresh() {
    this.emitOnChanged('refresh');
  }

  load(data: T[]): Promise<void> {
    this.emitOnChanged('load');
    return Promise.resolve();
  }

  onChanged(): Observable<IChangedSourceEvent<T>> {
    return this.onChangedSource.asObservable();
  }

  onAdded(): Observable<T> {
    return this.onAddedSource.asObservable();
  }

  onUpdated(): Observable<T> {
    return this.onUpdatedSource.asObservable();
  }

  onRemoved(): Observable<T> {
    return this.onRemovedSource.asObservable();
  }

  prepend(element: T): Promise<void> {
    this.emitOnAdded(element);
    this.emitOnChanged('prepend');
    return Promise.resolve();
  }

  append(element: T): Promise<void> {
    this.emitOnAdded(element);
    this.emitOnChanged('append');
    return Promise.resolve();
  }

  add(element: T): Promise<void> {
    this.emitOnAdded(element);
    this.emitOnChanged('add');
    return Promise.resolve();
  }

  remove(element: T): Promise<void> {
    this.emitOnRemoved(element);
    this.emitOnChanged('remove');
    return Promise.resolve();
  }

  update(element: any, values: any): Promise<void> {
    this.emitOnUpdated(element);
    this.emitOnChanged('update');
    return Promise.resolve();
  }

  empty(): Promise<void> {
    this.emitOnChanged('empty');
    return Promise.resolve();
  }

  setSort(conf: any[], doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged('sort');
    }
  }

  setFilter(conf: any[], andOperator?: boolean, doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged('filter');
    }
  }

  addFilter(fieldConf: {}, andOperator?: boolean, doEmit?: boolean) {
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

  protected emitOnRemoved(element: T) {
    this.onRemovedSource.next(element);
  }

  protected emitOnUpdated(element: T) {
    this.onUpdatedSource.next(element);
  }

  protected emitOnAdded(element: T) {
    this.onAddedSource.next(element);
  }

  protected emitOnChanged(action: string) {
    this.getElements().then((elements) => this.onChangedSource.next({
      action,
      elements,
      paging: this.getPaging(),
      filter: this.getFilter(),
      sort: this.getSort(),
    }));
  }
}
