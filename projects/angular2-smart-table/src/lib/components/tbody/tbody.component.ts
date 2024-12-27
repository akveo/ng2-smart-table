import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  QueryList,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';

import {Grid} from '../../lib/grid';
import {DataSource} from '../../lib/data-source/data-source';
import {Cell} from '../../lib/data-set/cell';
import {delay} from 'rxjs/operators';
import {Row} from '../../lib/data-set/row';
import {
  CustomActionEvent,
  DeleteConfirmEvent,
  DeleteEvent,
  EditCancelEvent,
  EditConfirmEvent,
  EditEvent
} from '../../lib/events';
import {RowClassFunction} from "../../lib/settings";

@Component({
    selector: '[angular2-st-tbody]',
    styleUrls: ['./tbody.component.scss'],
    templateUrl: './tbody.component.html',
    standalone: false
})
export class NgxSmartTableTbodyComponent implements AfterViewInit, OnChanges, OnDestroy {

  @Input() grid!: Grid;
  @Input() source!: DataSource;
  @Input() deleteConfirm!: EventEmitter<DeleteConfirmEvent>;
  @Input() editConfirm!: EventEmitter<EditConfirmEvent>;
  @Input() editCancel!: EventEmitter<EditCancelEvent>;
  @Input() rowClassFunction!: RowClassFunction;

  @Output() edit = new EventEmitter<EditEvent>();
  @Output() delete = new EventEmitter<DeleteEvent>();
  @Output() custom = new EventEmitter<CustomActionEvent>();

  @Output() userSelectRow = new EventEmitter<Row>();
  @Output() editRowSelect = new EventEmitter<Row>();
  @Output() multipleSelectRow = new EventEmitter<Row>();
  @Output() rowHover = new EventEmitter<Row>();
  @Output() onExpandRow = new EventEmitter<Row>();

  @ViewChildren('expandedRowChild', { read: ViewContainerRef }) expandedRowChild!: QueryList<ViewContainerRef>;

  expandedRowComponent: any;
  hasChildComponent: boolean = false;

  ngAfterViewInit(): void {
    let cmp = this.grid.getExpandedRowComponentClass();
    if (cmp !== undefined && !this.expandedRowComponent) {
      this.expandedRowChild.forEach(c => c.clear());
      this.hasChildComponent = true;
      this.createExpandedRowComponent();
    }
  }

  ngOnDestroy(): void {
    if (this.expandedRowComponent) this.expandedRowComponent.destroy();
  }

  private createExpandedRowComponent() {
    const cmp = this.grid.getExpandedRowComponentClass();
    if (cmp !== undefined) {
      this.expandedRowChild.changes
        .pipe(delay(0))
        .subscribe((list: QueryList<ViewContainerRef>) => {
          if (list.length) {
            this.expandedRowComponent = list.first.createComponent(cmp);
            Object.assign(this.expandedRowComponent.instance, this.grid.dataSet.expandRow, {
              rowData: this.grid.dataSet.getExpandedRow().getData(),
            });
          }
        });
    }
  }

  isMultiSelectVisible!: boolean;
  showActionColumnLeft!: boolean;
  showActionColumnRight!: boolean;
  mode!: string;
  editInputClass!: string;
  noDataMessage!: string;

  get tableColumnsCount() {
    const actionColumn = (this.showActionColumnLeft || this.showActionColumnRight) ? 1 : 0;
    const selectColumn = this.isMultiSelectVisible ? 1 : 0;
    return this.grid.getColumns().length + actionColumn + selectColumn;
  }

  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.mode = this.grid.settings.mode ?? 'inline';
    this.editInputClass = this.grid.settings.edit?.inputClass ?? '';
    this.showActionColumnRight = this.grid.showActionColumn('right');
    this.noDataMessage = this.grid.settings.noDataMessage!;
  }

  getVisibleCells(cells: Array<Cell>): Array<Cell> {
    return (cells || []).filter((cell: Cell) => !cell.getColumn().hide);
  }
}
