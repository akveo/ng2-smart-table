import {Observable, Subject, Subscription} from 'rxjs';

import {Deferred, getPageForRowIndex} from './helpers';
import {Column} from './data-set/column';
import {Row} from './data-set/row';
import {DataSet} from './data-set/data-set';
import {DataSource, DataSourceChangeEvent, ISortConfig} from './data-source/data-source';
import {EventEmitter, Type} from '@angular/core';

import {Settings} from "./settings";
import {CreateConfirmEvent, DeleteConfirmEvent, EditConfirmEvent} from './events';

export class Grid {

  createFormShown: boolean = false;
  createFormRow!: Row;

  source!: DataSource;
  settings!: Settings;
  dataSet!: DataSet;

  /**
   * Points to an element in all data
   *
   * when < 0 all lines must be deselected
   */
  selectedRowIndex = -1;
  onSelectRowSource = new Subject<any>();

  private sourceOnChangedSubscription!: Subscription;
  private sourceOnUpdatedSubscription!: Subscription;

  constructor(source: DataSource, settings: Settings) {
    this.setSettings(settings);
    this.setSource(source);
  }


  detach(): void {
    if (this.sourceOnChangedSubscription) {
      this.sourceOnChangedSubscription.unsubscribe();
    }
    if (this.sourceOnUpdatedSubscription) {
      this.sourceOnUpdatedSubscription.unsubscribe();
    }
  }

  showActionColumn(position: string): boolean {
    // no actions configured, therefore now actions visible
    if (this.settings.actions === false || this.settings.actions === undefined) {
      return false;
    }
    // not the correct position
    if (position !== this.settings.actions?.position) {
      return false;
    }
    // column is visible if and only if at least one action is visible - check all of them
    return this.settings.actions.add || this.settings.actions.edit || this.settings.actions.delete ||
      (this.settings.actions.custom?.length ?? 0) > 0 ||
      this.getExpandedRowComponentClass() !== undefined;
  }

  isMultiSelectVisible(): boolean {
    return this.settings.selectMode === 'multi' || this.settings.selectMode === 'multi_filtered';
  }

  getExpandedRowComponentClass(): Type<any> | undefined {
    return this.settings.expand?.component;
  }

  setSettings(settings: Settings) {
    this.settings = settings;
    this.recreateDataSet();
  }

  recreateDataSet() {
    this.dataSet = new DataSet([], this.settings.columns);

    if (this.source) {
      this.source.refresh();
    }
  }

  getDataSet(): DataSet {
    return this.dataSet;
  }

  setSource(source: DataSource) {
    this.detach();
    this.source = this.prepareSource(source);

    this.sourceOnChangedSubscription = this.source.onChanged().subscribe((changes: any) => this.processDataChange(changes));

    this.sourceOnUpdatedSubscription = this.source.onUpdated().subscribe((data: any) => {
      const changedRow = this.dataSet.findRowByData(data);
      changedRow.setData(data);
    });
  }

  getColumns(): Array<Column> {
    return this.dataSet.getColumns();
  }

  getRows(): Array<Row> {
    return this.dataSet.getRows();
  }

  selectRow(row: Row) {
    this.dataSet.selectRow(row);
    this.source.toggleItem(row.getData(), row.isSelected);
  }

  multipleSelectRow(row: Row) {
    this.dataSet.multipleSelectRow(row);
    this.source.toggleItem(row.getData(), row.isSelected);
  }

  onSelectRow(): Observable<any> {
    return this.onSelectRowSource.asObservable();
  }

  expandRow(row: Row) {
    this.dataSet.expandRow(row);
  }

  edit(row: Row) {
    row.isInEditing = true;
  }

