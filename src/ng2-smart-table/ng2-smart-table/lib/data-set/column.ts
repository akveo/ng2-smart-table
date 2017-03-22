import { DataSet } from './data-set';

export class Column {

  public title: string = '';
  public type: string = '';
  public class: string = '';
  public isSortable: boolean = false;
  public isEditable: boolean = true;
  public isFilterable: boolean = false;
  public sortDirection: string = '';
  public defaultSortDirection: string = '';
  public editor: { type: string, config: any, component: any } = { type: '', config: {}, component: null };
  public filter: { type: string, config: any } = { type: '', config: {} };
  public renderComponent: any = null;
  compareFunction: Function;
  valuePrepareFunction: Function;
  filterFunction: Function;

  constructor(public id: string, protected settings: any, protected dataSet: DataSet) {
    this.process();
  }

  public getCompareFunction(): Function {
    return this.compareFunction;
  }

  public getValuePrepareFunction(): Function {
    return this.valuePrepareFunction;
  }

  public getFilterFunction(): Function {
    return this.filterFunction;
  }

  public getConfig(): any {
    return this.editor.config;
  }

  getFilterType(): any {
    return this.filter && this.filter.type;
  }

  getFilterConfig(): any {
    return this.filter && this.filter.config;
  }

  protected process(): void {
    this.title = this.settings['title'];
    this.class = this.settings['class'];
    this.type = this.prepareType();
    this.editor = this.settings['editor'];
    this.filter = this.settings['filter'];
    this.renderComponent = this.settings['renderComponent'];

    this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
    this.defaultSortDirection = ['asc', 'desc'].indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
    this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
    this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
    this.sortDirection = this.prepareSortDirection();

    this.compareFunction = this.settings['compareFunction'];
    this.valuePrepareFunction = this.settings['valuePrepareFunction'];
    this.filterFunction = this.settings['filterFunction'];
  }

  prepareType(): string {
    return this.settings['type'] || this.determineType();
  }

  prepareSortDirection(): string {
    return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
  }

  determineType(): string {
    // TODO: determine type by data
    return 'text';
  }
}
