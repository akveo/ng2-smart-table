import {AfterViewInit, Component, ElementRef, Input, OnChanges} from '@angular/core';

import {Grid} from '../../../lib/grid';

@Component({
    selector: '[angular2-st-actions-title]',
    template: `
    <div class="angular2-smart-title">{{ actionsColumnTitle }}</div>
  `,
    standalone: false
})
export class ActionsTitleComponent implements AfterViewInit, OnChanges {

  @Input() grid!: Grid;

  actionsColumnTitle!: string;

  constructor(private ref: ElementRef) {
  }

  ngAfterViewInit() {
    this.ref.nativeElement.classList.add('angular2-smart-actions');
  }

  ngOnChanges() {
    this.actionsColumnTitle = 'Actions';
    if (this.grid.settings.actions !== false) {
      this.actionsColumnTitle = this.grid.settings.actions?.columnTitle ?? 'Actions';
    }
  }
}
