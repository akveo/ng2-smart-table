import * as tslib_1 from "tslib";
import { Output, EventEmitter, Input } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
var DefaultEditor = /** @class */ (function () {
    function DefaultEditor() {
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Cell)
    ], DefaultEditor.prototype, "cell", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], DefaultEditor.prototype, "inputClass", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], DefaultEditor.prototype, "onStopEditing", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], DefaultEditor.prototype, "onEdited", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], DefaultEditor.prototype, "onClick", void 0);
    return DefaultEditor;
}());
export { DefaultEditor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lZGl0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9kZWZhdWx0LWVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFhLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVsRDtJQUFBO1FBSVksa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25DLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQzlDLENBQUM7SUFOVTtRQUFSLEtBQUssRUFBRTswQ0FBTyxJQUFJOytDQUFDO0lBQ1g7UUFBUixLQUFLLEVBQUU7O3FEQUFvQjtJQUVsQjtRQUFULE1BQU0sRUFBRTs7d0RBQXlDO0lBQ3hDO1FBQVQsTUFBTSxFQUFFOzttREFBb0M7SUFDbkM7UUFBVCxNQUFNLEVBQUU7O2tEQUFtQztJQUM5QyxvQkFBQztDQUFBLEFBUEQsSUFPQztTQVBZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RWRpdG9yIGltcGxlbWVudHMgRWRpdG9yIHtcclxuICBASW5wdXQoKSBjZWxsOiBDZWxsO1xyXG4gIEBJbnB1dCgpIGlucHV0Q2xhc3M6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIG9uU3RvcEVkaXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25FZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRvciB7XHJcbiAgY2VsbDogQ2VsbDtcclxuICBpbnB1dENsYXNzOiBzdHJpbmc7XHJcbiAgb25TdG9wRWRpdGluZzogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgb25FZGl0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG59XHJcbiJdfQ==