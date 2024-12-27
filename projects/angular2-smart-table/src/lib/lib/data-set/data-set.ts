import {Row} from './row';
import {Column} from './column';
import {IColumns} from "../settings";

export class DataSet {
  protected data: Array<Row> = [];
  protected columns: Array<Column> = [];
  protected rows: Array<Row> = [];
  protected selectedRow: Row | null = null;
  protected expandedRow?: Row;
  protected willSelect: 'first' | 'last' | 'indexed' = 'indexed';

  constructor(data: Array<any> = [], protected columnSettings: IColumns) {
    this.createColumns(columnSettings);
    this.setData(data);
  }

  setData(data: Array<any>, selectedRows: Array<any> = []) {
    this.data = data.map((el, index) => {
      const row = new Row(index, el, this);
      row.isSelected = selectedRows.indexOf(el) > -1;
      return row;
    });
    this.createRows();
  }

  getColumns(): Array<Column> {
    return this.columns;
  }

  getExpandedRow(): Row {
    if (!this.expandedRow) {
      console.warn('Expanded row not found');
      throw new Error('Expanded row not found');
    }
    return this.expandedRow;
  }

  getSelectedRow(): Row | null {
    return this.selectedRow;
  }

  getRows(): Array<Row> {
    return this.rows ?? [];
  }

  getFirstRow(): Row {
    return this.rows[0];
  }

  getLastRow(): Row {
    return this.rows[this.rows.length - 1];
  }

  findRowByData(data: any): Row {
    const row = this.rows.find((row: Row) => row.getData() === data);
    if (!row) {
      console.warn('Data row not found', data);
      throw new Error('Row not found');
    }
    return row;
  }

  deselectAll() {
    this.rows.forEach((row) => {
      row.isSelected = false;
    });
    // we need to clear selectedRow field because no one row selected
    this.selectedRow = null;
  }

  clearExpandAll() {
    this.rows.forEach((row) => {
      row.isExpanded = false;
    });
    // we need to clear selectedRow field because no one row selected
    this.expandedRow = undefined;
  }

  selectRow(row: Row): void {
    const previousIsSelected = row.isSelected;
    this.deselectAll();

    row.isSelected = !previousIsSelected;
    this.selectedRow = row;
  }

  multipleSelectRow(row: Row): void {
    row.isSelected = !row.isSelected;
    this.selectedRow = row;
  }

  expandRow(row: Row): Row {
    const previousIsExpanded = row.isExpanded;
    this.clearExpandAll();
    if (row.index !== this.expandedRow?.index) {
      this.expandedRow = undefined;
    }
    row.isExpanded = !previousIsExpanded;
    this.expandedRow = row;
    return this.expandedRow;
  }

  selectPreviousRow(): Row | null {
    if (this.rows.length > 0) {
      let index = this.selectedRow ? this.selectedRow.index : 0;
      if (index > this.rows.length - 1) {
        index = this.rows.length - 1;
      }
      this.selectRow(this.rows[index]);
      return this.getSelectedRow();
    } else {
      return null;
    }
  }

  selectFirstRow(): Row | null{
    if (this.rows.length > 0) {
      this.selectRow(this.rows[0]);
      return this.getSelectedRow();
    } else {
      return null;
    }
  }

  selectLastRow(): Row | null {
    if (this.rows.length > 0) {
      this.selectRow(this.rows[this.rows.length - 1]);
      return this.getSelectedRow();
    } else {
      return null;
    }
  }

  willSelectFirstRow() {
    this.willSelect = 'first';
  }

  willSelectLastRow() {
    this.willSelect = 'last';
  }

  select(index: number): Row | null {
    if (index >= 0 && this.getRows().length === 0) {
      return null;
    }
    const willSelect = this.willSelect;
    this.willSelect = 'indexed';
    if (willSelect === 'indexed') {
      if (index >= 0 && index < this.rows.length) {
        this.selectRow(this.rows[index]);
        return this.selectedRow;
      } else {
        // we need to deselect all rows if we got an incorrect index
        this.deselectAll();
        return null;
      }
    } else if (willSelect === 'first') {
      return this.selectFirstRow();
    } else if (willSelect === 'last') {
      return this.selectLastRow();
    } else {
      // this branch is unreachable, because the if-else is exhaustive, but stupid typescript compilers do not see that
      return null;
    }
  }

  /**
   * Create columns by mapping from the settings
   * @param settings
   * @private
   */
  createColumns(settings: IColumns) {
    for (const id in settings) {
      if (settings.hasOwnProperty(id)) {
        this.columns.push(new Column(id, settings[id], this));
      }
    }
  }

  /**
   * Create rows based on current data prepared in data source
   * @private
   */
  createRows() {
    this.rows = [];
    this.data.forEach((el) => {
      this.rows.push(el);
    });
  }
}
