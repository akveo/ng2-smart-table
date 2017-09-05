import { Column } from './column';
import { DataSet } from './data-set';
import { Row } from './row';

export class Cell {

  newValue: any = '';
  protected static PREPARE = (value: any) => value;
  protected static STYLE = (value: any) => null;
  protected static CLASS = (value: any) => new Object();

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

  getStyle(): any {
    const isFunc = this.column.getCellStyleFunction() instanceof Function;
    const getCellStyle = isFunc ? this.column.getCellStyleFunction() : Cell.STYLE;
    return getCellStyle.call(null, this.value, this.row.getData());
  }

  getClass(): any {
    const isFunc = this.column.getCellClassFunction() instanceof Function;
    const getCellClass = isFunc ? this.column.getCellClassFunction() : Cell.CLASS;
    return getCellClass.call(null, this.value, this.row.getData());
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
