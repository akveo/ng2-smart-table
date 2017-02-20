import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';

import { Grid } from '../../../lib/grid';

@Component({
  selector: '[ng2-st-add-button]',
  template: `
    <a *ngIf="grid.getSetting('actions.add')" href="#" class="ng2-smart-action ng2-smart-action-add-add"
        [innerHTML]="grid.getSetting('add.addButtonContent')" (click)="onAdd($event)"></a>
  `
})
export class AddButtonComponent implements AfterViewInit {

  @Input() grid: Grid;
  @Input() source: any;
  @Output() create = new EventEmitter<any>();

  constructor(private ref: ElementRef) {
  }

  ngAfterViewInit() {
    this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
  }

  onAdd(event: any) {
    event.preventDefault();
    event.stopPropagation();
    if (this.grid.getSetting('mode') === 'external') {
      this.create.emit({
        source: this.source
      });
    } else
      this.grid.createFormShown = true;
  }
}
