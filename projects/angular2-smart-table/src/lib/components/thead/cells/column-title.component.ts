import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Column} from '../../../lib/data-set/column';
import {DataSource} from '../../../lib/data-source/data-source';

@Component({
    selector: 'angular2-st-column-title',
    template: `
    <div class="angular2-smart-title">
      <angular2-smart-table-title [source]="source" [column]="column" [isHideable]="isHideable" (hide)="hide.emit($event)"></angular2-smart-table-title>
    </div>
  `,
    standalone: false
})
export class ColumnTitleComponent {

  @Input() column!: Column;
  @Input() source!: DataSource;
  @Input() isHideable!: boolean;

  @Output() hide = new EventEmitter<any>();

}
