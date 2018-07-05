import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

export abstract class DataSource {

  protected onChangedSource = new Subject<any>();
  protected onAddedSource = new Subject<any>();
  protected onUpdatedSource = new Subject<any>();
  protected onRemovedSource = new Subject<any>();

  abstract getAll(): Promise<any>;
  abstract getElements(): Promise<any>;
  abstract getSort(): any;
  abstract getFilter(): any;
  abstract getPaging(): any;
  abstract count(): number;

  refresh() {
    this.emitOnChanged('refresh');
  }

  load(data: Array<any>): Promise<any> {
    this.emitOnChanged('load');
    return Promise.resolve();
  }

  onChanged(): Observable<any> {
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

  setSort(conf: Array<any>, doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged('sort');
    }
  }

  setFilter(conf: Array<any>, andOperator?: boolean, doEmit?: boolean) {
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
