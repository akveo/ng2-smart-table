import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';

import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';

@Component({
  selector: 'ng2-smart-table',
  styleUrls: ['ng2-smart-table.scss'],
  templateUrl: 'ng2-smart-table.html'
})
export class Ng2SmartTableComponent implements OnChanges {

  @Input() source: any;
  @Input() settings: Object = {};

  @Output() public rowSelect: EventEmitter<any> = new EventEmitter<any>();
  @Output() public userRowSelect: EventEmitter<any> = new EventEmitter<any>();
  @Output() public delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() public edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() public create: EventEmitter<any> = new EventEmitter<any>();
  @Output() public deleteConfirm: EventEmitter<any> = new EventEmitter<any>();
  @Output() public editConfirm: EventEmitter<any> = new EventEmitter<any>();
  @Output() public createConfirm: EventEmitter<any> = new EventEmitter<any>();

  grid: Grid;
  defaultSettings: Object = {

    mode: 'inline', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    hideHeader: false,
    hideSubHeader: false,
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: true,
      position: 'left' // left|right
    },
    filter: {
      inputClass: '',
    },
    edit: {
      inputClass: '',
      editButtonContent: 'Edit',
      saveButtonContent: 'Update',
      cancelButtonContent: 'Cancel',
      confirmSave: false
    },
    add: {
      inputClass: '',
      addButtonContent: 'Add New',
      createButtonContent: 'Create',
      cancelButtonContent: 'Cancel',
      confirmCreate: false
    },
    delete: {
      deleteButtonContent: 'Delete',
      confirmDelete: false
    },
    attr: {
      id: '',
      class: '',
    },
    noDataMessage: 'No data found',
    columns: {},
    pager: {
      display: true,
      perPage: 10
    }
  };

  isAllSelected: boolean = false;

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (this.grid) {
      if (changes['settings']) {
        this.grid.setSettings(this.prepareSettings());
      }
      if (changes['source']) {
        this.grid.setSource(this.source);
      }
    } else {
      this.initGrid();
    }
  }

  editRowSelect(row: Row) {
    if (this.grid.getSetting('selectMode') === 'multi')
      this.onMultipleSelectRow(row);
    else
      this.onSelectRow(row);
  }

  onUserSelectRow(row: Row) {
    if (this.grid.getSetting('selectMode') !== 'multi') {
      this.grid.selectRow(row);
      this._onUserSelectRow(row.getData());
      this.onSelectRow(row);
    }
  }

  multipleSelectRow(row: Row) {
    this.grid.multipleSelectRow(row);
    this._onUserSelectRow(row.getData());
    this._onSelectRow(row.getData());
  }

  onSelectAllRows($event: any) {
    this.isAllSelected = !this.isAllSelected;
    this.grid.selectAllRows(this.isAllSelected);
    let selectedRows = this.grid.getSelectedRows();

    this._onUserSelectRow(selectedRows[0], selectedRows);
    this._onSelectRow(selectedRows[0]);
  }

  onSelectRow(row: Row) {
    this.grid.selectRow(row);
    this._onSelectRow(row.getData());
  }

  onMultipleSelectRow(row: Row) {
    this._onSelectRow(row.getData());
  }

  initGrid() {
    this.source = this.prepareSource();
    this.grid = new Grid(this.source, this.prepareSettings());
    this.grid.onSelectRow().subscribe((row) => this.onSelectRow(row));
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

  private _onSelectRow(data: any) {
    this.rowSelect.emit({
      data: data || null,
      source: this.source,
    });
  }

  private _onUserSelectRow(data: any, selected: Array<any> = []) {
    this.userRowSelect.emit({
      data: data || null,
      source: this.source,
      selected: selected.length ? selected : this.grid.getSelectedRows(),
    });
  }

  private resetAllSelector() {
    this.isAllSelected = false;
  }
}
