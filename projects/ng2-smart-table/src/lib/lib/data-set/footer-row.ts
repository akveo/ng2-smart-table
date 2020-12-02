import { Row } from './row';
import { Column } from './column';
import { FooterCell } from './footer-cell';

export class FooterRow extends Row {

  getIsSelected(): boolean {
    return false;
  }

  createCell(column: Column): FooterCell {
    return new FooterCell(this.data, this, column, this._dataSet);
  }

}
