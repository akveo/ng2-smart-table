import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CompleterService } from 'ng2-completer';
import { DefaultEditor } from './default-editor';
var CompleterEditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CompleterEditorComponent, _super);
    function CompleterEditorComponent(completerService) {
        var _this = _super.call(this) || this;
        _this.completerService = completerService;
        _this.completerStr = '';
        return _this;
    }
    CompleterEditorComponent.prototype.ngOnInit = function () {
        if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
            var config = this.cell.getColumn().getConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
        }
    };
    CompleterEditorComponent.prototype.onEditedCompleter = function (event) {
        this.cell.newValue = event.title;
        return false;
    };
    CompleterEditorComponent = tslib_1.__decorate([
        Component({
            selector: 'completer-editor',
            template: "\n    <ng2-completer [(ngModel)]=\"completerStr\"\n                   [dataService]=\"cell.getColumn().getConfig().completer.dataService\"\n                   [minSearchLength]=\"cell.getColumn().getConfig().completer.minSearchLength || 0\"\n                   [pause]=\"cell.getColumn().getConfig().completer.pause || 0\"\n                   [placeholder]=\"cell.getColumn().getConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"onEditedCompleter($event)\">\n    </ng2-completer>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [CompleterService])
    ], CompleterEditorComponent);
    return CompleterEditorComponent;
}(DefaultEditor));
export { CompleterEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9jb21wbGV0ZXItZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBY2pEO0lBQThDLG9EQUFhO0lBSXpELGtDQUFvQixnQkFBa0M7UUFBdEQsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGdEQsa0JBQVksR0FBVyxFQUFFLENBQUM7O0lBSTFCLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO1lBQ3JGLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQzNELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RHLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRUQsb0RBQWlCLEdBQWpCLFVBQWtCLEtBQW9CO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBbkJVLHdCQUF3QjtRQVpwQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSw0Z0JBUVA7U0FDSixDQUFDO2lEQUtzQyxnQkFBZ0I7T0FKM0Msd0JBQXdCLENBb0JwQztJQUFELCtCQUFDO0NBQUEsQUFwQkQsQ0FBOEMsYUFBYSxHQW9CMUQ7U0FwQlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcGxldGVyU2VydmljZSB9IGZyb20gJ25nMi1jb21wbGV0ZXInO1xyXG5cclxuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gJy4vZGVmYXVsdC1lZGl0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb21wbGV0ZXItZWRpdG9yJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nMi1jb21wbGV0ZXIgWyhuZ01vZGVsKV09XCJjb21wbGV0ZXJTdHJcIlxyXG4gICAgICAgICAgICAgICAgICAgW2RhdGFTZXJ2aWNlXT1cImNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkuY29tcGxldGVyLmRhdGFTZXJ2aWNlXCJcclxuICAgICAgICAgICAgICAgICAgIFttaW5TZWFyY2hMZW5ndGhdPVwiY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKS5jb21wbGV0ZXIubWluU2VhcmNoTGVuZ3RoIHx8IDBcIlxyXG4gICAgICAgICAgICAgICAgICAgW3BhdXNlXT1cImNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkuY29tcGxldGVyLnBhdXNlIHx8IDBcIlxyXG4gICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkuY29tcGxldGVyLnBsYWNlaG9sZGVyIHx8ICdTdGFydCB0eXBpbmcuLi4nXCJcclxuICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZCk9XCJvbkVkaXRlZENvbXBsZXRlcigkZXZlbnQpXCI+XHJcbiAgICA8L25nMi1jb21wbGV0ZXI+XHJcbiAgICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcGxldGVyRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEVkaXRvciBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbXBsZXRlclN0cjogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGxldGVyU2VydmljZTogQ29tcGxldGVyU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5lZGl0b3IgJiYgdGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvci50eXBlID09PSAnY29tcGxldGVyJykge1xyXG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkuY29tcGxldGVyO1xyXG4gICAgICBjb25maWcuZGF0YVNlcnZpY2UgPSB0aGlzLmNvbXBsZXRlclNlcnZpY2UubG9jYWwoY29uZmlnLmRhdGEsIGNvbmZpZy5zZWFyY2hGaWVsZHMsIGNvbmZpZy50aXRsZUZpZWxkKTtcclxuICAgICAgY29uZmlnLmRhdGFTZXJ2aWNlLmRlc2NyaXB0aW9uRmllbGQoY29uZmlnLmRlc2NyaXB0aW9uRmllbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FZGl0ZWRDb21wbGV0ZXIoZXZlbnQ6IHsgdGl0bGU6ICcnIH0pOiBib29sZWFuIHtcclxuICAgIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IGV2ZW50LnRpdGxlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=