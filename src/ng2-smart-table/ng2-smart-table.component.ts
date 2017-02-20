import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges, ViewEncapsulation, OnInit } from '@angular/core';


import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'ng2-smart-table',
  styleUrls: ['ng2-smart-table.scss'],
  templateUrl: 'ng2-smart-table.html'
})
export class Ng2SmartTableComponent implements OnChanges, OnInit {
  @Input() public dragulaRows: string;
  @Input() public dragulaRowsOptions: any;
  @Output() public dragulaRowDrop: EventEmitter<any> = new EventEmitter();

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
  private oldRowIndex: number | null = null;

  constructor(private dragulaService: DragulaService) {
  }

  ngOnInit(): void {
    if (this.dragulaRows) {
      this.dragulaService.drag.subscribe(args => this.onDragRow(args));
      this.dragulaService.dropModel.subscribe(args => this.onDropRow(args));
    }
    else {
      this.dragulaService = null;
    }
  }

  private onDragRow(args: any): void {
    const [bagName, el, source] = args;
    this.oldRowIndex = this.getDomIndexOf(el, source);
  }

  private onDropRow(args: any): void {
    const [bagName, el, target, source] = args;
    const newRowIndex = this.getDomIndexOf(el, target);
    const bag = this.dragulaService.find(bagName);
    const drake = bag.drake;
    const model = drake.models[0];

    this.dragulaRowDrop.emit({
      oldRowIndex: this.oldRowIndex,
      newRowIndex: newRowIndex,
      model: model
    });
  }

  private getDomIndexOf(child, parent) {
    return Array.prototype.indexOf.call(parent.children, child);
  }

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
