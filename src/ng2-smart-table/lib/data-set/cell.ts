import { Column } from './column';
import { DataSet } from './data-set';
import { Row } from './row';

export class Cell {

  newValue = '';
  isChecked = false;

  protected static PREPARE = (value) => value;

  constructor(protected value: any, protected row: Row, protected column, protected dataSet: DataSet) {
    this.newValue = value;
    this.isChecked = false;
  }

  getValue(): any {
    let valid = this.column.getValuePrepareFunction() instanceof Function;
    let prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
    return prepare.call(null, this.value, this.row.getData());
  }

  getColumn(): Column {
    return this.column;
  }

  getRow(): Row {
    return this.row;
  }
}
