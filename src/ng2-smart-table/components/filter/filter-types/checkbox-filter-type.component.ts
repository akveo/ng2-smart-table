import { Component, Input } from '@angular/core';

import { DefaultFilter } from './default-filter';
import { Grid } from '../../../lib/grid';

@Component({
  selector: 'checkbox-filter-type',
    styles: [`
      .reset-button {
        font-weight: normal;
        font-size: .7rem;
      }
  `],
  template: `
    <input [(ngModel)]="checkboxValue"
           [ngClass]="inputClass"
           type="checkbox"
           class="form-control"
           (change)="onChange($event)"><br>
    <a href="#" class="reset-button" *ngIf="hasChanged" (click)="reset($event)">{{ grid.getSetting('filter.resetCheckboxContent') }}</a>
    `
})
export class CheckboxFilterTypeComponent extends DefaultFilter {

  checkboxValue: boolean;
  hasChanged: boolean = false;
  @Input() grid: Grid;

  onChange(event: any) {
    this.hasChanged = true;
    const trueVal = (this.column.getConfig() && this.column.getConfig().true) || true;
    const falseVal = (this.column.getConfig() && this.column.getConfig().false) || false;
    this.valueChange.emit(event.target.checked ? trueVal : falseVal);
  }

  reset(event: any) {
    event.preventDefault();
    this.valueChange.emit('');
    this.checkboxValue = false;
    this.hasChanged = false;
  }
}
