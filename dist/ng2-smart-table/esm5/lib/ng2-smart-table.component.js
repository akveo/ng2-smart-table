import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
var Ng2SmartTableComponent = /** @class */ (function () {
    function Ng2SmartTableComponent() {
        this.settings = {};
        this.rowSelect = new EventEmitter();
        this.userRowSelect = new EventEmitter();
        this.delete = new EventEmitter();
        this.edit = new EventEmitter();
        this.create = new EventEmitter();
        this.custom = new EventEmitter();
        this.deleteConfirm = new EventEmitter();
        this.editConfirm = new EventEmitter();
        this.createConfirm = new EventEmitter();
        this.rowHover = new EventEmitter();
        this.onSortTable = new EventEmitter();
        this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',
            hideHeader: false,
            hideSubHeader: false,
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true,
                custom: [],
                position: 'left',
            },
            filter: {
                inputClass: '',
            },
            edit: {
                inputClass: '',
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                cancelButtonContent: 'Cancel',
                confirmSave: false,
            },
            add: {
                inputClass: '',
                addButtonContent: 'Add New',
                createButtonContent: 'Create',
                cancelButtonContent: 'Cancel',
                confirmCreate: false,
            },
            delete: {
                deleteButtonContent: 'Delete',
                confirmDelete: false,
            },
            attr: {
                id: '',
                class: '',
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
                display: true,
                perPage: 10,
            },
            rowClassFunction: function () { return ""; }
        };
        this.isAllSelected = false;
    }
    Ng2SmartTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
            }
        }
        else {
            this.initGrid();
        }
        this.tableId = this.grid.getSetting('attr.id');
        this.tableClass = this.grid.getSetting('attr.class');
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction');
    };
    Ng2SmartTableComponent.prototype.editRowSelect = function (row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    };
    Ng2SmartTableComponent.prototype.onUserSelectRow = function (row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    };
    Ng2SmartTableComponent.prototype.onRowHover = function (row) {
        this.rowHover.emit(row);
    };
    Ng2SmartTableComponent.prototype.multipleSelectRow = function (row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.onSelectAllRows = function ($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    };
    Ng2SmartTableComponent.prototype.onSelectRow = function (row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.onMultipleSelectRow = function (row) {
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.initGrid = function () {
        var _this = this;
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe(function (row) { return _this.emitSelectRow(row); });
    };
    Ng2SmartTableComponent.prototype.prepareSource = function () {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }
        return new LocalDataSource();
    };
    Ng2SmartTableComponent.prototype.prepareSettings = function () {
        return deepExtend({}, this.defaultSettings, this.settings);
    };
    Ng2SmartTableComponent.prototype.changePage = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.sort = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.filter = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.resetAllSelector = function () {
        this.isAllSelected = false;
    };
    Ng2SmartTableComponent.prototype.emitUserSelectRow = function (row) {
        var selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map(function (r) { return r.getData(); }) : [],
        });
    };
    Ng2SmartTableComponent.prototype.emitSelectRow = function (row) {
        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "settings", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "rowSelect", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "userRowSelect", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "delete", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "edit", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "create", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "custom", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "deleteConfirm", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "editConfirm", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "createConfirm", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], Ng2SmartTableComponent.prototype, "rowHover", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "onSortTable", void 0);
    Ng2SmartTableComponent = tslib_1.__decorate([
        Component({
            selector: 'ng2-smart-table',
            template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\r\n\r\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\r\n                      [grid]=\"grid\"\r\n                      [isAllSelected]=\"isAllSelected\"\r\n                      [source]=\"source\"\r\n                      [createConfirm]=\"createConfirm\"\r\n                      (create)=\"create.emit($event)\"\r\n                      (selectAllRows)=\"onSelectAllRows($event)\"\r\n                      (sort)=\"sort($event)\"\r\n                      (onSortTable)=\"onSortTable.emit($event)\"\r\n                      (filter)=\"filter($event)\">\r\n  </thead>\r\n\r\n  <tbody ng2-st-tbody [grid]=\"grid\"\r\n                      [source]=\"source\"\r\n                      [deleteConfirm]=\"deleteConfirm\"\r\n                      [editConfirm]=\"editConfirm\"\r\n                      [rowClassFunction]=\"rowClassFunction\"\r\n                      (edit)=\"edit.emit($event)\"\r\n                      (delete)=\"delete.emit($event)\"\r\n                      (custom)=\"custom.emit($event)\"\r\n                      (userSelectRow)=\"onUserSelectRow($event)\"\r\n                      (editRowSelect)=\"editRowSelect($event)\"\r\n                      (multipleSelectRow)=\"multipleSelectRow($event)\"\r\n                      (rowHover)=\"onRowHover($event)\">\r\n  </tbody>\r\n\r\n</table>\r\n\r\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\r\n                        [source]=\"source\"\r\n                        [perPageSelect]=\"perPageSelect\"\r\n                        (changePage)=\"changePage($event)\">\r\n</ng2-smart-table-pager>\r\n",
            styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}"]
        })
    ], Ng2SmartTableComponent);
    return Ng2SmartTableComponent;
}());
export { Ng2SmartTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWdCLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVoRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQU81RTtJQUxBO1FBUVcsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUVyQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQVloRCxvQkFBZSxHQUFXO1lBQ3hCLElBQUksRUFBRSxRQUFRO1lBQ2QsVUFBVSxFQUFFLFFBQVE7WUFDcEIs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YUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDNUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFoTVE7UUFBUixLQUFLLEVBQUU7OzBEQUFhO0lBQ1o7UUFBUixLQUFLLEVBQUU7MENBQVcsTUFBTTs0REFBTTtJQUVyQjtRQUFULE1BQU0sRUFBRTs7NkRBQXFDO0lBQ3BDO1FBQVQsTUFBTSxFQUFFOztpRUFBeUM7SUFDeEM7UUFBVCxNQUFNLEVBQUU7OzBEQUFrQztJQUNqQztRQUFULE1BQU0sRUFBRTs7d0RBQWdDO0lBQy9CO1FBQVQsTUFBTSxFQUFFOzswREFBa0M7SUFDakM7UUFBVCxNQUFNLEVBQUU7OzBEQUFrQztJQUNqQztRQUFULE1BQU0sRUFBRTs7aUVBQXlDO0lBQ3hDO1FBQVQsTUFBTSxFQUFFOzsrREFBdUM7SUFDdEM7UUFBVCxNQUFNLEVBQUU7O2lFQUF5QztJQUN4QztRQUFULE1BQU0sRUFBRTswQ0FBVyxZQUFZOzREQUFnQztJQUN0RDtRQUFULE1BQU0sRUFBRTs7K0RBQXVDO0lBZnJDLHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBRTNCLGluREFBK0M7O1NBQ2hELENBQUM7T0FDVyxzQkFBc0IsQ0FvTWxDO0lBQUQsNkJBQUM7Q0FBQSxBQXBNRCxJQW9NQztTQXBNWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZSwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2xpYi9ncmlkJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcclxuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi9saWIvZGF0YS1zZXQvcm93JztcclxuaW1wb3J0IHsgZGVlcEV4dGVuZCB9IGZyb20gJy4vbGliL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UgfSBmcm9tICcuL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5kYXRhLXNvdXJjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZScsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZzJTbWFydFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgc291cmNlOiBhbnk7XHJcbiAgQElucHV0KCkgc2V0dGluZ3M6IE9iamVjdCA9IHt9O1xyXG5cclxuICBAT3V0cHV0KCkgcm93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHVzZXJSb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGN1c3RvbSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBkZWxldGVDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGVkaXRDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGNyZWF0ZUNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcm93SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uU29ydFRhYmxlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgXHJcbiAgdGFibGVDbGFzczogc3RyaW5nO1xyXG4gIHRhYmxlSWQ6IHN0cmluZztcclxuICBwZXJQYWdlU2VsZWN0OiBhbnk7XHJcbiAgaXNIaWRlSGVhZGVyOiBib29sZWFuO1xyXG4gIGlzSGlkZVN1YkhlYWRlcjogYm9vbGVhbjtcclxuICBpc1BhZ2VyRGlzcGxheTogYm9vbGVhbjtcclxuICByb3dDbGFzc0Z1bmN0aW9uOiBGdW5jdGlvbjtcclxuXHJcblxyXG4gIGdyaWQ6IEdyaWQ7XHJcbiAgZGVmYXVsdFNldHRpbmdzOiBPYmplY3QgPSB7XHJcbiAgICBtb2RlOiAnaW5saW5lJywgLy8gaW5saW5lfGV4dGVybmFsfGNsaWNrLXRvLWVkaXRcclxuICAgIHNlbGVjdE1vZGU6ICdzaW5nbGUnLCAvLyBzaW5nbGV8bXVsdGlcclxuICAgIGhpZGVIZWFkZXI6IGZhbHNlLFxyXG4gICAgaGlkZVN1YkhlYWRlcjogZmFsc2UsXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIGNvbHVtblRpdGxlOiAnQWN0aW9ucycsXHJcbiAgICAgIGFkZDogdHJ1ZSxcclxuICAgICAgZWRpdDogdHJ1ZSxcclxuICAgICAgZGVsZXRlOiB0cnVlLFxyXG4gICAgICBjdXN0b206IFtdLFxyXG4gICAgICBwb3NpdGlvbjogJ2xlZnQnLCAvLyBsZWZ0fHJpZ2h0XHJcbiAgICB9LFxyXG4gICAgZmlsdGVyOiB7XHJcbiAgICAgIGlucHV0Q2xhc3M6ICcnLFxyXG4gICAgfSxcclxuICAgIGVkaXQ6IHtcclxuICAgICAgaW5wdXRDbGFzczogJycsXHJcbiAgICAgIGVkaXRCdXR0b25Db250ZW50OiAnRWRpdCcsXHJcbiAgICAgIHNhdmVCdXR0b25Db250ZW50OiAnVXBkYXRlJyxcclxuICAgICAgY2FuY2VsQnV0dG9uQ29udGVudDogJ0NhbmNlbCcsXHJcbiAgICAgIGNvbmZpcm1TYXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBhZGQ6IHtcclxuICAgICAgaW5wdXRDbGFzczogJycsXHJcbiAgICAgIGFkZEJ1dHRvbkNvbnRlbnQ6ICdBZGQgTmV3JyxcclxuICAgICAgY3JlYXRlQnV0dG9uQ29udGVudDogJ0NyZWF0ZScsXHJcbiAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICdDYW5jZWwnLFxyXG4gICAgICBjb25maXJtQ3JlYXRlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBkZWxldGU6IHtcclxuICAgICAgZGVsZXRlQnV0dG9uQ29udGVudDogJ0RlbGV0ZScsXHJcbiAgICAgIGNvbmZpcm1EZWxldGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGF0dHI6IHtcclxuICAgICAgaWQ6ICcnLFxyXG4gICAgICBjbGFzczogJycsXHJcbiAgICB9LFxyXG4gICAgbm9EYXRhTWVzc2FnZTogJ05vIGRhdGEgZm91bmQnLFxyXG4gICAgY29sdW1uczoge30sXHJcbiAgICBwYWdlcjoge1xyXG4gICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICBwZXJQYWdlOiAxMCxcclxuICAgIH0sXHJcbiAgICByb3dDbGFzc0Z1bmN0aW9uOiAoKSA9PiBcIlwiXHJcbiAgfTtcclxuXHJcbiAgaXNBbGxTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XHJcbiAgICBpZiAodGhpcy5ncmlkKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzWydzZXR0aW5ncyddKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkLnNldFNldHRpbmdzKHRoaXMucHJlcGFyZVNldHRpbmdzKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjaGFuZ2VzWydzb3VyY2UnXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5wcmVwYXJlU291cmNlKCk7XHJcbiAgICAgICAgdGhpcy5ncmlkLnNldFNvdXJjZSh0aGlzLnNvdXJjZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5pdEdyaWQoKTtcclxuICAgIH1cclxuICAgIHRoaXMudGFibGVJZCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhdHRyLmlkJyk7XHJcbiAgICB0aGlzLnRhYmxlQ2xhc3MgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYXR0ci5jbGFzcycpO1xyXG4gICAgdGhpcy5pc0hpZGVIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZUhlYWRlcicpO1xyXG4gICAgdGhpcy5pc0hpZGVTdWJIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZVN1YkhlYWRlcicpO1xyXG4gICAgdGhpcy5pc1BhZ2VyRGlzcGxheSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdwYWdlci5kaXNwbGF5Jyk7XHJcbiAgICB0aGlzLmlzUGFnZXJEaXNwbGF5ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ3BhZ2VyLmRpc3BsYXknKTtcclxuICAgIHRoaXMucGVyUGFnZVNlbGVjdCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdwYWdlci5wZXJQYWdlU2VsZWN0Jyk7XHJcbiAgICB0aGlzLnJvd0NsYXNzRnVuY3Rpb24gPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncm93Q2xhc3NGdW5jdGlvbicpO1xyXG4gIH1cclxuXHJcbiAgZWRpdFJvd1NlbGVjdChyb3c6IFJvdykge1xyXG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdzZWxlY3RNb2RlJykgPT09ICdtdWx0aScpIHtcclxuICAgICAgdGhpcy5vbk11bHRpcGxlU2VsZWN0Um93KHJvdyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uU2VsZWN0Um93KHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblVzZXJTZWxlY3RSb3cocm93OiBSb3cpIHtcclxuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnc2VsZWN0TW9kZScpICE9PSAnbXVsdGknKSB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zZWxlY3RSb3cocm93KTtcclxuICAgICAgdGhpcy5lbWl0VXNlclNlbGVjdFJvdyhyb3cpO1xyXG4gICAgICB0aGlzLmVtaXRTZWxlY3RSb3cocm93KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUm93SG92ZXIocm93OiBSb3cpIHtcclxuICAgIHRoaXMucm93SG92ZXIuZW1pdChyb3cpO1xyXG4gIH1cclxuXHJcbiAgbXVsdGlwbGVTZWxlY3RSb3cocm93OiBSb3cpIHtcclxuICAgIHRoaXMuZ3JpZC5tdWx0aXBsZVNlbGVjdFJvdyhyb3cpO1xyXG4gICAgdGhpcy5lbWl0VXNlclNlbGVjdFJvdyhyb3cpO1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdEFsbFJvd3MoJGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCA9ICF0aGlzLmlzQWxsU2VsZWN0ZWQ7XHJcbiAgICB0aGlzLmdyaWQuc2VsZWN0QWxsUm93cyh0aGlzLmlzQWxsU2VsZWN0ZWQpO1xyXG5cclxuICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cobnVsbCk7XHJcbiAgICB0aGlzLmVtaXRTZWxlY3RSb3cobnVsbCk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdFJvdyhyb3c6IFJvdykge1xyXG4gICAgdGhpcy5ncmlkLnNlbGVjdFJvdyhyb3cpO1xyXG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XHJcbiAgfVxyXG5cclxuICBvbk11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KSB7XHJcbiAgICB0aGlzLmVtaXRTZWxlY3RSb3cocm93KTtcclxuICB9XHJcblxyXG4gIGluaXRHcmlkKCkge1xyXG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLnByZXBhcmVTb3VyY2UoKTtcclxuICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKHRoaXMuc291cmNlLCB0aGlzLnByZXBhcmVTZXR0aW5ncygpKTtcclxuICAgIHRoaXMuZ3JpZC5vblNlbGVjdFJvdygpLnN1YnNjcmliZSgocm93KSA9PiB0aGlzLmVtaXRTZWxlY3RSb3cocm93KSk7XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlU291cmNlKCk6IERhdGFTb3VyY2Uge1xyXG4gICAgaWYgKHRoaXMuc291cmNlIGluc3RhbmNlb2YgRGF0YVNvdXJjZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2U7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgcmV0dXJuIG5ldyBMb2NhbERhdGFTb3VyY2UodGhpcy5zb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgTG9jYWxEYXRhU291cmNlKCk7XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlU2V0dGluZ3MoKTogT2JqZWN0IHtcclxuICAgIHJldHVybiBkZWVwRXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRTZXR0aW5ncywgdGhpcy5zZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYWdlKCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnJlc2V0QWxsU2VsZWN0b3IoKTtcclxuICB9XHJcblxyXG4gIHNvcnQoJGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMucmVzZXRBbGxTZWxlY3RvcigpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyKCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLnJlc2V0QWxsU2VsZWN0b3IoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRBbGxTZWxlY3RvcigpIHtcclxuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0VXNlclNlbGVjdFJvdyhyb3c6IFJvdykge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRSb3dzID0gdGhpcy5ncmlkLmdldFNlbGVjdGVkUm93cygpO1xyXG5cclxuICAgIHRoaXMudXNlclJvd1NlbGVjdC5lbWl0KHtcclxuICAgICAgZGF0YTogcm93ID8gcm93LmdldERhdGEoKSA6IG51bGwsXHJcbiAgICAgIGlzU2VsZWN0ZWQ6IHJvdyA/IHJvdy5nZXRJc1NlbGVjdGVkKCkgOiBudWxsLFxyXG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxyXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWRSb3dzICYmIHNlbGVjdGVkUm93cy5sZW5ndGggPyBzZWxlY3RlZFJvd3MubWFwKChyOiBSb3cpID0+IHIuZ2V0RGF0YSgpKSA6IFtdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVtaXRTZWxlY3RSb3cocm93OiBSb3cpIHtcclxuICAgIHRoaXMucm93U2VsZWN0LmVtaXQoe1xyXG4gICAgICBkYXRhOiByb3cgPyByb3cuZ2V0RGF0YSgpIDogbnVsbCxcclxuICAgICAgaXNTZWxlY3RlZDogcm93ID8gcm93LmdldElzU2VsZWN0ZWQoKSA6IG51bGwsXHJcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==