import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
import { IColumnSettings } from './lib/data-set/column';

export type ActionsColumnPosition = 'left' | 'right';

export interface ICustomAction {
  name: string;
  title: string;
}

export interface IActionsColumnSettings {
    columnTitle?: string;
    add?: boolean;
    edit?: boolean;
    delete?: boolean;
    custom?: ICustomAction[]; 
    position?: ActionsColumnPosition;
}

export interface IEditActionSettings {
    inputClass?: string;
    editButtonContent?: string;
    saveButtonContent?: string;
    cancelButtonContent?: string;
    confirmSave?: boolean;
}
export interface IAddActionSettings {
    inputClass?: string;
    addButtonContent?: string;
    createButtonContent?: string;
    cancelButtonContent?: string;
    confirmCreate?: boolean;
}
export interface IDeleteActionSettings {
    deleteButtonContent?: string;
    confirmDelete?: boolean;
}

export interface IPager {
    display?: boolean;
    perPage?: number;
    deleteButtonContent?: string;
}

export type TableMode = 'external' | 'inline';
export type SelectMode = 'single' | 'multi';

export interface IFilterSettings {
    inputClass?: string;
}

export interface ITableAttributes {
    id?: string;
    class?: string;
}

export type RowClassFunction = () => string;

export interface ITableSettings<T=object> {
    actions?: IActionsColumnSettings;
    columns?: {[key: string]: IColumnSettings<T>};
    selectMode?: SelectMode;
    sort?: boolean;
    mode?: TableMode;
    hideHeader?: boolean;
    hideSubHeader?: boolean;
    noDataMessage?: string;
    attr?: ITableAttributes;
    filter?: IFilterSettings;
    edit?: IEditActionSettings;
    add?: IAddActionSettings;
    delete?: IDeleteActionSettings;
    pager?: IPager;
    rowClassFunction?: RowClassFunction;
}

export interface IRowEvent<T> {
    data: T;
    source: DataSource;
}

export interface IRowSelectEvent<T> extends IRowEvent<T> {
  isSelected: boolean;
}

export interface IUserRowSelectEvent<T> extends IRowSelectEvent<T> {
  selected: T[];
}

export interface IRowMouseOverEvent<T> extends IRowSelectEvent<T> {

}
export interface ICreateEvent<T> {
    source: DataSource;
}

export interface ICreateConfirmEvent<T> {
    newData: T;
    source: DataSource;
    confirm: Promise<any>;
}

export interface IEditEvent<T> {
    data: T;
    source: DataSource;
}

export interface IEditConfirmEvent<T> {
    data: T;
    newData: T;
    source: DataSource;
    confirm: Promise<any>;
}

export interface IDeleteEvent<T> {
    data: T;
    source: DataSource;
}

export interface IDeleteConfirmEvent<T> {
    data: T;
    source: DataSource;
    confirm: Promise<any>;
}

export interface ICustomActionEvent<T> {
  action: string;
  data: T;
  source: Event;
}


@Component({
  selector: 'ng2-smart-table',
  styleUrls: ['./ng2-smart-table.component.scss'],
  templateUrl: './ng2-smart-table.component.html',
})
export class Ng2SmartTableComponent<T=object> implements OnChanges {

  @Input() source: any;
  @Input() settings: ITableSettings<T> = {};

  @Output() rowSelect = new EventEmitter<IRowSelectEvent<T>>();
  @Output() userRowSelect = new EventEmitter<IUserRowSelectEvent<T>>();
  @Output() delete = new EventEmitter<IDeleteEvent<T>>();
  @Output() edit = new EventEmitter<IEditEvent<T>>();
  @Output() create = new EventEmitter<ICreateEvent<T>>();
  @Output() custom = new EventEmitter<ICustomActionEvent<T>>();
  @Output() deleteConfirm = new EventEmitter<IDeleteConfirmEvent<T>>();
  @Output() editConfirm = new EventEmitter<IEditConfirmEvent<T>>();
  @Output() createConfirm = new EventEmitter<ICreateConfirmEvent<T>>();
  @Output() rowHover: EventEmitter<any> = new EventEmitter<IRowMouseOverEvent<T>>();

