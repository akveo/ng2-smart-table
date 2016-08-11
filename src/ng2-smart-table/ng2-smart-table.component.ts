import {
  Component, Input, Output, SimpleChange, EventEmitter, OnInit,
  OnChanges
} from '@angular/core';

import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';

import { FilterComponent } from './components/filter/filter.component';
import { TitleComponent } from './components/title/title.component';
import { PagerComponent } from './components/pager/pager.component';
import { CellComponent } from './components/cell/cell.component';
import { deepExtend } from './lib/helpers';

@Component({
  selector: 'ng2-smart-table',
  directives: [FilterComponent, TitleComponent, PagerComponent, CellComponent],
  styles: [require('./ng2-smart-table.scss')],
  template: require('./ng2-smart-table.html')
})
export class Ng2SmartTableComponent implements OnInit, OnChanges {

  @Input() source: DataSource;
  @Input() settings: Object = {};

  @Output() public select: EventEmitter<any> = new EventEmitter<any>();
  @Output() public delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() public edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() public create: EventEmitter<any> = new EventEmitter<any>();

  protected grid: Grid;
  protected defaultSettings: Object = {

    mode: 'inline', // inline|external|click-to-edit
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: true
    },
    filter: {
      inputClass: '',
    },
    edit: {
      inputClass: '',
      editButtonContent: '',
      saveButtonContent: '',
      cancelButtonContent: ''
    },
    add: {
      inputClass: '',
      addButtonContent: '',
      createButtonContent: '',
      cancelButtonContent: ''
    },
    delete: {
      deleteButtonContent: ''
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

  ngOnInit(): void {
    if (!this.source) {
      throw new Error('DataSource object can not be empty during table intialization');
    }
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}): void {
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
    if (this.grid.getSetting('mode') === 'external') {
      this.create.emit({
        source: this.source
      });
    } else {
      this.grid.createFormShown = true;
    }
    return false;
  }

  onSelectRow(row: Row): void {
    this.grid.selectRow(row);
    this.select.emit({
      data: row.getData(),
      source: this.source
    });
  }

  onEdit(row: Row, event): boolean {
    event.stopPropagation();
    this.onSelectRow(row);

    if (this.grid.getSetting('mode') === 'external') {
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
    this.onSelectRow(row);

    if (this.grid.getSetting('mode') === 'external') {
      this.delete.emit({
        data: row.getData(),
        source: this.source
      });
    } else {
      this.grid.delete(row);
    }
    return false;
  }

  onCreate(row: Row, event): boolean {
    event.stopPropagation();

    this.grid.create(row);
    return false;
  }

  onSave(row: Row, event): boolean {
    event.stopPropagation();

    this.grid.save(row);
    return false;
  }

  protected initGrid(): void {
    this.grid = new Grid(this.source, this.prepareSettings());
    this.grid.onSelectRow().subscribe((row) => this.onSelectRow(row));
  }

  protected prepareSettings(): Object {
    return deepExtend(this.defaultSettings, this.settings);
  }
}
