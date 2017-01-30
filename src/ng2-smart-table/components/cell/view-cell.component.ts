import { Component, Input, ViewChild, ElementRef } from '@angular/core';

import { Cell } from '../../lib/data-set/cell';

@Component({
  selector: 'view-cell-component',
  templateUrl: `
    <div [ngSwitch]="cell.getColumn().type">
        <div *ngSwitchCase="'html'" #cellContainer [innerHTML]="cell.getValue()"></div>

        <div *ngSwitchDefault #cellContainer>{{ cell.getValue() }}</div>
    </div>
    `
})
export class ViewCellComponent {

  @Input() cell: Cell;

  @ViewChild('cellContainer') cellRef: ElementRef;

  // onStopEditing(): boolean {
  //   this.cell.getRow().isInEditing = false;
  //   this.cancelEdit();
  //   return false;
  // }

  // cancelEdit(): void {
  //   this.renderCustomValue();
  // }

  ngOnChanges(changes): void {
    setTimeout(() => this.renderCustomValue());
  }

  ngAfterViewInit(): void {
    this.renderCustomValue();
  }

  renderCustomValue(): void {
    const cellRenderFunc = this.cell.getColumn().getCellRenderFunction();

    if (cellRenderFunc && this.cellRef) {
      cellRenderFunc.call(null, this.cell, this.cellRef.nativeElement)
    }
  }
}