  tableClass: string;
  tableId: string;
  perPageSelect: any;
  isHideHeader: boolean;
  isHideSubHeader: boolean;
  isPagerDisplay: boolean;
  rowClassFunction: RowClassFunction;


  grid: Grid;
  defaultSettings: ITableSettings<T> = {
    mode: 'inline', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    hideHeader: false,
    hideSubHeader: false,
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: true,
      custom: [],
      position: 'left', // left|right
    },
    filter: {
      inputClass: '',
    },
    edit: {
      inputClass: '',
      editButtonContent: 'Edit',
      saveButtonContent: 'Update',
      cancelButtonContent: 'Cancel',
      confirmSave: false,
    },
    add: {
      inputClass: '',
      addButtonContent: 'Add New',
      createButtonContent: 'Create',
      cancelButtonContent: 'Cancel',
      confirmCreate: false,
    },
    delete: {
      deleteButtonContent: 'Delete',
      confirmDelete: false,
    },
    attr: {
      id: '',
      class: '',
    },
    noDataMessage: 'No data found',
    columns: {},
    pager: {
      display: true,
      perPage: 10,
    },
    rowClassFunction: () => '',
  };

  isAllSelected: boolean = false;

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (this.grid) {
      if (changes['settings']) {
        this.grid.setSettings(this.prepareSettings());
      }
      if (changes['source']) {
        this.source = this.prepareSource();
        this.grid.setSource(this.source);
      }
    } else {
      this.initGrid();
    }
    this.tableId = this.grid.getSetting('attr.id');
    this.tableClass = this.grid.getSetting('attr.class');
    this.isHideHeader = this.grid.getSetting('hideHeader');
    this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    this.isPagerDisplay = this.grid.getSetting('pager.display');
    this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
    this.rowClassFunction = this.grid.getSetting('rowClassFunction');
  }

  editRowSelect(row: Row) {
    if (this.grid.getSetting('selectMode') === 'multi') {
      this.onMultipleSelectRow(row);
    } else {
      this.onSelectRow(row);
    }
  }

  onUserSelectRow(row: Row) {
    if (this.grid.getSetting('selectMode') !== 'multi') {
      this.grid.selectRow(row);
      this.emitUserSelectRow(row);
      this.emitSelectRow(row);
    }
  }

  onRowHover(row: Row) {
    this.rowHover.emit(row);
  }

  multipleSelectRow(row: Row) {
    this.grid.multipleSelectRow(row);
    this.emitUserSelectRow(row);
    this.emitSelectRow(row);
  }

  onSelectAllRows($event: any) {
    this.isAllSelected = !this.isAllSelected;
    this.grid.selectAllRows(this.isAllSelected);

    this.emitUserSelectRow(null);
    this.emitSelectRow(null);
  }

  onSelectRow(row: Row) {
    this.grid.selectRow(row);
    this.emitSelectRow(row);
  }

  onMultipleSelectRow(row: Row) {
    this.emitSelectRow(row);
  }

  initGrid() {
    this.source = this.prepareSource();
    this.grid = new Grid(this.source, this.prepareSettings());
    this.grid.onSelectRow().subscribe((row) => this.emitSelectRow(row));
  }

  prepareSource(): DataSource {
    if (this.source instanceof DataSource) {
      return this.source;
    } else if (this.source instanceof Array) {
      return new LocalDataSource(this.source);
    }

    return new LocalDataSource();
  }

  prepareSettings(): Object {
    return deepExtend({}, this.defaultSettings, this.settings);
  }

  changePage($event: any) {
    this.resetAllSelector();
  }

  sort($event: any) {
    this.resetAllSelector();
  }

  filter($event: any) {
    this.resetAllSelector();
  }

  private resetAllSelector() {
    this.isAllSelected = false;
  }

  private emitUserSelectRow(row: Row) {
    const selectedRows = this.grid.getSelectedRows();

    this.userRowSelect.emit({
      data: row ? row.getData() : null,
      isSelected: row ? row.getIsSelected() : null,
      source: this.source,
      selected: selectedRows && selectedRows.length ? selectedRows.map((r: Row) => r.getData()) : [],
    });
  }

  private emitSelectRow(row: Row) {
    this.rowSelect.emit({
      data: row ? row.getData() : null,
      isSelected: row ? row.getIsSelected() : null,
      source: this.source,
    });
  }

}
