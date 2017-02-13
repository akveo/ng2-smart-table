import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Grid } from '../../../lib/grid';

@Component({
  selector: '[ng2-st-checkbox-select-all]',
  template: `
    <div (click)="selectAllRows()">
      <input type="checkbox" [ngModel]="isAllSelected">
    </div>      
  `
})
export class CheckboxSelectAllComponent {

  isAllSelected: boolean = false;
  @Input() grid: Grid;
  @Input() source: any;

  @Output() rowSelect = new EventEmitter<any>();
  @Output() userRowSelect = new EventEmitter<any>();

  selectAllRows() {
    this.isAllSelected = !this.isAllSelected;
    this.grid.selectAllRows(this.isAllSelected);
    let selectedRows = this.grid.getSelectedRows();

    this._onUserSelectRow(selectedRows[0], selectedRows);
    this._onSelectRow(selectedRows[0]);
  }

  private _onUserSelectRow(data: any, selected: Array<any> = []) {
    this.userRowSelect.emit({
      data: data || null,
      source: this.source,
      selected: selected.length ? selected : this.grid.getSelectedRows(),
    });
  }

  private _onSelectRow(data: any) {
    this.rowSelect.emit({
      data: data || null,
      source: this.source,
    });
  }


}
