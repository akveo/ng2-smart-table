import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Grid } from '../../lib/grid';
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';

@Component({
  selector: 'ng2-smart-table-cell',
  template: `
    <table-cell-view-mode *ngIf="!isInEditing" (click)="onClick(this)" [cell]="cell"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
                          [inputClass]="inputClass"
                          (edited)="onEdited($event)">
    </table-cell-edit-mode>
  `,
})
export class CellComponent {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() editConfirm: EventEmitter<any>;
  @Input() createConfirm: EventEmitter<any>;
  @Input() isNew: boolean;
  @Input() cell: Cell;
  @Input() inputClass: string = '';
  @Input() mode: string = 'inline';
  @Input() isInEditing: boolean = false;

  @Output() edited = new EventEmitter<any>();

  onClick(cel: CellComponent){
      if(cel.cell.isEditable()){
        cel.isInEditing = true;  
      }
            
      if(this.grid.prevCell === undefined){
        this.grid.prevCell = new Observable(observer=>{
          observer.next(cel);
        });
      }
      else
      {

        let subscription = this.grid.prevCell.distinctUntilChanged().subscribe(cc => {
          if(cc.cell.isEditable()){
            cc.isInEditing = false;           
           this.grid.save(cc.cell.getRow(), this.editConfirm) 
        }        
        this.grid.prevCell = new Observable(observer=>{
          observer.next(cel);
        });
        });
      }
  }

  onEdited(event: any) {
    if (this.isNew) {
      this.grid.create(this.grid.getNewRow(), this.createConfirm);
    } else {
      this.grid.save(this.row, this.editConfirm);
    }
  }
}
