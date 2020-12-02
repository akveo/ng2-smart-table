import { Cell, prepareValue } from './cell';
export class FooterCell extends Cell {
  protected static PREPARE = prepareValue;
  newValue: any = '';
  rowIndex = this.row.index;
  config = this.column.getFooterRowConfig(this.rowIndex);
  getValue(): any {
    if (!this.config) {
      return '';
    }
    return this.config.value || this.config.valuePrepareFunction && this.config.valuePrepareFunction(this.value);
  }

  getType(): string {
    return this.config?.type || 'text';
  }

  isEditable(): boolean {
    return false;
  }
}
