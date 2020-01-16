import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CompleterService } from 'ng2-completer';
import { DefaultEditor } from './default-editor';
let CompleterEditorComponent = class CompleterEditorComponent extends DefaultEditor {
    constructor(completerService) {
        super();
        this.completerService = completerService;
        this.completerStr = '';
    }
    ngOnInit() {
        if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
            const config = this.cell.getColumn().getConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
        }
    }
    onEditedCompleter(event) {
        this.cell.newValue = event.title;
        return false;
    }
};
CompleterEditorComponent = tslib_1.__decorate([
    Component({
        selector: 'completer-editor',
        template: `
    <ng2-completer [(ngModel)]="completerStr"
                   [dataService]="cell.getColumn().getConfig().completer.dataService"
                   [minSearchLength]="cell.getColumn().getConfig().completer.minSearchLength || 0"
                   [pause]="cell.getColumn().getConfig().completer.pause || 0"
                   [placeholder]="cell.getColumn().getConfig().completer.placeholder || 'Start typing...'"
                   (selected)="onEditedCompleter($event)">
    </ng2-completer>
    `
    }),
    tslib_1.__metadata("design:paramtypes", [CompleterService])
], CompleterEditorComponent);
export { CompleterEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9jb21wbGV0ZXItZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBY2pELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXlCLFNBQVEsYUFBYTtJQUl6RCxZQUFvQixnQkFBa0M7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFEVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRnRELGlCQUFZLEdBQVcsRUFBRSxDQUFDO0lBSTFCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO1lBQ3JGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQzNELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RHLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBb0I7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNqQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRixDQUFBO0FBcEJZLHdCQUF3QjtJQVpwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7S0FRUDtLQUNKLENBQUM7NkNBS3NDLGdCQUFnQjtHQUozQyx3QkFBd0IsQ0FvQnBDO1NBcEJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBsZXRlclNlcnZpY2UgfSBmcm9tICduZzItY29tcGxldGVyJztcclxuXHJcbmltcG9ydCB7IERlZmF1bHRFZGl0b3IgfSBmcm9tICcuL2RlZmF1bHQtZWRpdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29tcGxldGVyLWVkaXRvcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZzItY29tcGxldGVyIFsobmdNb2RlbCldPVwiY29tcGxldGVyU3RyXCJcclxuICAgICAgICAgICAgICAgICAgIFtkYXRhU2VydmljZV09XCJjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmNvbXBsZXRlci5kYXRhU2VydmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbbWluU2VhcmNoTGVuZ3RoXT1cImNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkuY29tcGxldGVyLm1pblNlYXJjaExlbmd0aCB8fCAwXCJcclxuICAgICAgICAgICAgICAgICAgIFtwYXVzZV09XCJjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmNvbXBsZXRlci5wYXVzZSB8fCAwXCJcclxuICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmNvbXBsZXRlci5wbGFjZWhvbGRlciB8fCAnU3RhcnQgdHlwaW5nLi4uJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWQpPVwib25FZGl0ZWRDb21wbGV0ZXIoJGV2ZW50KVwiPlxyXG4gICAgPC9uZzItY29tcGxldGVyPlxyXG4gICAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBsZXRlckVkaXRvckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRFZGl0b3IgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb21wbGV0ZXJTdHI6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBsZXRlclNlcnZpY2U6IENvbXBsZXRlclNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZWRpdG9yICYmIHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5lZGl0b3IudHlwZSA9PT0gJ2NvbXBsZXRlcicpIHtcclxuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmNvbXBsZXRlcjtcclxuICAgICAgY29uZmlnLmRhdGFTZXJ2aWNlID0gdGhpcy5jb21wbGV0ZXJTZXJ2aWNlLmxvY2FsKGNvbmZpZy5kYXRhLCBjb25maWcuc2VhcmNoRmllbGRzLCBjb25maWcudGl0bGVGaWVsZCk7XHJcbiAgICAgIGNvbmZpZy5kYXRhU2VydmljZS5kZXNjcmlwdGlvbkZpZWxkKGNvbmZpZy5kZXNjcmlwdGlvbkZpZWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRWRpdGVkQ29tcGxldGVyKGV2ZW50OiB7IHRpdGxlOiAnJyB9KTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmNlbGwubmV3VmFsdWUgPSBldmVudC50aXRsZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19