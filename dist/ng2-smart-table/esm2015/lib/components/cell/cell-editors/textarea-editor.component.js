import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
let TextareaEditorComponent = class TextareaEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
};
TextareaEditorComponent = tslib_1.__decorate([
    Component({
        selector: 'textarea-editor',
        template: `
    <textarea [ngClass]="inputClass"
              class="form-control"
              [(ngModel)]="cell.newValue"
              [name]="cell.getId()"
              [disabled]="!cell.isEditable()"
              [placeholder]="cell.getTitle()"
              (click)="onClick.emit($event)"
              (keydown.enter)="onEdited.emit($event)"
              (keydown.esc)="onStopEditing.emit()">
    </textarea>
    `,
        styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TextareaEditorComponent);
export { TextareaEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL3RleHRhcmVhLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBa0JqRCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF3QixTQUFRLGFBQWE7SUFFeEQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7Q0FDRixDQUFBO0FBTFksdUJBQXVCO0lBaEJuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBRTNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7S0FXUDs7S0FDSixDQUFDOztHQUNXLHVCQUF1QixDQUtuQztTQUxZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gJy4vZGVmYXVsdC1lZGl0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYS1lZGl0b3InLFxyXG4gIHN0eWxlVXJsczogWycuL2VkaXRvci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8dGV4dGFyZWEgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgW25hbWVdPVwiY2VsbC5nZXRJZCgpXCJcclxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWNlbGwuaXNFZGl0YWJsZSgpXCJcclxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY2VsbC5nZXRUaXRsZSgpXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cIm9uRWRpdGVkLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgKGtleWRvd24uZXNjKT1cIm9uU3RvcEVkaXRpbmcuZW1pdCgpXCI+XHJcbiAgICA8L3RleHRhcmVhPlxyXG4gICAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEVkaXRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbn1cclxuIl19