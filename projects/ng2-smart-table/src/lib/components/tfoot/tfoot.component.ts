import { Component, Input, OnInit } from '@angular/core';
import { DataSource } from '../../lib/data-source/data-source';
import { Grid } from '../../lib/grid';

@Component({
  selector: '[ng2-st-tfoot]',
  templateUrl: './tfoot.component.html',
  styleUrls: ['./tfoot.component.scss']
})
export class TfootComponent implements OnInit {
  @Input() source: DataSource;
  @Input() grid: Grid;
  public isMultiSelectVisible: boolean;
  public showActionColumnLeft: boolean;
  constructor() { }


  ngOnInit(): void {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
  }
}
