import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FilterDefault } from './filter-default';
let FilterComponent = class FilterComponent extends FilterDefault {
    constructor() {
        super(...arguments);
        this.query = '';
    }
    ngOnChanges(changes) {
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
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach((k, v) => {
                        if (k.field == this.column.id) {
                            this.query = k.search;
                        }
                    });
                }
            });
        }
    }
};
FilterComponent = tslib_1.__decorate([
    Component({
        selector: 'ng2-smart-table-filter',
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
        styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}"]
    })
], FilterComponent);
export { FilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUF5QmpELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWdCLFNBQVEsYUFBYTtJQXRCbEQ7O1FBdUJFLFVBQUssR0FBVyxFQUFFLENBQUM7SUF5QnJCLENBQUM7SUF0QkMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3RFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNDLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFFaEIsa0ZBQWtGO29CQUNsRixzR0FBc0c7aUJBQ3ZHO3FCQUFNLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUM1RSxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTt3QkFDNUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFOzRCQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7eUJBQ3ZCO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRixDQUFBO0FBMUJZLGVBQWU7SUF0QjNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx3QkFBd0I7UUFFbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCUDs7S0FDSixDQUFDO0dBQ1csZUFBZSxDQTBCM0I7U0ExQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbHRlckRlZmF1bHQgfSBmcm9tICcuL2ZpbHRlci1kZWZhdWx0JztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZS1maWx0ZXInLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbHRlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuZzItc21hcnQtZmlsdGVyXCIgKm5nSWY9XCJjb2x1bW4uaXNGaWx0ZXJhYmxlXCIgW25nU3dpdGNoXT1cImNvbHVtbi5nZXRGaWx0ZXJUeXBlKClcIj5cclxuICAgICAgICA8Y3VzdG9tLXRhYmxlLWZpbHRlciAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIj5cclxuICAgICAgICA8L2N1c3RvbS10YWJsZS1maWx0ZXI+XHJcbiAgICAgICAgPGRlZmF1bHQtdGFibGUtZmlsdGVyICpuZ1N3aXRjaERlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIj5cclxuICAgICAgICA8L2RlZmF1bHQtdGFibGUtZmlsdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBGaWx0ZXJEZWZhdWx0IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBxdWVyeTogc3RyaW5nID0gJyc7XHJcbiAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkU3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLnNvdXJjZSkge1xyXG4gICAgICBpZiAoIWNoYW5nZXMuc291cmNlLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIgPSB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoKGRhdGFDaGFuZ2VzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyQ29uZiA9IHRoaXMuc291cmNlLmdldEZpbHRlcigpO1xyXG4gICAgICAgIGlmIChmaWx0ZXJDb25mICYmIGZpbHRlckNvbmYuZmlsdGVycyAmJiBmaWx0ZXJDb25mLmZpbHRlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnF1ZXJ5ID0gJyc7XHJcblxyXG4gICAgICAgICAgLy8gYWRkIGEgY2hlY2sgZm9yIGV4aXN0aW5nIGZpbHRlcnMgYW4gc2V0IHRoZSBxdWVyeSBpZiBvbmUgZXhpc3RzIGZvciB0aGlzIGNvbHVtblxyXG4gICAgICAgICAgLy8gdGhpcyBjb3ZlcnMgaW5zdGFuY2VzIHdoZXJlIHRoZSBmaWx0ZXIgaXMgc2V0IGJ5IHVzZXIgY29kZSB3aGlsZSBtYWludGFpbmluZyBleGlzdGluZyBmdW5jdGlvbmFsaXR5XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJDb25mICYmIGZpbHRlckNvbmYuZmlsdGVycyAmJiBmaWx0ZXJDb25mLmZpbHRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZmlsdGVyQ29uZi5maWx0ZXJzLmZvckVhY2goKGs6IGFueSwgdjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChrLmZpZWxkID09IHRoaXMuY29sdW1uLmlkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5xdWVyeSA9IGsuc2VhcmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=