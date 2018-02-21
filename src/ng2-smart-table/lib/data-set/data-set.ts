import { FormGroup, FormControl } from '@angular/forms';

import { Row } from './row';
import { Column } from './column';
import { ValidatorService } from '../validator.service';

export class DataSet {

  newRow: Row;

  public newRowValidator: FormGroup;
  public editRowValidators: FormGroup[];
  protected data: Array<any> = [];
  protected columns: Array<Column> = [];
  protected rows: Array<Row> = [];
  protected selectedRow: Row;
  protected willSelect: string = 'first';

  constructor(data: Array<any> = [], protected columnSettings: Object, private validator: ValidatorService) {
    this.createColumns(columnSettings);
    this.setData(data);
    this.createNewRowValidator();

    this.createNewRow();
  }

  addDefaultsToFormGroup(formGroup: FormGroup): FormGroup {
    if(this.columnSettings)
      for (const id in this.columnSettings)
          if (!formGroup.controls[id] && this.columnSettings.hasOwnProperty(id))
              formGroup.controls[id] = new FormControl();
    return formGroup;
  }

  createNewRowValidator() {
    this.newRowValidator = this.addDefaultsToFormGroup(this.validator.getFormGroup());
  }

  createEditRowValidators() {
    this.editRowValidators = new Array<FormGroup>();
    this.data.forEach(() => {
      this.editRowValidators.push(this.addDefaultsToFormGroup(this.validator.getFormGroup()));
    });
  }

  setData(data: Array<any>) {
    this.data = data;
    this.createRows();
    this.createEditRowValidators();
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

  getRowValidator(index:number): FormGroup {
    if(index === -1)
      return this.newRowValidator;
    else
      return this.editRowValidators[index] as FormGroup;
  }

  findRowByData(data: any): Row {
    return this.rows.find((row: Row) => row.getData() === data);
  }

  deselectAll() {
    this.rows.forEach((row) => {
      row.isSelected = false;
    });
  }

  selectRow(row: Row): Row {
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

  selectFirstRow(): Row {
    if (this.rows.length > 0) {
      this.selectRow(this.rows[0]);
      return this.selectedRow;
    }
  }

  selectLastRow(): Row {
    if (this.rows.length > 0) {
      this.selectRow(this.rows[this.rows.length - 1]);
      return this.selectedRow;
    }
  }

  willSelectFirstRow() {
    this.willSelect = 'first';
  }

  willSelectLastRow() {
    this.willSelect = 'last';
  }

  select(): Row {
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
      this.selectFirstRow();
    }

    return this.selectedRow;
  }

  addInsertedRowValidator(): void {
    this.newRowValidator.reset();
    this.editRowValidators = [this.addDefaultsToFormGroup(this.validator.getFormGroup())].concat(this.editRowValidators);
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
