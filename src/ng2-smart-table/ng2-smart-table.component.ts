import {
  Component, Input, Output, SimpleChange, EventEmitter,
  OnChanges, OnInit
} from '@angular/core';

import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';

import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'ng2-smart-table',
  styleUrls: ['ng2-smart-table.scss'],
  templateUrl: 'ng2-smart-table.html',
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

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
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

  onAdd(event): boolean {
    event.stopPropagation();
    if (this.grid.getSetting('mode') === 'external' && typeof this.create !== 'undefined') {
      this.create.emit({
        source: this.source
      });
    } else {
      this.grid.createFormShown = true;
    }
    return false;
  }

  onUserSelectRow(row: Row): void {
    if (this.grid.getSetting('selectMode') !== 'multi') {
      this.grid.selectRow(row);
      this._onUserSelectRow(row.getData());
      this.onSelectRow(row);
    }
  }

  private _onUserSelectRow(data: any, selected: Array<any> = []) {
    this.userRowSelect.emit({
      data: data || null,
      source: this.source,
      selected: selected.length ? selected : this.grid.getSelectedRows(),
    });
  }

  multipleSelectRow(row) {
    this.grid.multipleSelectRow(row);
    this._onUserSelectRow(row.getData());
    this._onSelectRow(row.getData());
  }

  selectAllRows() {
    this.isAllSelected = !this.isAllSelected;
    this.grid.selectAllRows(this.isAllSelected);
    let selectedRows = this.grid.getSelectedRows();

    this._onUserSelectRow(selectedRows[0], selectedRows);
    this._onSelectRow(selectedRows[0]);
  }

  onSelectRow(row: Row): void {
    this.grid.selectRow(row);
    this._onSelectRow(row.getData());
  }

  onMultipleSelectRow(row: Row): void {
    this._onSelectRow(row.getData());
  }

  private _onSelectRow(data: any) {
    this.rowSelect.emit({
      data: data || null,
      source: this.source,
    });
  }

  onEdit(row: Row, event): boolean {
    event.stopPropagation();

    if (this.grid.getSetting('selectMode') === 'multi') {
      this.onMultipleSelectRow(row);
    } else {
      this.onSelectRow(row);
    }

    if (this.grid.getSetting('mode') === 'external' && typeof this.edit !== 'undefined') {
      this.edit.emit({
        data: row.getData(),
        source: this.source
      });
    } else {
      this.grid.edit(row);
    }
    return false;
  }

  onDelete(row: Row, event): boolean {
    event.stopPropagation();

    if (this.grid.getSetting('mode') === 'external' && typeof this.delete !== 'undefined') {
      this.delete.emit({
        data: row.getData(),
        source: this.source
      });
    } else {
      this.grid.delete(row, this.deleteConfirm);
    }
    return false;
  }

  onCreate(row: Row, event): boolean {
    event.stopPropagation();

    this.grid.create(row, this.createConfirm);
    return false;
  }

  onSave(row: Row, event): boolean {
    event.stopPropagation();

    this.grid.save(row, this.editConfirm);
    return false;
  }

  onCancelEdit(row, event): boolean {
    event.stopPropagation();

    row.isInEditing = false;
    return false;
  }

  initGrid(): void {
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

  changePage($event) {
    this.resetAllSelector();
  }

  sort($event) {
    this.resetAllSelector();
  }

  filter($event) {
    this.resetAllSelector();
  }

  private resetAllSelector() {
    this.isAllSelected = false;
  }
}
