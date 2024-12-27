import {Cell} from './cell';
import {Column} from './column';
import {DataSet} from './data-set';

export class Row {

  isSelected: boolean = false;
  isInEditing: boolean = false;
  isExpanded: boolean = false;
  cells: Array<Cell> = [];


  constructor(public index: number, protected data: any, protected _dataSet: DataSet) {
    this.process();
  }

  getCell(column: Column): Cell {
    const theCell = this.cells.find(el => el.getColumn() === column)
    if (!theCell) throw new Error('There is no cell with such Column');
    return theCell;
  }

  getCells() {
    return this.cells;
  }

  getData(): any {
    return this.data;
  }

  getIsSelected(): boolean {
    return this.isSelected;
  }

  getIsExpanded(): boolean {
    return this.isExpanded;
  }

  getNewData(): any {
    const values = Object.assign({}, this.data);
    this.getCells().forEach((cell) => values[cell.getColumn().id] = cell.getNewRawValue());
    return values;
  }

  setData(data: any): any {
    this.data = data;
    this.process();
  }

  process() {
    this.cells = [];
    this._dataSet.getColumns().forEach((column: Column) => {
      this.cells.push(new Cell(this.data[column.id], this, column));
    });
  }
}
