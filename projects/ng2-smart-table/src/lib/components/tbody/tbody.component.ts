import {
  Component, 
  Input, 
  Output, 
  EventEmitter,  
  ViewContainerRef, 
  ComponentFactoryResolver, 
  OnDestroy, 
  AfterViewInit, 
  QueryList, 
  ViewChildren 
} from '@angular/core';

import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
import { Cell } from '../../lib/data-set/cell';
import { delay } from 'rxjs/operators';
import { Row } from '../../lib/data-set/row';

@Component({
  selector: '[ng2-st-tbody]',
  styleUrls: ['./tbody.component.scss'],
  templateUrl: './tbody.component.html',
})
export class Ng2SmartTableTbodyComponent implements  AfterViewInit, OnDestroy  {

  @Input() grid: Grid;
  @Input() source: DataSource;
  @Input() deleteConfirm: EventEmitter<any>;
  @Input() editConfirm: EventEmitter<any>;
  @Input() rowClassFunction: Function;

  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() custom = new EventEmitter<any>();
  @Output() edited = new EventEmitter<any>();
  @Output() userSelectRow = new EventEmitter<any>();
  @Output() editRowSelect = new EventEmitter<any>();
  @Output() multipleSelectRow = new EventEmitter<any>();
  @Output() rowHover = new EventEmitter<any>();
  @Output() onExpandRow = new EventEmitter<any>();

  @ViewChildren('expandedRowChild',{ read: ViewContainerRef}) expandedRowChild: QueryList<any>;
  
  customComponent: any;
  hasChildComponent: boolean = false;


  constructor(private resolver: ComponentFactoryResolver,private vcRef: ViewContainerRef) {}

  ngAfterViewInit(): void {
    let cmp = this.grid.settings['expandedRowComponent'];
    if (cmp && !this.customComponent) {
      this.expandedRowChild.forEach(c => c.clear());
      this.hasChildComponent = true;
      this.createCustomComponent();
    }  
  }

  ngOnDestroy(): void {
    if(this.customComponent) this.customComponent.destroy();
  }

  clear() {
    this.vcRef.clear();
  }

  isRowSelected  = (row: Row): boolean =>{

    return this.grid.getDataSet().isRowSelected(row);
   } 
  
  protected createCustomComponent() {
    const componentFactory = this.resolver.resolveComponentFactory(this.grid.settings['expandedRowComponent']);
    this.expandedRowChild.changes
      .pipe(delay(0))
      .subscribe(item => {
        if (item.length) {
          this.customComponent  = item.first.createComponent(componentFactory);
          Object.assign(this.customComponent.instance, this.grid.dataSet.expandRow,{
            rowData : this.grid.dataSet.getExpandedRow().getData(),
          });
        }
      });
  }

  isMultiSelectVisible: boolean;
  showActionColumnLeft: boolean;
  showActionColumnRight: boolean;
  mode: string;
  editInputClass: string;
  isActionAdd: boolean;
  isActionEdit: boolean;
  isActionDelete: boolean;
  noDataMessage: boolean;

  get tableColumnsCount() {
    const actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
    return this.grid.getColumns().length + actionColumns;
  }

  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.mode = this.grid.getSetting('mode');
    this.editInputClass = this.grid.getSetting('edit.inputClass');
    this.showActionColumnRight = this.grid.showActionColumn('right');
    this.isActionAdd = this.grid.getSetting('actions.add');
    this.isActionEdit = this.grid.getSetting('actions.edit');
    this.isActionDelete = this.grid.getSetting('actions.delete');
    this.noDataMessage = this.grid.getSetting('noDataMessage');
  }

  getVisibleCells(cells: Array<Cell>): Array<Cell> {
    return (cells || []).filter((cell: Cell) => !cell.getColumn().hide);
  }

  onExpandRowClick(row:Row){
    console.log('onExpandRowClick');
    this.onExpandRow.emit(row);
  }
}
