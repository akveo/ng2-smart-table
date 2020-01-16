import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, skip } from 'rxjs/operators';
import { DefaultFilter } from './default-filter';
var SelectFilterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectFilterComponent, _super);
    function SelectFilterComponent() {
        return _super.call(this) || this;
    }
    SelectFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges
            .pipe(skip(1), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe(function (value) { return _this.setFilter(); });
    };
    tslib_1.__decorate([
        ViewChild('inputControl', { read: NgControl, static: true }),
        tslib_1.__metadata("design:type", NgControl)
    ], SelectFilterComponent.prototype, "inputControl", void 0);
    SelectFilterComponent = tslib_1.__decorate([
        Component({
            selector: 'select-filter',
            template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            #inputControl\n            [(ngModel)]=\"query\">\n\n        <option value=\"\">{{ column.getFilterConfig().selectText }}</option>\n        <option *ngFor=\"let option of column.getFilterConfig().list\" [value]=\"option.value\">\n          {{ option.title }}\n        </option>\n    </select>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SelectFilterComponent);
    return SelectFilterComponent;
}(DefaultFilter));
export { SelectFilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFpQmpEO0lBQTJDLGlEQUFhO0lBSXREO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZO2FBQzNCLElBQUksQ0FDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1Asb0JBQW9CLEVBQUUsRUFDdEIsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDekI7YUFDQSxTQUFTLENBQUMsVUFBQyxLQUFhLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBZDZEO1FBQTdELFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzswQ0FBZSxTQUFTOytEQUFDO0lBRjNFLHFCQUFxQjtRQWZqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsa1lBV1Q7U0FDRixDQUFDOztPQUNXLHFCQUFxQixDQWlCakM7SUFBRCw0QkFBQztDQUFBLEFBakJELENBQTJDLGFBQWEsR0FpQnZEO1NBakJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZGVib3VuY2VUaW1lLCBza2lwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgRGVmYXVsdEZpbHRlciB9IGZyb20gJy4vZGVmYXVsdC1maWx0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZWxlY3QtZmlsdGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNlbGVjdCBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAjaW5wdXRDb250cm9sXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwicXVlcnlcIj5cclxuXHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPnt7IGNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5zZWxlY3RUZXh0IH19PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5saXN0XCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPlxyXG4gICAgICAgICAge3sgb3B0aW9uLnRpdGxlIH19XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0RmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0Q29udHJvbCcsIHsgcmVhZDogTmdDb250cm9sLCBzdGF0aWM6IHRydWUgfSkgaW5wdXRDb250cm9sOiBOZ0NvbnRyb2w7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnB1dENvbnRyb2wudmFsdWVDaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHNraXAoMSksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWxheSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB0aGlzLnNldEZpbHRlcigpKTtcclxuICB9XHJcbn1cclxuIl19