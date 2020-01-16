import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, skip } from 'rxjs/operators';
import { DefaultFilter } from './default-filter';
let SelectFilterComponent = class SelectFilterComponent extends DefaultFilter {
    constructor() {
        super();
    }
    ngOnInit() {
        this.inputControl.valueChanges
            .pipe(skip(1), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe((value) => this.setFilter());
    }
};
tslib_1.__decorate([
    ViewChild('inputControl', { read: NgControl, static: true }),
    tslib_1.__metadata("design:type", NgControl)
], SelectFilterComponent.prototype, "inputControl", void 0);
SelectFilterComponent = tslib_1.__decorate([
    Component({
        selector: 'select-filter',
        template: `
    <select [ngClass]="inputClass"
            class="form-control"
            #inputControl
            [(ngModel)]="query">

        <option value="">{{ column.getFilterConfig().selectText }}</option>
        <option *ngFor="let option of column.getFilterConfig().list" [value]="option.value">
          {{ option.title }}
        </option>
    </select>
  `
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SelectFilterComponent);
export { SelectFilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFpQmpELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEsYUFBYTtJQUl0RDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVk7YUFDM0IsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxvQkFBb0IsRUFBRSxFQUN0QixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGLENBQUE7QUFmK0Q7SUFBN0QsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO3NDQUFlLFNBQVM7MkRBQUM7QUFGM0UscUJBQXFCO0lBZmpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtLQUNGLENBQUM7O0dBQ1cscUJBQXFCLENBaUJqQztTQWpCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGRlYm91bmNlVGltZSwgc2tpcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IERlZmF1bHRGaWx0ZXIgfSBmcm9tICcuL2RlZmF1bHQtZmlsdGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2VsZWN0LWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzZWxlY3QgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgI2lucHV0Q29udHJvbFxyXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cInF1ZXJ5XCI+XHJcblxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj57eyBjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuc2VsZWN0VGV4dCB9fTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkubGlzdFwiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj5cclxuICAgICAgICAgIHt7IG9wdGlvbi50aXRsZSB9fVxyXG4gICAgICAgIDwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdEZpbHRlckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGaWx0ZXIgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdpbnB1dENvbnRyb2wnLCB7IHJlYWQ6IE5nQ29udHJvbCwgc3RhdGljOiB0cnVlIH0pIGlucHV0Q29udHJvbDogTmdDb250cm9sO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5wdXRDb250cm9sLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBza2lwKDEpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVsYXkpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4gdGhpcy5zZXRGaWx0ZXIoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==