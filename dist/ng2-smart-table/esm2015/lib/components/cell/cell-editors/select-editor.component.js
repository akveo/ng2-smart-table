import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
let SelectEditorComponent = class SelectEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
};
SelectEditorComponent = tslib_1.__decorate([
    Component({
        selector: 'select-editor',
        template: `
    <select [ngClass]="inputClass"
            class="form-control"
            [(ngModel)]="cell.newValue"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            (click)="onClick.emit($event)"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">

        <option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                [selected]="option.value === cell.getValue()">{{ option.title }}
        </option>
    </select>
    `
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SelectEditorComponent);
export { SelectEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9zZWxlY3QtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFvQmpELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEsYUFBYTtJQUV0RDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztDQUNGLENBQUE7QUFMWSxxQkFBcUI7SUFsQmpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7S0FjUDtLQUNKLENBQUM7O0dBQ1cscUJBQXFCLENBS2pDO1NBTFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEZWZhdWx0RWRpdG9yIH0gZnJvbSAnLi9kZWZhdWx0LWVkaXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlbGVjdC1lZGl0b3InLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8c2VsZWN0IFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXHJcbiAgICAgICAgICAgIFtuYW1lXT1cImNlbGwuZ2V0SWQoKVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhY2VsbC5pc0VkaXRhYmxlKClcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJvbkVkaXRlZC5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAoa2V5ZG93bi5lc2MpPVwib25TdG9wRWRpdGluZy5lbWl0KClcIj5cclxuXHJcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCk/Lmxpc3RcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJvcHRpb24udmFsdWUgPT09IGNlbGwuZ2V0VmFsdWUoKVwiPnt7IG9wdGlvbi50aXRsZSB9fVxyXG4gICAgICAgIDwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0RWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEVkaXRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbn1cclxuIl19