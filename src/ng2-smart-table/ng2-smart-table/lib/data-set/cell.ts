import { Column } from './column';
import { DataSet } from './data-set';
import { Row } from './row';

export class Cell {

  newValue: any = '';
  protected static PREPARE = (value) => value;

  constructor(protected value: any, protected row: Row, protected column, protected dataSet: DataSet) {
    this.newValue = value;
  }

  getColumn(): Column {
    return this.column;
  }

  getRow(): Row {
    return this.row;
  }

  getValue(): any {
    let valid = this.column.getValuePrepareFunction() instanceof Function;
    let prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
    return prepare.call(null, this.value, this.row.getData());
  }

  setValue(value: any): any {
    this.newValue = value;
  }

  getId(): string {
    return this.getColumn().id;
  }

  getTitle(): string {
    return this.getColumn().title;
  }

  isEditable(): boolean {
    return this.getColumn().isEditable;
  }
}
