import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DefaultFilter } from './default-filter';
let InputFilterComponent = class InputFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.inputControl = new FormControl();
    }
    ngOnInit() {
        if (this.query) {
            this.inputControl.setValue(this.query);
        }
        this.inputControl.valueChanges
            .pipe(distinctUntilChanged(), debounceTime(this.delay))
            .subscribe((value) => {
            this.query = this.inputControl.value;
            this.setFilter();
        });
    }
    ngOnChanges(changes) {
        if (changes.query) {
            this.inputControl.setValue(this.query);
        }
    }
};
InputFilterComponent = tslib_1.__decorate([
    Component({
        selector: 'input-filter',
        template: `
    <input
      [ngClass]="inputClass"
      [formControl]="inputControl"
      class="form-control"
      type="text"
      placeholder="{{ column.title }}"/>
  `
    }),
    tslib_1.__metadata("design:paramtypes", [])
], InputFilterComponent);
export { InputFilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXItdHlwZXMvaW5wdXQtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQVEsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFhakQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBcUIsU0FBUSxhQUFhO0lBSXJEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFIVixpQkFBWSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7SUFJakMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVk7YUFDM0IsSUFBSSxDQUNILG9CQUFvQixFQUFFLEVBQ3RCLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQTVCWSxvQkFBb0I7SUFYaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7S0FDRixDQUFDOztHQUNXLG9CQUFvQixDQTRCaEM7U0E1Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc2tpcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IERlZmF1bHRGaWx0ZXIgfSBmcm9tICcuL2RlZmF1bHQtZmlsdGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW5wdXQtZmlsdGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGlucHV0XHJcbiAgICAgIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxyXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiaW5wdXRDb250cm9sXCJcclxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwie3sgY29sdW1uLnRpdGxlIH19XCIvPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEZpbHRlckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGaWx0ZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIGlucHV0Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnF1ZXJ5KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKHRoaXMucXVlcnkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbnB1dENvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVsYXkpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5pbnB1dENvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRGaWx0ZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5xdWVyeSkge1xyXG4gICAgICB0aGlzLmlucHV0Q29udHJvbC5zZXRWYWx1ZSh0aGlzLnF1ZXJ5KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19