import { Row } from './row';
import { Column } from './column';

export class DataSet {

  newRow: Row;

  protected data: Array<any> = [];
  protected columns: Array<Column> = [];
  protected rows: Array<Row> = [];
  protected selectedRow: Row;
  protected willSelect: string;

  constructor(data: Array<any> = [], protected columnSettings: Object) {
    this.createColumns(columnSettings);
    this.setData(data);

    this.createNewRow();
  }

  setData(data: Array<any>) {
    this.data = data;
    this.createRows();
  }

  getColumns(): Array<Column> {
    return this.columns;
  }

  getRows(): Array<Row> {
    return this.rows;
  }

  getFirstRow(): Row {
    return this.rows[0];
  }

  getLastRow(): Row {
    return this.rows[this.rows.length - 1];
  }

  findRowByData(data: any): Row {
    return this.rows.find((row: Row) => row.getData() === data);
  }

  deselectAll() {
    this.rows.forEach((row) => {
      row.isSelected = false;
    });
    // we need to clear selectedRow field because no one row selected
    this.selectedRow = undefined;
  }

  selectRow(row: Row): Row | undefined {
    const previousIsSelected = row.isSelected;
    this.deselectAll();

    row.isSelected = !previousIsSelected;
    this.selectedRow = row;

    return this.selectedRow;
  }

  multipleSelectRow(row: Row): Row {
    row.isSelected = !row.isSelected;
    this.selectedRow = row;

    return this.selectedRow;
  }

  selectPreviousRow(): Row {
    if (this.rows.length > 0) {
      let index = this.selectedRow ? this.selectedRow.index : 0;
      if (index > this.rows.length - 1) {
        index = this.rows.length - 1;
      }
      this.selectRow(this.rows[index]);
      return this.selectedRow;
    }
  }

  selectFirstRow(): Row | undefined {
    if (this.rows.length > 0) {
      this.selectRow(this.rows[0]);
      return this.selectedRow;
    }
  }

  selectLastRow(): Row | undefined {
    if (this.rows.length > 0) {
      this.selectRow(this.rows[this.rows.length - 1]);
      return this.selectedRow;
    }
  }

  selectRowByIndex(index: number): Row | undefined {
    const rowsLength: number = this.rows.length;
    if (rowsLength === 0) {
      return;
    }
    if (!index) {
      this.selectFirstRow();
      return this.selectedRow;
    }
    if (index > 0 && index < rowsLength) {
      this.selectRow(this.rows[index]);
      return this.selectedRow;
    }
    // we need to deselect all rows if we got an incorrect index
    this.deselectAll();
  }

  willSelectFirstRow() {
    this.willSelect = 'first';
  }

  willSelectLastRow() {
    this.willSelect = 'last';
  }

  select(selectedRowIndex?: number): Row | undefined {
    if (this.getRows().length === 0) {
      return;
    }
    if (this.willSelect) {
      if (this.willSelect === 'first') {
        this.selectFirstRow();
      }
      if (this.willSelect === 'last') {
        this.selectLastRow();
      }
      this.willSelect = '';
    } else {
      this.selectRowByIndex(selectedRowIndex);
    }

    return this.selectedRow;
  }

  createNewRow() {
    this.newRow = new Row(-1, {}, this);
    this.newRow.isInEditing = true;
  }

  /**
   * Create columns by mapping from the settings
   * @param settings
   * @private
   */
  createColumns(settings: any) {
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
    this.data.forEach((el, index) => {
      this.rows.push(new Row(index, el, this));
    });
  }
}
