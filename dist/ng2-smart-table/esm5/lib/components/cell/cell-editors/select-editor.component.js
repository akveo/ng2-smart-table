import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
var SelectEditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectEditorComponent, _super);
    function SelectEditorComponent() {
        return _super.call(this) || this;
    }
    SelectEditorComponent = tslib_1.__decorate([
        Component({
            selector: 'select-editor',
            template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"cell.newValue\"\n            [name]=\"cell.getId()\"\n            [disabled]=\"!cell.isEditable()\"\n            (click)=\"onClick.emit($event)\"\n            (keydown.enter)=\"onEdited.emit($event)\"\n            (keydown.esc)=\"onStopEditing.emit()\">\n\n        <option *ngFor=\"let option of cell.getColumn().getConfig()?.list\" [value]=\"option.value\"\n                [selected]=\"option.value === cell.getValue()\">{{ option.title }}\n        </option>\n    </select>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SelectEditorComponent);
    return SelectEditorComponent;
}(DefaultEditor));
export { SelectEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9zZWxlY3QtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFvQmpEO0lBQTJDLGlEQUFhO0lBRXREO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBSlUscUJBQXFCO1FBbEJqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUseWtCQWNQO1NBQ0osQ0FBQzs7T0FDVyxxQkFBcUIsQ0FLakM7SUFBRCw0QkFBQztDQUFBLEFBTEQsQ0FBMkMsYUFBYSxHQUt2RDtTQUxZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gJy4vZGVmYXVsdC1lZGl0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZWxlY3QtZWRpdG9yJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNlbGVjdCBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxyXG4gICAgICAgICAgICBbbmFtZV09XCJjZWxsLmdldElkKClcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWNlbGwuaXNFZGl0YWJsZSgpXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwib25FZGl0ZWQuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKGtleWRvd24uZXNjKT1cIm9uU3RvcEVkaXRpbmcuZW1pdCgpXCI+XHJcblxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpPy5saXN0XCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwib3B0aW9uLnZhbHVlID09PSBjZWxsLmdldFZhbHVlKClcIj57eyBvcHRpb24udGl0bGUgfX1cclxuICAgICAgICA8L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gICAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdEVkaXRvckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRFZGl0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==