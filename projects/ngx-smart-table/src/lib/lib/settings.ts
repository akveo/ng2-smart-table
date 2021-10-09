export interface Settings {
  columns?: Columns;
  resizable?: boolean;
  mode?: 'external' | 'inline';
  hideHeader?: boolean;
  hideSubHeader?: boolean;
  noDataMessage?: string;
  attr?: Attribute;
  actions?: Actions | false;
  edit?: EditAction;
  add?: AddAction;
  delete?: DeleteAction;
  filter?: Filter;
  expand?: Expand;
  pager?: Pager;
  rowClassFunction?: Function;
  selectMode?: 'single' | 'multi';
  selectedRowIndex?: number;
  switchPageToSelectedRowPage?: boolean;
}

export interface Filter {
  inputClass?: string;
}

export interface Expand {
  expandRowButtonContent?: string;
}

export interface Columns {
  [key: string]: Column;
}

export interface Column {
  title?: string;
  type?: 'text' | 'html' | 'custom';
  class?: string;
  width?: string;
  editable?: boolean;
  sort?: boolean;
  sortDirection?: 'asc' | 'desc';
  defaultSortDirection?: string;
  editor?: { type: string, config?: any, component?: any };
  filter?: { type: string, config?: any, component?: any } | boolean;
  renderComponent?: any;
  compareFunction?: Function;
  valuePrepareFunction?: Function;
  filterFunction?: Function;
  onComponentInitFunction?: Function;
}

export interface Attribute {
    id?: string;
    class?: string;
}

export interface Actions {
  columnTitle?: string;
  add?: boolean;
  edit?: boolean;
  delete?: boolean;
  position?: 'left' | 'right';
  custom?: CustomAction[];
}

export interface AddAction {
  inputClass?: string;
  addButtonContent?: string;
  createButtonContent?: string;
  cancelButtonContent?: string;
  confirmCreate?: boolean;
}

export interface EditAction {
  inputClass?: string;
  editButtonContent?: string;
  saveButtonContent?: string;
  cancelButtonContent?: string;
  confirmSave?: boolean;
}

export interface DeleteAction {
  deleteButtonContent?: string;
  confirmDelete?: boolean;
}

export interface Pager {
  page?: number;
  display?: boolean;
  perPage?: number;
}

export interface CustomAction {
  name: string;
  title: string;
}
