import { Component, Input } from '@angular/core';

import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';

@Component({
  selector: 'ng2-smart-table-title',
  styles: [require('./title.scss')],
  template: `
    <a href="#"
    *ngIf="column.isSortable"
    (click)="sort($event, column)" 
    class="ng2-smart-sort-link sort"
    [ngClass]="currentDirection">
      {{ column.title }}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `
})
export class TitleComponent {

  @Input() column: Column;
  @Input() source: DataSource;

  protected currentDirection = '';

  ngOnInit(): void {
    this.source.onChanged().subscribe((elements) => {
      let sortConf = this.source.getSort();

      if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
        this.currentDirection = sortConf[0]['direction'];
      } else {
        this.currentDirection = '';
      }

      sortConf.forEach((fieldConf) => {

      });
    });
  }

  sort(): boolean {
    this.changeSortDirection();
    this.source.setSort([
      {
        field: this.column.id,
        direction: this.currentDirection,
        compare: this.column.getCompareFunction()
      }
    ]);
    return false;
  }

  changeSortDirection(): string {
    if (this.currentDirection) {
      let newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
      this.currentDirection = newDirection;
    } else {
      this.currentDirection = this.column.sortDirection;
    }
    return this.currentDirection;
  }
}
