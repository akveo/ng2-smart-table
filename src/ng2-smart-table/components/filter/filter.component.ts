import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FilterDefault } from './filter-default';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ng2-smart-table-filter',
  styleUrls: ['./filter.component.scss'],
  template: `
      <div class="ng2-smart-filter" *ngIf="column.isFilterable" [ngSwitch]="column.getFilterType()">
        <custom-table-filter *ngSwitchCase="'custom'"
                             [query]="query"
                             [column]="column"
                             [source]="source"
                             [inputClass]="inputClass"
                             (filter)="onFilter($event)">
        </custom-table-filter>
        <default-table-filter *ngSwitchDefault
                              [query]="query"
                              [column]="column"
                              [source]="source"
                              [inputClass]="inputClass"
                              (filter)="onFilter($event)">
        </default-table-filter>
      </div>
    `,
})
export class FilterComponent extends FilterDefault implements OnChanges {
  query: string = '';
  protected dataChangedSub: Subscription;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.source) {
      if (!changes.source.firstChange) {
        this.dataChangedSub.unsubscribe();
      }
      this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
        const filterConf = this.source.getFilter();
        if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
          this.query = '';

          // add a check for existing filters an set the query if one exists for this column
          // this covers instances where the filter is set by user code while maintaining existing functionality
        } else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
          filterConf.filters.forEach((k: any, v: any) => {
            if (k.field == this.column.id) {
              this.query = k.search;
            }
          });
        }
      });
    }
  }
}
