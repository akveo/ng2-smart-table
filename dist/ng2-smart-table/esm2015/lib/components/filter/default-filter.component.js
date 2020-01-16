import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FilterDefault } from "./filter-default";
let DefaultFilterComponent = class DefaultFilterComponent extends FilterDefault {
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], DefaultFilterComponent.prototype, "query", void 0);
DefaultFilterComponent = tslib_1.__decorate([
    Component({
        selector: 'default-table-filter',
        template: `
    <ng-container [ngSwitch]="column.getFilterType()">
      <select-filter *ngSwitchCase="'list'"
                     [query]="query"
                     [ngClass]="inputClass"
                     [column]="column"
                     (filter)="onFilter($event)">
      </select-filter>
      <checkbox-filter *ngSwitchCase="'checkbox'"
                       [query]="query"
                       [ngClass]="inputClass"
                       [column]="column"
                       (filter)="onFilter($event)">
      </checkbox-filter>
      <completer-filter *ngSwitchCase="'completer'"
                        [query]="query"
                        [ngClass]="inputClass"
                        [column]="column"
                        (filter)="onFilter($event)">
      </completer-filter>
      <input-filter *ngSwitchDefault
                    [query]="query"
                    [ngClass]="inputClass"
                    [column]="column"
                    (filter)="onFilter($event)">
      </input-filter>
    </ng-container>
  `
    })
], DefaultFilterComponent);
export { DefaultFilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmlsdGVyL2RlZmF1bHQtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBaUMvQyxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUF1QixTQUFRLGFBQWE7Q0FFeEQsQ0FBQTtBQURVO0lBQVIsS0FBSyxFQUFFOztxREFBZTtBQURaLHNCQUFzQjtJQS9CbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCVDtLQUNGLENBQUM7R0FDVyxzQkFBc0IsQ0FFbEM7U0FGWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtGaWx0ZXJEZWZhdWx0fSBmcm9tIFwiLi9maWx0ZXItZGVmYXVsdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkZWZhdWx0LXRhYmxlLWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImNvbHVtbi5nZXRGaWx0ZXJUeXBlKClcIj5cclxuICAgICAgPHNlbGVjdC1maWx0ZXIgKm5nU3dpdGNoQ2FzZT1cIidsaXN0J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxyXG4gICAgICA8L3NlbGVjdC1maWx0ZXI+XHJcbiAgICAgIDxjaGVja2JveC1maWx0ZXIgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxyXG4gICAgICA8L2NoZWNrYm94LWZpbHRlcj5cclxuICAgICAgPGNvbXBsZXRlci1maWx0ZXIgKm5nU3dpdGNoQ2FzZT1cIidjb21wbGV0ZXInXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCI+XHJcbiAgICAgIDwvY29tcGxldGVyLWZpbHRlcj5cclxuICAgICAgPGlucHV0LWZpbHRlciAqbmdTd2l0Y2hEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCI+XHJcbiAgICAgIDwvaW5wdXQtZmlsdGVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIERlZmF1bHRGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBGaWx0ZXJEZWZhdWx0IHtcclxuICBASW5wdXQoKSBxdWVyeTogc3RyaW5nO1xyXG59XHJcbiJdfQ==