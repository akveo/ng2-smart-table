import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {FilterDefault} from './filter-default';
import {Subscription} from 'rxjs';

@Component({
    selector: 'angular2-smart-table-filter',
    styleUrls: ['./filter.component.scss'],
    template: `
      <div class="angular2-smart-filter" *ngIf="column.isFilterable" [ngSwitch]="column.filter.type">
        <custom-table-filter *ngSwitchCase="'custom'"
                             [query]="query"
                             [column]="column"
                             [source]="source"
                             [inputClass]="inputClass"
                             [debounceTime]="debounceTime"
        ></custom-table-filter>
        <default-table-filter *ngSwitchDefault
                              [query]="query"
                              [column]="column"
                              [source]="source"
                              [inputClass]="inputClass"
                              [debounceTime]="debounceTime"
        ></default-table-filter>
      </div>
    `,
    standalone: false
})
export class FilterComponent extends FilterDefault implements OnChanges {
  query: string = '';
  protected dataChangedSub!: Subscription;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.source) {
      if (!changes.source.firstChange) {
        this.dataChangedSub.unsubscribe();
      }
      this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
        let newQuery = '';
        for (const f of dataChanges.filter) {
          if (f.field == this.column.id) {
            newQuery = f.search;
            break;
          }
        }
        this.query = newQuery;
      });
    }
  }
}
