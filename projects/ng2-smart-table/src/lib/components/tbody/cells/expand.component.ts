import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";
import { Row } from "../../../lib/data-set/row";
import { Grid } from "../../../lib/grid";

@Component({
    selector: 'ng2-st-tbody-expand',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <a href="#" class="ng2-smart-action ng2-smart-action-expand-expand"
          [innerHTML]="expandRowButtonContent" (click)="onExpand($event)"></a>
    `,
  })
  export class TbodyExpandRowComponent implements OnChanges {
  
    @Input() grid: Grid;
    @Input() row: Row;

    @Output() onExpandRow = new EventEmitter<any>();

    expandRowButtonContent: string;

    constructor(){
    }
  
    onExpand(event: any) {
        event.preventDefault();
        event.stopPropagation();
        this.onExpandRow.emit(this.row);
    }
  
  
    ngOnChanges(){
        this.expandRowButtonContent = this.grid.getSetting('expand.expandRowButtonContent');
    }
  }