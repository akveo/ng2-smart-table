import { Column } from './column';
import { DataSet } from './data-set';
import { Row } from './row';

export function prepareValue (value: any) { return value }

export class Cell {

  newValue: any = '';
  protected static PREPARE = prepareValue;

  constructor(protected value: any, protected row: Row, protected column: any, protected dataSet: DataSet) {
    this.newValue = value;
  }

  getColumn(): Column {
    return this.column;
  }

  getRow(): Row {
    return this.row;
  }

  getValue(): any {
    const valid = this.column.getValuePrepareFunction() instanceof Function;
    const prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
    return prepare.call(null, this.value, this.row.getData(), this);
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
    if (this.getRow().index === -1) {
      return this.getColumn().isAddable;
    }
    else {
      return this.getColumn().isEditable;
    }
  }

}
