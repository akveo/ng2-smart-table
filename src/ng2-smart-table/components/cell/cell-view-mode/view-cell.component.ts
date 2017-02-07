import { Component, Input, ViewChild, ElementRef, OnChanges, AfterViewInit } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({
  selector: 'table-cell-view-mode',
  template: `
    <div [ngSwitch]="cell.getColumn().type">
        <div *ngSwitchCase="'html'" #cellContainer [innerHTML]="cell.getValue()"></div>

        <div *ngSwitchDefault #cellContainer>{{ cell.getValue() }}</div>
    </div>
    `
})
export class ViewCellComponent implements OnChanges, AfterViewInit {

  @Input() cell: Cell;
  @ViewChild('cellContainer') cellRef: ElementRef;

  ngOnChanges(changes): void {
    setTimeout(() => this.renderCustomValue());
  }

  ngAfterViewInit(): void {
    this.renderCustomValue();
  }

  renderCustomValue(): void {
    const cellRenderFunc = this.cell.getColumn().getCellRenderFunction();

    if (cellRenderFunc && this.cellRef)
      cellRenderFunc.call(null, this.cell, this.cellRef.nativeElement);
  }
}
