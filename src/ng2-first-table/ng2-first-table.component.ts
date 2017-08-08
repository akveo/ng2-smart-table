import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';

@Component({
  selector: 'ng2-first-table',
  styleUrls: ['./ng2-first-table.component.scss'],
  templateUrl: './ng2-first-table.component.html',
})
export class Ng2FirstTableComponent implements OnChanges {

  @Input() source: any;
  @Input() settings: Object = {};

  @Output() rowSelect = new EventEmitter<any>();
  @Output() userRowSelect = new EventEmitter<any>();
  // 自定义单元行 双击事件
  @Output() dbSelect = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() create = new EventEmitter<any>();
  @Output() custom = new EventEmitter<any>();
  @Output() deleteConfirm = new EventEmitter<any>();
  @Output() editConfirm = new EventEmitter<any>();
  @Output() createConfirm = new EventEmitter<any>();
  @Output() rowHover: EventEmitter<any> = new EventEmitter<any>();

  tableClass: string;
  tableId: string;
  isHideHeader: boolean;
  isHideSubHeader: boolean;
  isPagerDisplay: boolean;
  rowClassFunction: Function;
  // 自定义隔行换色
  rowBgc: object;

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
      custom: [],
      position: 'left', // left|right
    },
    filter: {
      inputClass: '',
    },
    edit: {
      inputClass: '',
      editButtonContent: '编辑',
      saveButtonContent: '确定',
      cancelButtonContent: '取消',
      confirmSave: false,
    },
    add: {
      inputClass: '',
      addButtonContent: '新增',
      createButtonContent: '确定',
      cancelButtonContent: '取消',
      confirmCreate: false,
    },
    delete: {
      deleteButtonContent: '删除',
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
    rowClassFunction: () => "",

    // 自定义隔行换色
    rowBgc: {
      isShow: false,
      oddBgc: 'red',
      evenBgc: 'blue'
    },

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
    this.rowClassFunction = this.grid.getSetting('rowClassFunction');
    // 自定义隔行换色
    this.rowBgc = this.grid.getSetting('rowBgc');
  }

  editRowSelect(row: Row) {
    if (this.grid.getSetting('selectMode') === 'multi') {
      this.onMultipleSelectRow(row);
    } else {
      this.onSelectRow(row);
    }
  }


  onUserSelectRow(row: Row) {
    if (this.grid.getSetting('selectMode') === 'single') {
      this.grid.selectRow(row);
      this.emitUserSelectRow(row);
      this.emitSelectRow(row);
    }
  }
  // 自定义单元行 双击事件
  ondblclick(row: Row) {
    if (this.grid.getSetting('selectMode') === 'dblclick') {
      this.grid.selectRow(row);
      this.emitDblSelectRow(row);
    }
  }

  multipleSelectRow(row: Row) {
    this.grid.multipleSelectRow(row);
    this.emitUserSelectRow(row);
    this.emitSelectRow(row);
    this.emitDblSelectRow(row);
  }

  onSelectAllRows($event: any) {
    this.isAllSelected = !this.isAllSelected;
    this.grid.selectAllRows(this.isAllSelected);
    this.emitUserSelectRow(null);
    this.emitSelectRow(null);
    this.emitDblSelectRow(null);
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

  private emitDblSelectRow(row: Row) {
    this.dbSelect.emit({
      data: row ? row.getData() : null,
      isSelected: row ? row.getIsSelected() : null,
      source: this.source,
    })
  }
}
