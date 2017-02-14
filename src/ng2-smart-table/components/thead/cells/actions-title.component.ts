import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';

import { Grid } from '../../../lib/grid';

@Component({
  selector: '[ng2-st-actions-title]',
  template: `
    <div class="ng2-smart-title">{{ grid.getSetting('actions.columnTitle') }}</div>
  `
})
export class ActionsTitleComponent implements AfterViewInit {

  @Input() grid: Grid;

  constructor(private ref: ElementRef) {
  }

  ngAfterViewInit() {
    this.ref.nativeElement.classList.add('ng2-smart-actions');
  }
}
