import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';

import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import { Column } from "../../../lib/data-set/column";

@Component({
  selector: '[ng2-st-thead-toolsline-row]',
  template: `
    <th [attr.colspan]="colsNum">
    <button>删除</button>
    <!--<button *ngFor="let tool of toolsbars" (click)="">删除</button>-->
    </th>
  `,
})
export class TheadToolslineRowComponent implements OnChanges {

  @Input() grid: Grid;
  @Input() isAllSelected: boolean;
  @Input() source: DataSource;

  @Output() sort = new EventEmitter<any>();
  @Output() selectAllRows = new EventEmitter<any>();

  isMultiSelectVisible: boolean;
  showActionColumnLeft: boolean;
  showActionColumnRight: boolean;

  colsNum: number;
  toolsbars: Array<any>;

  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.showActionColumnRight = this.grid.showActionColumn('right');
    this.colsNum = this.grid.getColumns().length;
    console.log("一共有【"+this.colsNum+"】个列----begin:");
    console.dir(this.grid.getColumns());
    console.log("查看列完毕----end.");

    this.toolsbars = this.grid.getToolslineObj();
  }

}
