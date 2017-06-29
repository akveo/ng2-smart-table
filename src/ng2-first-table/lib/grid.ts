import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { EventEmitter } from '@angular/core';

import { Deferred, getDeepFromObject } from './helpers';
import { Column } from './data-set/column';
import { Row } from './data-set/row';
import { DataSet } from './data-set/data-set';
import { DataSource } from './data-source/data-source';

export class Grid {

  createFormShown: boolean = false;

  source: DataSource;
  settings: any;
  dataSet: DataSet;

  onSelectRowSource = new Subject<any>();

  constructor(source: DataSource, settings: any) {
    this.setSettings(settings);
    this.setSource(source);
  }

  showActionColumn(position: string): boolean {
    return this.isCurrentActionsPosition(position) && this.isActionsVisible();
  }

  isCurrentActionsPosition(position: string): boolean {
    return position == this.getSetting('actions.position');
  }

  isActionsVisible(): boolean {
    return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
  }

  isMultiSelectVisible(): boolean {
    return this.getSetting('selectMode') === 'multi';
  }

  getNewRow(): Row {
    return this.dataSet.newRow;
  }

  setSettings(settings: Object) {
    this.settings = settings;
    this.dataSet = new DataSet([], this.getSetting('columns'));

    if (this.source) {
      this.source.refresh();
    }
  }

  getDataSet(): DataSet {
    return this.dataSet;
  }

  setSource(source: DataSource) {
    this.source = this.prepareSource(source);

    this.source.onChanged().subscribe((changes) => this.processDataChange(changes));

    this.source.onUpdated().subscribe((data) => {
      const changedRow = this.dataSet.findRowByData(data);
      changedRow.setData(data);
    });
  }

  getSetting(name: string, defaultValue?: any): any {
    return getDeepFromObject(this.settings, name, defaultValue);
  }

  getColumns(): Array<Column> {
    return this.dataSet.getColumns();
  }

  getRows(): Array<Row> {
    return this.dataSet.getRows();
  }

  selectRow(row: Row) {
    this.dataSet.selectRow(row);
  }

  multipleSelectRow(row: Row) {
    this.dataSet.multipleSelectRow(row);
  }

  onSelectRow(): Observable<any> {
    return this.onSelectRowSource.asObservable();
  }

  edit(row: Row) {
    row.isInEditing = true;
  }

  create(row: Row, confirmEmitter: EventEmitter<any>) {

    const deferred = new Deferred();
    deferred.promise.then((newData) => {
      newData = newData ? newData : row.getNewData();
      if (deferred.resolve.skipAdd) {
        this.createFormShown = false;
      } else {
        this.source.prepend(newData).then(() => {
          this.createFormShown = false;
          this.dataSet.createNewRow();
        });
      }
    }).catch((err) => {
      // doing nothing
    });

    if (this.getSetting('add.confirmCreate')) {
      confirmEmitter.emit({
        newData: row.getNewData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve();
    }
  }

  save(row: Row, confirmEmitter: EventEmitter<any>) {

    const deferred = new Deferred();
    deferred.promise.then((newData) => {
      newData = newData ? newData : row.getNewData();
      if (deferred.resolve.skipEdit) {
        row.isInEditing = false;
      } else {
        this.source.update(row.getData(), newData).then(() => {
          row.isInEditing = false;
        });
      }
    }).catch((err) => {
      // doing nothing
    });

    if (this.getSetting('edit.confirmSave')) {
      confirmEmitter.emit({
        data: row.getData(),
        newData: row.getNewData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve();
    }
  }

  delete(row: Row, confirmEmitter: EventEmitter<any>) {

    const deferred = new Deferred();
    deferred.promise.then(() => {
      this.source.remove(row.getData());
    }).catch((err) => {
      // doing nothing
    });

    if (this.getSetting('delete.confirmDelete')) {
      confirmEmitter.emit({
        data: row.getData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve();
    }
  }

  processDataChange(changes: any) {
    if (this.shouldProcessChange(changes)) {
      this.dataSet.setData(changes['elements']);
      if (this.getSetting('selectMode') !== 'multi') {
        const row = this.determineRowToSelect(changes);

        if (row) {
          this.onSelectRowSource.next(row);
        }
      }
    }
  }

  shouldProcessChange(changes: any): boolean {
    if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
      return true;
    } else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
      return true;
    }

    return false;
  }

  // TODO: move to selectable? Separate directive
  determineRowToSelect(changes: any): Row {

    if (['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes['action']) !== -1) {
      return this.dataSet.select();
    }
    if (changes['action'] === 'remove') {
      if (changes['elements'].length === 0) {
        // we have to store which one to select as the data will be reloaded
        this.dataSet.willSelectLastRow();
      } else {
        return this.dataSet.selectPreviousRow();
      }
    }
    if (changes['action'] === 'append') {
      // we have to store which one to select as the data will be reloaded
      this.dataSet.willSelectLastRow();
    }
    if (changes['action'] === 'add') {
      return this.dataSet.selectFirstRow();
    }
    if (changes['action'] === 'update') {
      return this.dataSet.selectFirstRow();
    }
    if (changes['action'] === 'prepend') {
      // we have to store which one to select as the data will be reloaded
      this.dataSet.willSelectFirstRow();
    }
    return null;
  }

  prepareSource(source: any): DataSource {
    const initialSource: any = this.getInitialSort();
    if (initialSource && initialSource['field'] && initialSource['direction']) {
      source.setSort([initialSource], false);
    }
    if (this.getSetting('pager.display') === true) {
      source.setPaging(1, this.getSetting('pager.perPage'), false);
    }

    source.refresh();
    return source;
  }

  getInitialSort() {
    const sortConf: any = {};
    this.getColumns().forEach((column: Column) => {
      if (column.isSortable && column.defaultSortDirection) {
        sortConf['field'] = column.id;
        sortConf['direction'] = column.defaultSortDirection;
        sortConf['compare'] = column.getCompareFunction();
      }
    });
    return sortConf;
  }

  getSelectedRows(): Array<any> {
    return this.dataSet.getRows()
      .filter(r => r.isSelected);
  }

  selectAllRows(status: any) {
    this.dataSet.getRows()
      .forEach(r => r.isSelected = status);
  }

  getFirstRow(): Row {
    return this.dataSet.getFirstRow();
  }

  getLastRow(): Row {
    return this.dataSet.getLastRow();
  }

}