  create(row: Row, confirmEmitter: EventEmitter<CreateConfirmEvent>) {
    const deferred = new Deferred();
    deferred.promise.then((newData) => {
      newData = newData ? newData : row.getNewData();
      this.createFormShown = false;
      this.source.prepend(newData).then();
    }).catch((err) => {
      // doing nothing
    });

    if (this.settings.add?.confirmCreate ?? false) {
      confirmEmitter.emit({
        newData: row.getNewData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve();
    }
  }

  save(row: Row, confirmEmitter: EventEmitter<EditConfirmEvent>) {

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

    if (this.settings.edit?.confirmSave ?? false) {
      confirmEmitter.emit({
        row: row,
        data: row.getData(),
        newData: row.getNewData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve();
    }
  }

  delete(row: Row, confirmEmitter: EventEmitter<DeleteConfirmEvent>) {

    const deferred = new Deferred();
    deferred.promise.then(() => {
      this.source.remove(row.getData());
    }).catch((err) => {
      // doing nothing
    });

    if (this.settings.delete?.confirmDelete ?? false) {
      confirmEmitter.emit({
        row: row,
        data: row.getData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve();
    }
  }

  processDataChange(changes: DataSourceChangeEvent) {
    if (this.shouldProcessChange(changes)) {
      this.dataSet.setData(changes.elements, this.getSelectedItems());
      if (this.settings.selectMode === 'single') {
        if (this.dataSet.getRows().length > 0) {
          const row = this.determineRowToSelect(changes);
          this.onSelectRowSource.next(row);
        } else {
          this.onSelectRowSource.next(null);
        }
      }
    }
  }

  shouldProcessChange(changes: DataSourceChangeEvent): boolean {
    if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'empty', 'paging'].indexOf(changes.action) !== -1) {
      return true;
    } else if (['prepend', 'append'].indexOf(changes.action) !== -1 && (this.settings.pager?.display ?? true)) {
      return true;
    }

    return false;
  }

  determineRowToSelect(changes: DataSourceChangeEvent): Row | null {

    if (['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes.action) !== -1) {
      return this.dataSet.select(this.getRowIndexToSelect());
    }

    if (this.selectedRowIndex < 0) {
      return null;
    }

    if (changes.action === 'remove') {
      if (changes.elements.length === 0) {
        // we have to store which one to select as the data will be reloaded
        this.dataSet.willSelectLastRow();
      } else {
        return this.dataSet.selectPreviousRow();
      }
    }
    if (changes.action === 'append') {
      // we have to store which one to select as the data will be reloaded
      this.dataSet.willSelectLastRow();
    }
    if (changes.action === 'add') {
      return this.dataSet.selectFirstRow();
    }
    if (changes.action === 'update') {
      return this.dataSet.selectFirstRow();
    }
    if (changes.action === 'prepend') {
      // we have to store which one to select as the data will be reloaded
      this.dataSet.willSelectFirstRow();
    }
    return null;
  }

  prepareSource(source: DataSource): DataSource {
    let sortConf: Array<ISortConfig> = [];
    for (const column of this.getColumns()) {
      if (column.isSortable && column.defaultSortDirection !== null) {
        sortConf.push({
          field: column.id,
          direction: column.defaultSortDirection,
          compare: column.compareFunction,
        });
      }
    }
    source.setSort(sortConf, false);
    source.setPaging(this.getPageToSelect(source), this.settings.pager?.perPage ?? 10, false);

    source.refresh();
    return source;
  }

  getSelectedItems(): Array<any> {
    return this.source.getSelectedItems();
  }

  async selectAllRows(status: boolean) {
    // remember that the data set of the grid only contains the visible elements on the current page
    this.dataSet.getRows().forEach(r => r.isSelected = status);

    // advise the data source to also update the selected elements
    await this.source.selectAllItems(status, this.settings.selectMode === 'multi_filtered');
  }

  getFirstRow(): Row {
    return this.dataSet.getFirstRow();
  }

  getLastRow(): Row {
    return this.dataSet.getLastRow();
  }

  private getSelectionInfo(): { perPage: number, page: number, selectedRowIndex: number, switchPageToSelectedRowPage: boolean } {
    return {
      perPage: this.settings.pager?.perPage ?? 10,
      page: this.settings.pager?.page ?? 1,
      selectedRowIndex: this.selectedRowIndex,
      switchPageToSelectedRowPage: this.settings.switchPageToSelectedRowPage ?? false,
    };
  }

  private getRowIndexToSelect(): number {
    const {switchPageToSelectedRowPage, selectedRowIndex, perPage} = this.getSelectionInfo();
    const dataAmount: number = this.source.count();
    /**
     * source - contains all table data
     * dataSet - contains data for current page
     * selectedRowIndex - contains index for data in all data
     *
     * because of that, we need to count index for a specific row in page
     * if
     * `switchPageToSelectedRowPage` - we need to change page automatically
     * `selectedRowIndex < dataAmount && selectedRowIndex >= 0` - index points to existing data
     * (if index points to non-existing data and we calculate index for current page - we will get wrong selected row.
     *  if we return index witch not points to existing data - no line will be highlighted)
     */
    return (
      switchPageToSelectedRowPage &&
      selectedRowIndex < dataAmount &&
      selectedRowIndex >= 0
    ) ?
      selectedRowIndex % perPage :
      selectedRowIndex;
  }

  private getPageToSelect(source: DataSource): number {
    const {switchPageToSelectedRowPage, selectedRowIndex, perPage, page} = this.getSelectionInfo();
    let pageToSelect: number = Math.max(1, page);
    if (switchPageToSelectedRowPage && selectedRowIndex >= 0) {
      pageToSelect = getPageForRowIndex(selectedRowIndex, perPage);
    }
    const maxPageAmount: number = Math.ceil(source.count() / perPage);
    return maxPageAmount ? Math.min(pageToSelect, maxPageAmount) : pageToSelect;
  }

  showCreateForm() {
    // if already shown, do nothing
    if (this.createFormShown) return;

    const vcf = this.settings.valueCreateFunction ?? (() => ({}));
    this.createFormRow = new Row(-1, vcf(), this.dataSet);
    this.createFormRow.isInEditing = true;
    this.createFormShown = true;
  }
}
