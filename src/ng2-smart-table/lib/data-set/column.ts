import { DataSet } from './data-set';

export type ColumnEditorType = 'text' | 'textarea' | 'completer' | 'list' | 'checkbox';

export interface ICheckboxColumnConfig {
    true?: string;
    false?: string;
}
export interface IListColumnConfig {
    list?: {value: string; title: string;}[];
}
export interface ICompleterSettings {
    data?: any[];
    searchFields?: string;
    titleField?: string;
    descriptionField?: string;
}
export interface ICompleterColumnConfig {
    completer?: ICompleterSettings;
}

export interface ICheckboxFilterConfig extends ICheckboxColumnConfig {
    resetText?: string;
}
export interface IListFilterConfig extends IListColumnConfig {
    resetText?: string;
}
export interface ICompleterFilterConfig extends ICompleterColumnConfig {
    resetText?: string;
}
export type ColumnConfig = ICheckboxColumnConfig | IListColumnConfig | ICompleterColumnConfig;
export type FilterConfig = ICheckboxFilterConfig | IListFilterConfig | ICompleterFilterConfig;
export interface IFilter {
    type?: ColumnEditorType;
    config?: FilterConfig;
}
export type SortDirection = 'asc' | 'desc';
export interface IColumnEditor {
    type?: ColumnEditorType;
    config?: ColumnConfig;
    component?: any;
}

export type ColumnType = 'text' | 'html' | 'custom';
export type CompareFunction = (value1: any, value2: any) => number;
export type FilterFunction = (value: any) => boolean;
export type ValuePrepareFunction = (cell: any, row: any) => string;
export type ComponentInitFunction<T = object> = (value: any, rowData: T) => object;
export interface IColumnSettings<T=object> {
    title?: string;
    class?: string;
    width?: string;
    filter?: IFilter;
    addable?: boolean;
    editable?: boolean;
    editor?: IColumnEditor;
    type?: ColumnType;
    renderComponent?: any; // Component;
    onComponentInitFunction?: ComponentInitFunction<T>;
    valuePrepareFunction?: ValuePrepareFunction;
    sort?: boolean;
    sortDirection?: SortDirection;
    compareFunction?: CompareFunction;
    filterFunction?: FilterFunction;
}

export class Column<T = object> {

  title: string = '';
  type: string = '';
  class: string = '';
  width: string = '';
  isSortable: boolean = false;
  isEditable: boolean = true;
  isAddable: boolean = true;
  isFilterable: boolean = false;
  sortDirection: string = '';
  defaultSortDirection: string = '';
  editor: IColumnEditor = { type: null, config: {}, component: null };
  filter: IFilter = { type: null, config: {} };
  renderComponent: any = null;
  compareFunction: CompareFunction;
  valuePrepareFunction: ValuePrepareFunction;
  filterFunction: FilterFunction;
  onComponentInitFunction: ComponentInitFunction<T>;

  constructor(public id: string, protected settings: IColumnSettings<T>, protected dataSet: DataSet) {
    this.process();
  }

  getOnComponentInitFunction(): ComponentInitFunction<T> {
    return this.onComponentInitFunction;
  }

  getCompareFunction(): CompareFunction {
    return this.compareFunction;
  }

  getValuePrepareFunction(): ValuePrepareFunction {
    return this.valuePrepareFunction;
  }

  getFilterFunction(): FilterFunction {
    return this.filterFunction;
  }

  getConfig(): any {
    return this.editor && this.editor.config;
  }

  getFilterType(): any {
    return this.filter && this.filter.type;
  }

  getFilterConfig(): any {
    return this.filter && this.filter.config;
  }

  protected process() {
    this.title = this.settings.title;
    this.class = this.settings.class;
    this.width = this.settings.width;;
    this.type = this.prepareType();
    this.editor = this.settings.editor;
    this.filter = this.settings.filter;
    this.renderComponent = this.settings['renderComponent'];

    this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
    this.defaultSortDirection = ['asc', 'desc'].indexOf(this.settings.sortDirection) !== -1
        ? this.settings.sortDirection
        : '';
    this.isSortable = typeof this.settings.sort === 'undefined' ? true : !!this.settings.sort;
    this.isEditable = typeof this.settings.editable === 'undefined' ? true : !!this.settings.editable;
    this.isAddable=typeof this.settings.addable === 'undefined' ? true : !!this.settings.addable;
    this.sortDirection = this.prepareSortDirection();

    this.compareFunction = this.settings.compareFunction;
    this.valuePrepareFunction = this.settings.valuePrepareFunction;
    this.filterFunction = this.settings.filterFunction;
    this.onComponentInitFunction = this.settings.onComponentInitFunction;
  }

  prepareType(): string {
    return this.settings.type || this.determineType();
  }

  prepareSortDirection(): string {
    return this.settings.sort ? 'desc' : 'asc';
  }

  determineType(): string {
    // TODO: determine type by data
    return 'text';
  }
}
