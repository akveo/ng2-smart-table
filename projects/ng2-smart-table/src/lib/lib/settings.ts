export interface Settings {
  columns?: Columns,
  mode?: 'external' | 'inline';
  hideHeader?: boolean;
  hideSubHeader?: boolean;
  noDataMessage?: string;
  attr?: Attribute;
  actions?: Actions | false;
  edit?: EditAction;
  add?: AddAction;
  delete?: DeleteAction;
  pager?: Pager;
  rowClassFunction?: Function;
  selectMode?: 'multi';
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
  editor?: { type: string, config?: any, component: any };
  filter?: { type: string, config?: any, component: any } | boolean;
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
  display?: string;
  perPage?: number;
}
