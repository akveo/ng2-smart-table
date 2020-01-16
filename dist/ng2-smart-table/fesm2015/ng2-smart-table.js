import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Input, Output, Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectionStrategy, NgModule, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { CompleterService, Ng2CompleterModule } from 'ng2-completer';
import { Subject } from 'rxjs';
import { cloneDeep } from 'lodash';
import { debounceTime, map, distinctUntilChanged, skip } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
const deepExtend = function (...objects) {
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    const target = arguments[0];
    // convert arguments to array and cut off target object
    const args = Array.prototype.slice.call(arguments, 1);
    let val, src;
    args.forEach((obj) => {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = cloneDeep(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object = {}, name, defaultValue) {
    const keys = name.split('.');
    // clone the object
    let level = deepExtend({}, object);
    keys.forEach((k) => {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}

function prepareValue(value) { return value; }
class Cell {
    constructor(value, row, column, dataSet) {
        this.value = value;
        this.row = row;
        this.column = column;
        this.dataSet = dataSet;
        this.newValue = '';
        this.newValue = value;
    }
    getColumn() {
        return this.column;
    }
    getRow() {
        return this.row;
    }
    getValue() {
        const valid = this.column.getValuePrepareFunction() instanceof Function;
        const prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
        return prepare.call(null, this.value, this.row.getData(), this);
    }
    setValue(value) {
        this.newValue = value;
    }
    getId() {
        return this.getColumn().id;
    }
    getTitle() {
        return this.getColumn().title;
    }
    isEditable() {
        if (this.getRow().index === -1) {
            return this.getColumn().isAddable;
        }
        else {
            return this.getColumn().isEditable;
        }
    }
}
Cell.PREPARE = prepareValue;

class Row {
    constructor(index, data, _dataSet) {
        this.index = index;
        this.data = data;
        this._dataSet = _dataSet;
        this.isSelected = false;
        this.isInEditing = false;
        this.cells = [];
        this.process();
    }
    getCell(column) {
        return this.cells.find(el => el.getColumn() === column);
    }
    getCells() {
        return this.cells;
    }
    getData() {
        return this.data;
    }
    getIsSelected() {
        return this.isSelected;
    }
    getNewData() {
        const values = Object.assign({}, this.data);
        this.getCells().forEach((cell) => values[cell.getColumn().id] = cell.newValue);
        return values;
    }
    setData(data) {
        this.data = data;
        this.process();
    }
    process() {
        this.cells = [];
        this._dataSet.getColumns().forEach((column) => {
            const cell = this.createCell(column);
            this.cells.push(cell);
        });
    }
    createCell(column) {
        const defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
        const value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
        return new Cell(value, this, column, this._dataSet);
    }
}

class Column {
    constructor(id, settings, dataSet) {
        this.id = id;
        this.settings = settings;
        this.dataSet = dataSet;
        this.title = '';
        this.type = '';
        this.class = '';
        this.width = '';
        this.isSortable = false;
        this.isEditable = true;
        this.isAddable = true;
        this.isFilterable = false;
        this.sortDirection = '';
        this.defaultSortDirection = '';
        this.editor = { type: '', config: {}, component: null };
        this.filter = { type: '', config: {}, component: null };
        this.renderComponent = null;
        this.process();
    }
    getOnComponentInitFunction() {
        return this.onComponentInitFunction;
    }
    getCompareFunction() {
        return this.compareFunction;
    }
    getValuePrepareFunction() {
        return this.valuePrepareFunction;
    }
    getFilterFunction() {
        return this.filterFunction;
    }
    getConfig() {
        return this.editor && this.editor.config;
    }
    getFilterType() {
        return this.filter && this.filter.type;
    }
    getFilterConfig() {
        return this.filter && this.filter.config;
    }
    process() {
        this.title = this.settings['title'];
        this.class = this.settings['class'];
        this.width = this.settings['width'];
        this.type = this.prepareType();
        this.editor = this.settings['editor'];
        this.filter = this.settings['filter'];
        this.renderComponent = this.settings['renderComponent'];
        this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
        this.defaultSortDirection = ['asc', 'desc']
            .indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
        this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
        this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
        this.isAddable = typeof this.settings['addable'] === 'undefined' ? true : !!this.settings['addable'];
        this.sortDirection = this.prepareSortDirection();
        this.compareFunction = this.settings['compareFunction'];
        this.valuePrepareFunction = this.settings['valuePrepareFunction'];
        this.filterFunction = this.settings['filterFunction'];
        this.onComponentInitFunction = this.settings['onComponentInitFunction'];
    }
    prepareType() {
        return this.settings['type'] || this.determineType();
    }
    prepareSortDirection() {
        return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
    }
    determineType() {
        // TODO: determine type by data
        return 'text';
    }
}

class DataSet {
    constructor(data = [], columnSettings) {
        this.columnSettings = columnSettings;
        this.data = [];
        this.columns = [];
        this.rows = [];
        this.willSelect = 'first';
        this.createColumns(columnSettings);
        this.setData(data);
        this.createNewRow();
    }
    setData(data) {
        this.data = data;
        this.createRows();
    }
    getColumns() {
        return this.columns;
    }
    getRows() {
        return this.rows;
    }
    getFirstRow() {
        return this.rows[0];
    }
    getLastRow() {
        return this.rows[this.rows.length - 1];
    }
    findRowByData(data) {
        return this.rows.find((row) => row.getData() === data);
    }
    deselectAll() {
        this.rows.forEach((row) => {
            row.isSelected = false;
        });
    }
    selectRow(row) {
        const previousIsSelected = row.isSelected;
        this.deselectAll();
        row.isSelected = !previousIsSelected;
        this.selectedRow = row;
        return this.selectedRow;
    }
    multipleSelectRow(row) {
        row.isSelected = !row.isSelected;
        this.selectedRow = row;
        return this.selectedRow;
    }
    selectPreviousRow() {
        if (this.rows.length > 0) {
            let index = this.selectedRow ? this.selectedRow.index : 0;
            if (index > this.rows.length - 1) {
                index = this.rows.length - 1;
            }
            this.selectRow(this.rows[index]);
            return this.selectedRow;
        }
    }
    selectFirstRow() {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[0]);
            return this.selectedRow;
        }
    }
    selectLastRow() {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[this.rows.length - 1]);
            return this.selectedRow;
        }
    }
    willSelectFirstRow() {
        this.willSelect = 'first';
    }
    willSelectLastRow() {
        this.willSelect = 'last';
    }
    select() {
        if (this.getRows().length === 0) {
            return;
        }
        if (this.willSelect) {
            if (this.willSelect === 'first') {
                this.selectFirstRow();
            }
            if (this.willSelect === 'last') {
                this.selectLastRow();
            }
            this.willSelect = '';
        }
        else {
            this.selectFirstRow();
        }
        return this.selectedRow;
    }
    createNewRow() {
        this.newRow = new Row(-1, {}, this);
        this.newRow.isInEditing = true;
    }
    /**
     * Create columns by mapping from the settings
     * @param settings
     * @private
     */
    createColumns(settings) {
        for (const id in settings) {
            if (settings.hasOwnProperty(id)) {
                this.columns.push(new Column(id, settings[id], this));
            }
        }
    }
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    createRows() {
        this.rows = [];
        this.data.forEach((el, index) => {
            this.rows.push(new Row(index, el, this));
        });
    }
}

class Grid {
    constructor(source, settings) {
        this.createFormShown = false;
        this.onSelectRowSource = new Subject();
        this.setSettings(settings);
        this.setSource(source);
    }
    showActionColumn(position) {
        return this.isCurrentActionsPosition(position) && this.isActionsVisible();
    }
    isCurrentActionsPosition(position) {
        return position == this.getSetting('actions.position');
    }
    isActionsVisible() {
        return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
    }
    isMultiSelectVisible() {
        return this.getSetting('selectMode') === 'multi';
    }
    getNewRow() {
        return this.dataSet.newRow;
    }
    setSettings(settings) {
        this.settings = settings;
        this.dataSet = new DataSet([], this.getSetting('columns'));
        if (this.source) {
            this.source.refresh();
        }
    }
    getDataSet() {
        return this.dataSet;
    }
    setSource(source) {
        this.source = this.prepareSource(source);
        this.source.onChanged().subscribe((changes) => this.processDataChange(changes));
        this.source.onUpdated().subscribe((data) => {
            const changedRow = this.dataSet.findRowByData(data);
            changedRow.setData(data);
        });
    }
    getSetting(name, defaultValue) {
        return getDeepFromObject(this.settings, name, defaultValue);
    }
    getColumns() {
        return this.dataSet.getColumns();
    }
    getRows() {
        return this.dataSet.getRows();
    }
    selectRow(row) {
        this.dataSet.selectRow(row);
    }
    multipleSelectRow(row) {
        this.dataSet.multipleSelectRow(row);
    }
    onSelectRow() {
        return this.onSelectRowSource.asObservable();
    }
    edit(row) {
        row.isInEditing = true;
    }
    create(row, confirmEmitter) {
        const deferred = new Deferred();
        deferred.promise.then((newData) => {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipAdd) {
                this.createFormShown = false;
            }
            else {
                this.source.prepend(newData).then(() => {
                    this.createFormShown = false;
                    this.dataSet.createNewRow();
                });
            }
        }).catch((err) => {
            // doing nothing
        });
        if (this.getSetting('add.confirmCreate')) {
            confirmEmitter.emit({
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    }
    save(row, confirmEmitter) {
        const deferred = new Deferred();
        deferred.promise.then((newData) => {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipEdit) {
                row.isInEditing = false;
            }
            else {
                this.source.update(row.getData(), newData).then(() => {
                    row.isInEditing = false;
                });
            }
        }).catch((err) => {
            // doing nothing
        });
        if (this.getSetting('edit.confirmSave')) {
            confirmEmitter.emit({
                data: row.getData(),
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    }
    delete(row, confirmEmitter) {
        const deferred = new Deferred();
        deferred.promise.then(() => {
            this.source.remove(row.getData());
        }).catch((err) => {
            // doing nothing
        });
        if (this.getSetting('delete.confirmDelete')) {
            confirmEmitter.emit({
                data: row.getData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    }
    processDataChange(changes) {
        if (this.shouldProcessChange(changes)) {
            this.dataSet.setData(changes['elements']);
            if (this.getSetting('selectMode') !== 'multi') {
                const row = this.determineRowToSelect(changes);
                if (row) {
                    this.onSelectRowSource.next(row);
                }
            }
        }
    }
    shouldProcessChange(changes) {
        if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
            return true;
        }
        else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
            return true;
        }
        return false;
    }
    // TODO: move to selectable? Separate directive
    determineRowToSelect(changes) {
        if (['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes['action']) !== -1) {
            return this.dataSet.select();
        }
        if (changes['action'] === 'remove') {
            if (changes['elements'].length === 0) {
                // we have to store which one to select as the data will be reloaded
                this.dataSet.willSelectLastRow();
            }
            else {
                return this.dataSet.selectPreviousRow();
            }
        }
        if (changes['action'] === 'append') {
            // we have to store which one to select as the data will be reloaded
            this.dataSet.willSelectLastRow();
        }
        if (changes['action'] === 'add') {
            return this.dataSet.selectFirstRow();
        }
        if (changes['action'] === 'update') {
            return this.dataSet.selectFirstRow();
        }
        if (changes['action'] === 'prepend') {
            // we have to store which one to select as the data will be reloaded
            this.dataSet.willSelectFirstRow();
        }
        return null;
    }
    prepareSource(source) {
        const initialSource = this.getInitialSort();
        if (initialSource && initialSource['field'] && initialSource['direction']) {
            source.setSort([initialSource], false);
        }
        if (this.getSetting('pager.display') === true) {
            source.setPaging(1, this.getSetting('pager.perPage'), false);
        }
        source.refresh();
        return source;
    }
    getInitialSort() {
        const sortConf = {};
        this.getColumns().forEach((column) => {
            if (column.isSortable && column.defaultSortDirection) {
                sortConf['field'] = column.id;
                sortConf['direction'] = column.defaultSortDirection;
                sortConf['compare'] = column.getCompareFunction();
            }
        });
        return sortConf;
    }
    getSelectedRows() {
        return this.dataSet.getRows()
            .filter(r => r.isSelected);
    }
    selectAllRows(status) {
        this.dataSet.getRows()
            .forEach(r => r.isSelected = status);
    }
    getFirstRow() {
        return this.dataSet.getFirstRow();
    }
    getLastRow() {
        return this.dataSet.getLastRow();
    }
}

let CellComponent = class CellComponent {
    constructor() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], CellComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Row)
], CellComponent.prototype, "row", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], CellComponent.prototype, "editConfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], CellComponent.prototype, "createConfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CellComponent.prototype, "isNew", void 0);
__decorate([
    Input(),
    __metadata("design:type", Cell)
], CellComponent.prototype, "cell", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CellComponent.prototype, "inputClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CellComponent.prototype, "mode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CellComponent.prototype, "isInEditing", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CellComponent.prototype, "edited", void 0);
CellComponent = __decorate([
    Component({
        selector: 'ng2-smart-table-cell',
        template: `
    <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
                          [inputClass]="inputClass"
                          (edited)="onEdited($event)">
    </table-cell-edit-mode>
  `
    })
], CellComponent);

class EditCellDefault {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    onStopEditing() {
        this.cell.getRow().isInEditing = false;
        return false;
    }
    onClick(event) {
        event.stopPropagation();
    }
}
__decorate([
    Input(),
    __metadata("design:type", Cell)
], EditCellDefault.prototype, "cell", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], EditCellDefault.prototype, "inputClass", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], EditCellDefault.prototype, "edited", void 0);

let CustomEditComponent = class CustomEditComponent extends EditCellDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.cell && !this.customComponent) {
            const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.cell = this.cell;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.onStopEditing.subscribe(() => this.onStopEditing());
            this.customComponent.instance.onEdited.subscribe((event) => this.onEdited(event));
            this.customComponent.instance.onClick.subscribe((event) => this.onClick(event));
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
};
__decorate([
    ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }),
    __metadata("design:type", Object)
], CustomEditComponent.prototype, "dynamicTarget", void 0);
CustomEditComponent = __decorate([
    Component({
        selector: 'table-cell-custom-editor',
        template: `
    <ng-template #dynamicTarget></ng-template>
  `
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver])
], CustomEditComponent);

let DefaultEditComponent = class DefaultEditComponent extends EditCellDefault {
    constructor() {
        super();
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
};
DefaultEditComponent = __decorate([
    Component({
        selector: 'table-cell-default-editor',
        template: "<div [ngSwitch]=\"getEditorType()\">\r\n    <select-editor *ngSwitchCase=\"'list'\"\r\n                   [cell]=\"cell\"\r\n                   [inputClass]=\"inputClass\"\r\n                   (onClick)=\"onClick($event)\"\r\n                   (onEdited)=\"onEdited($event)\"\r\n                   (onStopEditing)=\"onStopEditing()\">\r\n    </select-editor>\r\n\r\n    <textarea-editor *ngSwitchCase=\"'textarea'\"\r\n                     [cell]=\"cell\"\r\n                     [inputClass]=\"inputClass\"\r\n                     (onClick)=\"onClick($event)\"\r\n                     (onEdited)=\"onEdited($event)\"\r\n                     (onStopEditing)=\"onStopEditing()\">\r\n    </textarea-editor>\r\n\r\n    <checkbox-editor *ngSwitchCase=\"'checkbox'\"\r\n                     [cell]=\"cell\"\r\n                     [inputClass]=\"inputClass\"\r\n                     (onClick)=\"onClick($event)\">\r\n    </checkbox-editor>\r\n\r\n    <completer-editor *ngSwitchCase=\"'completer'\"\r\n                      [cell]=\"cell\">\r\n    </completer-editor>\r\n\r\n    <input-editor *ngSwitchDefault\r\n                  [cell]=\"cell\"\r\n                  [inputClass]=\"inputClass\"\r\n                  (onClick)=\"onClick($event)\"\r\n                  (onEdited)=\"onEdited($event)\"\r\n                  (onStopEditing)=\"onStopEditing()\">\r\n    </input-editor>\r\n</div>"
    }),
    __metadata("design:paramtypes", [])
], DefaultEditComponent);

let EditCellComponent = class EditCellComponent {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Cell)
], EditCellComponent.prototype, "cell", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], EditCellComponent.prototype, "inputClass", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], EditCellComponent.prototype, "edited", void 0);
EditCellComponent = __decorate([
    Component({
        selector: 'table-cell-edit-mode',
        template: `
      <div [ngSwitch]="getEditorType()">
        <table-cell-custom-editor *ngSwitchCase="'custom'"
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-custom-editor>
        <table-cell-default-editor *ngSwitchDefault
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-default-editor>
      </div>
    `
    })
], EditCellComponent);

class DefaultEditor {
    constructor() {
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
}
__decorate([
    Input(),
    __metadata("design:type", Cell)
], DefaultEditor.prototype, "cell", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DefaultEditor.prototype, "inputClass", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DefaultEditor.prototype, "onStopEditing", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DefaultEditor.prototype, "onEdited", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DefaultEditor.prototype, "onClick", void 0);

let CheckboxEditorComponent = class CheckboxEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
    onChange(event) {
        const trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
        const falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
        this.cell.newValue = event.target.checked ? trueVal : falseVal;
    }
};
CheckboxEditorComponent = __decorate([
    Component({
        selector: 'checkbox-editor',
        template: `
    <input [ngClass]="inputClass"
           type="checkbox"
           class="form-control"
           [name]="cell.getId()"
           [disabled]="!cell.isEditable()"
           [checked]="cell.getValue() == (cell.getColumn().getConfig()?.true || true)"
           (click)="onClick.emit($event)"
           (change)="onChange($event)">
    `,
        styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
    }),
    __metadata("design:paramtypes", [])
], CheckboxEditorComponent);

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
CompleterEditorComponent = __decorate([
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
    __metadata("design:paramtypes", [CompleterService])
], CompleterEditorComponent);

let InputEditorComponent = class InputEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
};
InputEditorComponent = __decorate([
    Component({
        selector: 'input-editor',
        template: `
    <input [ngClass]="inputClass"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getId()"
           [placeholder]="cell.getTitle()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()">
    `,
        styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
    }),
    __metadata("design:paramtypes", [])
], InputEditorComponent);

let SelectEditorComponent = class SelectEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
};
SelectEditorComponent = __decorate([
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
    __metadata("design:paramtypes", [])
], SelectEditorComponent);

let TextareaEditorComponent = class TextareaEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
};
TextareaEditorComponent = __decorate([
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
    __metadata("design:paramtypes", [])
], TextareaEditorComponent);

let CustomViewComponent = class CustomViewComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    ngOnInit() {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
    createCustomComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    }
    callOnComponentInit() {
        const onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    }
    patchInstance() {
        Object.assign(this.customComponent.instance, this.getPatch());
    }
    getPatch() {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    }
};
__decorate([
    Input(),
    __metadata("design:type", Cell)
], CustomViewComponent.prototype, "cell", void 0);
__decorate([
    ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }),
    __metadata("design:type", Object)
], CustomViewComponent.prototype, "dynamicTarget", void 0);
CustomViewComponent = __decorate([
    Component({
        selector: 'custom-view-component',
        template: `
    <ng-template #dynamicTarget></ng-template>
  `
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver])
], CustomViewComponent);

let ViewCellComponent = class ViewCellComponent {
};
__decorate([
    Input(),
    __metadata("design:type", Cell)
], ViewCellComponent.prototype, "cell", void 0);
ViewCellComponent = __decorate([
    Component({
        selector: 'table-cell-view-mode',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
        <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
    `
    })
], ViewCellComponent);

const CELL_COMPONENTS = [
    CellComponent,
    CustomEditComponent,
    DefaultEditComponent,
    EditCellComponent,
    CheckboxEditorComponent,
    CompleterEditorComponent,
    InputEditorComponent,
    SelectEditorComponent,
    TextareaEditorComponent,
    CustomViewComponent,
    ViewCellComponent,
];
let CellModule = class CellModule {
};
CellModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            Ng2CompleterModule,
        ],
        declarations: [
            ...CELL_COMPONENTS,
        ],
        exports: [
            ...CELL_COMPONENTS,
        ],
    })
], CellModule);

class DataSource {
    constructor() {
        this.onChangedSource = new Subject();
        this.onAddedSource = new Subject();
        this.onUpdatedSource = new Subject();
        this.onRemovedSource = new Subject();
    }
    refresh() {
        this.emitOnChanged('refresh');
    }
    load(data) {
        this.emitOnChanged('load');
        return Promise.resolve();
    }
    onChanged() {
        return this.onChangedSource.asObservable();
    }
    onAdded() {
        return this.onAddedSource.asObservable();
    }
    onUpdated() {
        return this.onUpdatedSource.asObservable();
    }
    onRemoved() {
        return this.onRemovedSource.asObservable();
    }
    prepend(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('prepend');
        return Promise.resolve();
    }
    append(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('append');
        return Promise.resolve();
    }
    add(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('add');
        return Promise.resolve();
    }
    remove(element) {
        this.emitOnRemoved(element);
        this.emitOnChanged('remove');
        return Promise.resolve();
    }
    update(element, values) {
        this.emitOnUpdated(element);
        this.emitOnChanged('update');
        return Promise.resolve();
    }
    empty() {
        this.emitOnChanged('empty');
        return Promise.resolve();
    }
    setSort(conf, doEmit) {
        if (doEmit) {
            this.emitOnChanged('sort');
        }
    }
    setFilter(conf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    }
    addFilter(fieldConf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    }
    setPaging(page, perPage, doEmit) {
        if (doEmit) {
            this.emitOnChanged('paging');
        }
    }
    setPage(page, doEmit) {
        if (doEmit) {
            this.emitOnChanged('page');
        }
    }
    emitOnRemoved(element) {
        this.onRemovedSource.next(element);
    }
    emitOnUpdated(element) {
        this.onUpdatedSource.next(element);
    }
    emitOnAdded(element) {
        this.onAddedSource.next(element);
    }
    emitOnChanged(action) {
        this.getElements().then((elements) => this.onChangedSource.next({
            action: action,
            elements: elements,
            paging: this.getPaging(),
            filter: this.getFilter(),
            sort: this.getSort(),
        }));
    }
}

class FilterDefault {
    constructor() {
        this.inputClass = '';
        this.filter = new EventEmitter();
        this.query = '';
    }
    onFilter(query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    }
}
__decorate([
    Input(),
    __metadata("design:type", Column)
], FilterDefault.prototype, "column", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], FilterDefault.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FilterDefault.prototype, "inputClass", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], FilterDefault.prototype, "filter", void 0);

let FilterComponent = class FilterComponent extends FilterDefault {
    constructor() {
        super(...arguments);
        this.query = '';
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const filterConf = this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach((k, v) => {
                        if (k.field == this.column.id) {
                            this.query = k.search;
                        }
                    });
                }
            });
        }
    }
};
FilterComponent = __decorate([
    Component({
        selector: 'ng2-smart-table-filter',
        template: `
      <div class="ng2-smart-filter" *ngIf="column.isFilterable" [ngSwitch]="column.getFilterType()">
        <custom-table-filter *ngSwitchCase="'custom'"
                             [query]="query"
                             [column]="column"
                             [source]="source"
                             [inputClass]="inputClass"
                             (filter)="onFilter($event)">
        </custom-table-filter>
        <default-table-filter *ngSwitchDefault
                              [query]="query"
                              [column]="column"
                              [source]="source"
                              [inputClass]="inputClass"
                              (filter)="onFilter($event)">
        </default-table-filter>
      </div>
    `,
        styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}"]
    })
], FilterComponent);

let DefaultFilterComponent = class DefaultFilterComponent extends FilterDefault {
};
__decorate([
    Input(),
    __metadata("design:type", String)
], DefaultFilterComponent.prototype, "query", void 0);
DefaultFilterComponent = __decorate([
    Component({
        selector: 'default-table-filter',
        template: `
    <ng-container [ngSwitch]="column.getFilterType()">
      <select-filter *ngSwitchCase="'list'"
                     [query]="query"
                     [ngClass]="inputClass"
                     [column]="column"
                     (filter)="onFilter($event)">
      </select-filter>
      <checkbox-filter *ngSwitchCase="'checkbox'"
                       [query]="query"
                       [ngClass]="inputClass"
                       [column]="column"
                       (filter)="onFilter($event)">
      </checkbox-filter>
      <completer-filter *ngSwitchCase="'completer'"
                        [query]="query"
                        [ngClass]="inputClass"
                        [column]="column"
                        (filter)="onFilter($event)">
      </completer-filter>
      <input-filter *ngSwitchDefault
                    [query]="query"
                    [ngClass]="inputClass"
                    [column]="column"
                    (filter)="onFilter($event)">
      </input-filter>
    </ng-container>
  `
    })
], DefaultFilterComponent);

let CustomFilterComponent = class CustomFilterComponent extends FilterDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.column && !this.customComponent) {
            const componentFactory = this.resolver.resolveComponentFactory(this.column.filter.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.query = this.query;
            this.customComponent.instance.column = this.column;
            this.customComponent.instance.source = this.source;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.filter.subscribe((event) => this.onFilter(event));
        }
        if (this.customComponent) {
            this.customComponent.instance.ngOnChanges(changes);
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], CustomFilterComponent.prototype, "query", void 0);
__decorate([
    ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }),
    __metadata("design:type", Object)
], CustomFilterComponent.prototype, "dynamicTarget", void 0);
CustomFilterComponent = __decorate([
    Component({
        selector: 'custom-table-filter',
        template: `<ng-template #dynamicTarget></ng-template>`
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver])
], CustomFilterComponent);

class DefaultFilter {
    constructor() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    ngOnDestroy() {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    }
    setFilter() {
        this.filter.emit(this.query);
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], DefaultFilter.prototype, "query", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DefaultFilter.prototype, "inputClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Column)
], DefaultFilter.prototype, "column", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DefaultFilter.prototype, "filter", void 0);

let CheckboxFilterComponent = class CheckboxFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.filterActive = false;
        this.inputControl = new FormControl();
    }
    ngOnInit() {
        this.changesSubscription = this.inputControl.valueChanges
            .pipe(debounceTime(this.delay))
            .subscribe((checked) => {
            this.filterActive = true;
            const trueVal = (this.column.getFilterConfig() && this.column.getFilterConfig().true) || true;
            const falseVal = (this.column.getFilterConfig() && this.column.getFilterConfig().false) || false;
            this.query = checked ? trueVal : falseVal;
            this.setFilter();
        });
    }
    resetFilter(event) {
        event.preventDefault();
        this.query = '';
        this.inputControl.setValue(false, { emitEvent: false });
        this.filterActive = false;
        this.setFilter();
    }
};
CheckboxFilterComponent = __decorate([
    Component({
        selector: 'checkbox-filter',
        template: `
    <input type="checkbox" [formControl]="inputControl" [ngClass]="inputClass" class="form-control">
    <a href="#" *ngIf="filterActive"
                (click)="resetFilter($event)">{{column.getFilterConfig()?.resetText || 'reset'}}</a>
  `
    }),
    __metadata("design:paramtypes", [])
], CheckboxFilterComponent);

let CompleterFilterComponent = class CompleterFilterComponent extends DefaultFilter {
    constructor(completerService) {
        super();
        this.completerService = completerService;
        this.completerContent = new Subject();
    }
    ngOnInit() {
        const config = this.column.getFilterConfig().completer;
        config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        config.dataService.descriptionField(config.descriptionField);
        this.changesSubscription = this.completerContent
            .pipe(map((ev) => (ev && ev.title) || ev || ''), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe((search) => {
            this.query = search;
            this.setFilter();
        });
    }
    inputTextChanged(event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    }
};
CompleterFilterComponent = __decorate([
    Component({
        selector: 'completer-filter',
        template: `
    <ng2-completer [(ngModel)]="query"
                   (ngModelChange)="inputTextChanged($event)"
                   [dataService]="column.getFilterConfig().completer.dataService"
                   [minSearchLength]="column.getFilterConfig().completer.minSearchLength || 0"
                   [pause]="column.getFilterConfig().completer.pause || 0"
                   [placeholder]="column.getFilterConfig().completer.placeholder || 'Start typing...'"
                   (selected)="completerContent.next($event)">
    </ng2-completer>
  `
    }),
    __metadata("design:paramtypes", [CompleterService])
], CompleterFilterComponent);

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
InputFilterComponent = __decorate([
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
    __metadata("design:paramtypes", [])
], InputFilterComponent);

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
__decorate([
    ViewChild('inputControl', { read: NgControl, static: true }),
    __metadata("design:type", NgControl)
], SelectFilterComponent.prototype, "inputControl", void 0);
SelectFilterComponent = __decorate([
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
    __metadata("design:paramtypes", [])
], SelectFilterComponent);

const FILTER_COMPONENTS = [
    FilterComponent,
    DefaultFilterComponent,
    CustomFilterComponent,
    CheckboxFilterComponent,
    CompleterFilterComponent,
    InputFilterComponent,
    SelectFilterComponent,
];
let FilterModule = class FilterModule {
};
FilterModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            Ng2CompleterModule,
        ],
        declarations: [
            ...FILTER_COMPONENTS,
        ],
        exports: [
            ...FILTER_COMPONENTS,
        ],
    })
], FilterModule);

let PagerComponent = class PagerComponent {
    constructor() {
        this.perPageSelect = [];
        this.changePage = new EventEmitter();
        this.count = 0;
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                this.page = this.source.getPaging().page;
                this.perPage = this.source.getPaging().perPage;
                this.currentPerPage = this.perPage;
                this.count = this.source.count();
                if (this.isPageOutOfBounce()) {
                    this.source.setPage(--this.page);
                }
                this.processPageChange(dataChanges);
                this.initPages();
            });
        }
    }
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    processPageChange(changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    }
    shouldShow() {
        return this.source.count() > this.perPage;
    }
    paginate(page) {
        this.source.setPage(page);
        this.page = page;
        this.changePage.emit({ page });
        return false;
    }
    next() {
        return this.paginate(this.getPage() + 1);
    }
    prev() {
        return this.paginate(this.getPage() - 1);
    }
    getPage() {
        return this.page;
    }
    getPages() {
        return this.pages;
    }
    getLast() {
        return Math.ceil(this.count / this.perPage);
    }
    isPageOutOfBounce() {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    }
    initPages() {
        const pagesCount = this.getLast();
        let showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            let middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            let lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            const firstOne = lastOne - showPagesCount + 1;
            for (let i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    }
    onChangePerPage(event) {
        if (this.currentPerPage) {
            if (typeof this.currentPerPage === 'string' && this.currentPerPage.toLowerCase() === 'all') {
                this.source.getPaging().perPage = null;
            }
            else {
                this.source.getPaging().perPage = this.currentPerPage * 1;
                this.source.refresh();
            }
            this.initPages();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], PagerComponent.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], PagerComponent.prototype, "perPageSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PagerComponent.prototype, "changePage", void 0);
PagerComponent = __decorate([
    Component({
        selector: 'ng2-smart-table-pager',
        template: `
    <nav *ngIf="shouldShow()" class="ng2-smart-pagination-nav">
      <ul class="ng2-smart-pagination pagination">
        <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="getPage() == 1 ? false : paginate(1)" aria-label="First">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">First</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
          <a class="ng2-smart-page-link page-link page-link-prev" href="#"
             (click)="getPage() == 1 ? false : prev()" aria-label="Prev">
            <span aria-hidden="true">&lt;</span>
            <span class="sr-only">Prev</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item"
        [ngClass]="{active: getPage() == page}" *ngFor="let page of getPages()">
          <span class="ng2-smart-page-link page-link"
          *ngIf="getPage() == page">{{ page }} <span class="sr-only">(current)</span></span>
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="paginate(page)" *ngIf="getPage() != page">{{ page }}</a>
        </li>

        <li class="ng2-smart-page-item page-item"
            [ngClass]="{disabled: getPage() == getLast()}">
          <a class="ng2-smart-page-link page-link page-link-next" href="#"
             (click)="getPage() == getLast() ? false : next()" aria-label="Next">
            <span aria-hidden="true">&gt;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
        
        <li class="ng2-smart-page-item page-item"
        [ngClass]="{disabled: getPage() == getLast()}">
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="getPage() == getLast() ? false : paginate(getLast())" aria-label="Last">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Last</span>
          </a>
        </li>
      </ul>
    </nav>
    
    <nav *ngIf="perPageSelect && perPageSelect.length > 0" class="ng2-smart-pagination-per-page">
      <label for="per-page">
        Per Page:
      </label>
      <select (change)="onChangePerPage($event)" [(ngModel)]="currentPerPage" id="per-page">
        <option *ngFor="let item of perPageSelect" [value]="item">{{ item }}</option>
      </select>
    </nav>
  `,
        styles: [".ng2-smart-pagination{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination .ng2-smart-page-item{display:inline}.ng2-smart-pagination .page-link-next,.ng2-smart-pagination .page-link-prev{font-size:10px}:host{display:flex;justify-content:space-between}:host select{margin:1rem 0 1rem 1rem}:host label{margin:1rem 0 1rem 1rem;line-height:2.5rem}"]
    })
], PagerComponent);

let PagerModule = class PagerModule {
};
PagerModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
        ],
        declarations: [
            PagerComponent,
        ],
        exports: [
            PagerComponent,
        ],
    })
], PagerModule);

let Ng2SmartTableTbodyComponent = class Ng2SmartTableTbodyComponent {
    constructor() {
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.edited = new EventEmitter();
        this.userSelectRow = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.multipleSelectRow = new EventEmitter();
        this.rowHover = new EventEmitter();
    }
    get tableColumnsCount() {
        const actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
        return this.grid.getColumns().length + actionColumns;
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], Ng2SmartTableTbodyComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], Ng2SmartTableTbodyComponent.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], Ng2SmartTableTbodyComponent.prototype, "deleteConfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], Ng2SmartTableTbodyComponent.prototype, "editConfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], Ng2SmartTableTbodyComponent.prototype, "rowClassFunction", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "save", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "cancel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "edit", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "delete", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "custom", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "edited", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "userSelectRow", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "editRowSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "multipleSelectRow", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "rowHover", void 0);
Ng2SmartTableTbodyComponent = __decorate([
    Component({
        selector: '[ng2-st-tbody]',
        template: "<tr *ngFor=\"let row of grid.getRows()\" (click)=\"userSelectRow.emit(row)\" (mouseover)=\"rowHover.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\">\r\n  <td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row)\">\r\n    <input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\">\r\n  </td>\r\n  <td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\r\n\r\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\r\n                              [deleteConfirm]=\"deleteConfirm\"\r\n                              [editConfirm]=\"editConfirm\"\r\n                              (edit)=\"edit.emit(row)\"\r\n                              (delete)=\"delete.emit(row)\"\r\n                              (editRowSelect)=\"editRowSelect.emit($event)\"\r\n                              [row]=\"row\"\r\n                              [source]=\"source\">\r\n    </ng2-st-tbody-edit-delete>\r\n  </td>\r\n   <td *ngIf=\"row.isInEditing && showActionColumnLeft\"  class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\r\n  </td>\r\n  <td *ngFor=\"let cell of row.cells\">\r\n    <ng2-smart-table-cell [cell]=\"cell\"\r\n                          [grid]=\"grid\"\r\n                          [row]=\"row\"\r\n                          [isNew]=\"false\"\r\n                          [mode]=\"mode\"\r\n                          [editConfirm]=\"editConfirm\"\r\n                          [inputClass]=\"editInputClass\"\r\n                          [isInEditing]=\"row.isInEditing\">\r\n    </ng2-smart-table-cell>\r\n  </td>\r\n\r\n  <td *ngIf=\"row.isInEditing && showActionColumnRight\"  class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\r\n  </td>\r\n\r\n  <td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\r\n\r\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\r\n                              [deleteConfirm]=\"deleteConfirm\"\r\n                              [editConfirm]=\"editConfirm\"\r\n                              [row]=\"row\"\r\n                              [source]=\"source\"\r\n                              (edit)=\"edit.emit(row)\"\r\n                              (delete)=\"delete.emit(row)\"\r\n                              (editRowSelect)=\"editRowSelect.emit($event)\">\r\n    </ng2-st-tbody-edit-delete>\r\n  </td>\r\n</tr>\r\n\r\n<tr *ngIf=\"grid.getRows().length == 0\">\r\n  <td [attr.colspan]=\"tableColumnsCount\">\r\n    {{ noDataMessage }}\r\n  </td>\r\n</tr>\r\n",
        styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-create-cancel a:first-child,:host ::ng-deep ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"]
    })
], Ng2SmartTableTbodyComponent);

let TbodyCreateCancelComponent = class TbodyCreateCancelComponent {
    onSave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.grid.save(this.row, this.editConfirm);
    }
    onCancelEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.row.isInEditing = false;
    }
    ngOnChanges() {
        this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
        this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], TbodyCreateCancelComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Row)
], TbodyCreateCancelComponent.prototype, "row", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], TbodyCreateCancelComponent.prototype, "editConfirm", void 0);
TbodyCreateCancelComponent = __decorate([
    Component({
        selector: 'ng2-st-tbody-create-cancel',
        template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-save"
        [innerHTML]="saveButtonContent" (click)="onSave($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-cancel"
        [innerHTML]="cancelButtonContent" (click)="onCancelEdit($event)"></a>
  `
    })
], TbodyCreateCancelComponent);

let TbodyEditDeleteComponent = class TbodyEditDeleteComponent {
    constructor() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.editRowSelect = new EventEmitter();
    }
    onEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.edit(this.row);
        }
    }
    onDelete(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    }
    ngOnChanges() {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], TbodyEditDeleteComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Row)
], TbodyEditDeleteComponent.prototype, "row", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], TbodyEditDeleteComponent.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], TbodyEditDeleteComponent.prototype, "deleteConfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], TbodyEditDeleteComponent.prototype, "editConfirm", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "edit", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "delete", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "editRowSelect", void 0);
TbodyEditDeleteComponent = __decorate([
    Component({
        selector: 'ng2-st-tbody-edit-delete',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <a href="#" *ngIf="isActionEdit" class="ng2-smart-action ng2-smart-action-edit-edit"
        [innerHTML]="editRowButtonContent" (click)="onEdit($event)"></a>
    <a href="#" *ngIf="isActionDelete" class="ng2-smart-action ng2-smart-action-delete-delete"
        [innerHTML]="deleteRowButtonContent" (click)="onDelete($event)"></a>
  `
    })
], TbodyEditDeleteComponent);

let TbodyCustomComponent = class TbodyCustomComponent {
    constructor() {
        this.custom = new EventEmitter();
    }
    onCustom(action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], TbodyCustomComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Row)
], TbodyCustomComponent.prototype, "row", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TbodyCustomComponent.prototype, "source", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyCustomComponent.prototype, "custom", void 0);
TbodyCustomComponent = __decorate([
    Component({
        selector: 'ng2-st-tbody-custom',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
      <a *ngFor="let action of grid.getSetting('actions.custom')" href="#"
         class="ng2-smart-action ng2-smart-action-custom-custom" 
         [innerHTML]="action.title"
         (click)="onCustom(action, $event)"></a>
        `
    })
], TbodyCustomComponent);

const TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    TbodyCustomComponent,
    Ng2SmartTableTbodyComponent
];
let TBodyModule = class TBodyModule {
};
TBodyModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            CellModule,
        ],
        declarations: [
            ...TBODY_COMPONENTS,
        ],
        exports: [
            ...TBODY_COMPONENTS,
        ],
    })
], TBodyModule);

let Ng2SmartTableTheadComponent = class Ng2SmartTableTheadComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
        this.onSortTable = new EventEmitter();
    }
    ngOnChanges() {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], Ng2SmartTableTheadComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], Ng2SmartTableTheadComponent.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Ng2SmartTableTheadComponent.prototype, "isAllSelected", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], Ng2SmartTableTheadComponent.prototype, "createConfirm", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "sort", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "selectAllRows", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "create", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "filter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "onSortTable", void 0);
Ng2SmartTableTheadComponent = __decorate([
    Component({
        selector: '[ng2-st-thead]',
        template: "<tr ng2-st-thead-titles-row *ngIf=\"!isHideHeader\"\r\n                            class=\"ng2-smart-titles\"\r\n                            [grid]=\"grid\"\r\n                            [isAllSelected]=\"isAllSelected\"\r\n                            [source]=\"source\"\r\n                            (sort)=\"sort.emit($event)\"\r\n                            (onSortTable)=\"onSortTable.emit($event)\"\r\n                            (selectAllRows)=\"selectAllRows.emit($event)\">\r\n</tr>\r\n\r\n<tr ng2-st-thead-filters-row *ngIf=\"!isHideSubHeader\"\r\n                              class=\"ng2-smart-filters\"\r\n                              [grid]=\"grid\"\r\n                              [source]=\"source\"\r\n                              (create)=\"create.emit($event)\"\r\n                              (filter)=\"filter.emit($event)\">\r\n</tr>\r\n\r\n<tr ng2-st-thead-form-row *ngIf=\"grid.createFormShown\"\r\n                          [grid]=\"grid\"\r\n                          [createConfirm]=\"createConfirm\">\r\n</tr>\r\n"
    })
], Ng2SmartTableTheadComponent);

let ActionsComponent = class ActionsComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    ngOnChanges() {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], ActionsComponent.prototype, "grid", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ActionsComponent.prototype, "create", void 0);
ActionsComponent = __decorate([
    Component({
        selector: 'ng2-st-actions',
        template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-add-create"
        [innerHTML]="createButtonContent"
        (click)="$event.preventDefault();create.emit($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-add-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="$event.preventDefault();grid.createFormShown = false;"></a>
  `
    })
], ActionsComponent);

let ActionsTitleComponent = class ActionsTitleComponent {
    constructor(ref) {
        this.ref = ref;
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    }
    ngOnChanges() {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], ActionsTitleComponent.prototype, "grid", void 0);
ActionsTitleComponent = __decorate([
    Component({
        selector: '[ng2-st-actions-title]',
        template: `
    <div class="ng2-smart-title">{{ actionsColumnTitle }}</div>
  `
    }),
    __metadata("design:paramtypes", [ElementRef])
], ActionsTitleComponent);

let AddButtonComponent = class AddButtonComponent {
    constructor(ref) {
        this.ref = ref;
        this.create = new EventEmitter();
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    }
    ngOnChanges() {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
    }
    onAdd(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source,
            });
        }
        else {
            this.grid.createFormShown = true;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], AddButtonComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], AddButtonComponent.prototype, "source", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], AddButtonComponent.prototype, "create", void 0);
AddButtonComponent = __decorate([
    Component({
        selector: '[ng2-st-add-button]',
        template: `
    <a *ngIf="isActionAdd" href="#" class="ng2-smart-action ng2-smart-action-add-add"
        [innerHTML]="addNewButtonContent" (click)="onAdd($event)"></a>
  `
    }),
    __metadata("design:paramtypes", [ElementRef])
], AddButtonComponent);

let CheckboxSelectAllComponent = class CheckboxSelectAllComponent {
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], CheckboxSelectAllComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], CheckboxSelectAllComponent.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CheckboxSelectAllComponent.prototype, "isAllSelected", void 0);
CheckboxSelectAllComponent = __decorate([
    Component({
        selector: '[ng2-st-checkbox-select-all]',
        template: `
    <input type="checkbox" [ngModel]="isAllSelected">
  `
    })
], CheckboxSelectAllComponent);

let ColumnTitleComponent = class ColumnTitleComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.onSortTable = new EventEmitter();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Column)
], ColumnTitleComponent.prototype, "column", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], ColumnTitleComponent.prototype, "source", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ColumnTitleComponent.prototype, "sort", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ColumnTitleComponent.prototype, "onSortTable", void 0);
ColumnTitleComponent = __decorate([
    Component({
        selector: 'ng2-st-column-title',
        template: `
    <div class="ng2-smart-title">
      <ng2-smart-table-title [source]="source" [column]="column" (sort)="sort.emit($event)" (onSortTable)="onSortTable.emit($event)"></ng2-smart-table-title>
    </div>
  `
    })
], ColumnTitleComponent);

let TitleComponent = class TitleComponent {
    constructor() {
        this.currentDirection = '';
        this.sort = new EventEmitter();
        this.onSortTable = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const sortConf = this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
                    this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    this.currentDirection = '';
                }
                sortConf.forEach((fieldConf) => {
                });
            });
        }
    }
    _sort(event) {
        event.preventDefault();
        this.changeSortDirection();
        this.onSortTable.emit({ column: this.column.id, direction: this.currentDirection });
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction(),
            },
        ]);
        this.sort.emit(null);
    }
    changeSortDirection() {
        if (this.currentDirection) {
            const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Column)
], TitleComponent.prototype, "column", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], TitleComponent.prototype, "source", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TitleComponent.prototype, "sort", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TitleComponent.prototype, "onSortTable", void 0);
TitleComponent = __decorate([
    Component({
        selector: 'ng2-smart-table-title',
        template: `
    <a href="#" *ngIf="column.isSortable"
                (click)="_sort($event)"
                class="ng2-smart-sort-link sort"
                [ngClass]="currentDirection">
      {{ column.title }}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `,
        styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc::after,a.sort.desc::after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc::after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}"]
    })
], TitleComponent);

let TheadFitlersRowComponent = class TheadFitlersRowComponent {
    constructor() {
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], TheadFitlersRowComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], TheadFitlersRowComponent.prototype, "source", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TheadFitlersRowComponent.prototype, "create", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TheadFitlersRowComponent.prototype, "filter", void 0);
TheadFitlersRowComponent = __decorate([
    Component({
        selector: '[ng2-st-thead-filters-row]',
        template: `
    <th *ngIf="isMultiSelectVisible"></th>
    <th ng2-st-add-button *ngIf="showActionColumnLeft"
                          [grid]="grid"
                          (create)="create.emit($event)">
    </th>
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}">
      <ng2-smart-table-filter [source]="source"
                              [column]="column"
                              [inputClass]="filterInputClass"
                              (filter)="filter.emit($event)">
      </ng2-smart-table-filter>
    </th>
    <th ng2-st-add-button *ngIf="showActionColumnRight"
                          [grid]="grid"
                          [source]="source"
                          (create)="create.emit($event)">
    </th>
  `
    })
], TheadFitlersRowComponent);

let TheadFormRowComponent = class TheadFormRowComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    onCreate(event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.addInputClass = this.grid.getSetting('add.inputClass');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], TheadFormRowComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Row)
], TheadFormRowComponent.prototype, "row", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], TheadFormRowComponent.prototype, "createConfirm", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TheadFormRowComponent.prototype, "create", void 0);
TheadFormRowComponent = __decorate([
    Component({
        selector: '[ng2-st-thead-form-row]',
        template: `
      <td *ngIf=""></td>
      <td  *ngIf="showActionColumnLeft"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
      <td *ngFor="let cell of grid.getNewRow().getCells()">
        <ng2-smart-table-cell [cell]="cell"
                              [grid]="grid"
                              [isNew]="true"
                              [createConfirm]="createConfirm"
                              [inputClass]="addInputClass"
                              [isInEditing]="grid.getNewRow().isInEditing"
                              (edited)="onCreate($event)">
        </ng2-smart-table-cell>
      </td>
      <td  *ngIf="showActionColumnRight"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
  `
    })
], TheadFormRowComponent);

let TheadTitlesRowComponent = class TheadTitlesRowComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.onSortTable = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], TheadTitlesRowComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TheadTitlesRowComponent.prototype, "isAllSelected", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], TheadTitlesRowComponent.prototype, "source", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TheadTitlesRowComponent.prototype, "sort", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TheadTitlesRowComponent.prototype, "selectAllRows", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TheadTitlesRowComponent.prototype, "onSortTable", void 0);
TheadTitlesRowComponent = __decorate([
    Component({
        selector: '[ng2-st-thead-titles-row]',
        template: `
    <th ng2-st-checkbox-select-all *ngIf="isMultiSelectVisible"
                                   [grid]="grid"
                                   [source]="source"
                                   [isAllSelected]="isAllSelected"
                                   (click)="selectAllRows.emit($event)">
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnLeft" [grid]="grid"></th>
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}" [ngClass]="column.class"
      [style.width]="column.width" >
      <ng2-st-column-title [source]="source" [column]="column" (sort)="sort.emit($event)" (onSortTable)="onSortTable.emit($event)"></ng2-st-column-title>
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnRight" [grid]="grid"></th>
  `
    })
], TheadTitlesRowComponent);

const THEAD_COMPONENTS = [
    ActionsComponent,
    ActionsTitleComponent,
    AddButtonComponent,
    CheckboxSelectAllComponent,
    ColumnTitleComponent,
    TitleComponent,
    TheadFitlersRowComponent,
    TheadFormRowComponent,
    TheadTitlesRowComponent,
    Ng2SmartTableTheadComponent,
];
let THeadModule = class THeadModule {
};
THeadModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            FilterModule,
            CellModule,
        ],
        declarations: [
            ...THEAD_COMPONENTS,
        ],
        exports: [
            ...THEAD_COMPONENTS,
        ],
    })
], THeadModule);

function compareValues(direction, a, b) {
    if (a < b) {
        return -1 * direction;
    }
    if (a > b) {
        return direction;
    }
    return 0;
}
class LocalSorter {
    static sort(data, field, direction, customCompare) {
        const dir = (direction === 'asc') ? 1 : -1;
        const compare = customCompare ? customCompare : compareValues;
        return data.sort((a, b) => {
            return compare.call(null, dir, a[field], b[field]);
        });
    }
}

function filterValues(value, search) {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}
class LocalFilter {
    static filter(data, field, search, customFilter) {
        const filter = customFilter ? customFilter : filterValues;
        return data.filter((el) => {
            const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
            return filter.call(null, value, search);
        });
    }
}

class LocalPager {
    static paginate(data, page, perPage) {
        return data.slice(perPage * (page - 1), perPage * page);
    }
}

class LocalDataSource extends DataSource {
    constructor(data = []) {
        super();
        this.data = [];
        this.filteredAndSorted = [];
        this.sortConf = [];
        this.filterConf = {
            filters: [],
            andOperator: true,
        };
        this.pagingConf = {};
        this.data = data;
    }
    load(data) {
        this.data = data;
        return super.load(data);
    }
    prepend(element) {
        this.reset(true);
        this.data.unshift(element);
        return super.prepend(element);
    }
    append(element) {
        this.reset(true);
        this.data.push(element);
        return super.append(element);
    }
    add(element) {
        this.data.push(element);
        return super.add(element);
    }
    remove(element) {
        this.data = this.data.filter(el => el !== element);
        return super.remove(element);
    }
    update(element, values) {
        return new Promise((resolve, reject) => {
            this.find(element).then((found) => {
                found = deepExtend(found, values);
                super.update(found, values).then(resolve).catch(reject);
            }).catch(reject);
        });
    }
    find(element) {
        const found = this.data.find(el => el === element);
        if (found) {
            return Promise.resolve(found);
        }
        return Promise.reject(new Error('Element was not found in the dataset'));
    }
    getElements() {
        const data = this.data.slice(0);
        return Promise.resolve(this.prepareData(data));
    }
    getFilteredAndSorted() {
        let data = this.data.slice(0);
        this.prepareData(data);
        return Promise.resolve(this.filteredAndSorted);
    }
    getAll() {
        const data = this.data.slice(0);
        return Promise.resolve(data);
    }
    reset(silent = false) {
        if (silent) {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
            this.sortConf = [];
            this.pagingConf['page'] = 1;
        }
        else {
            this.setFilter([], true, false);
            this.setSort([], false);
            this.setPage(1);
        }
    }
    empty() {
        this.data = [];
        return super.empty();
    }
    count() {
        return this.filteredAndSorted.length;
    }
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, direction: asc|desc|null, compare: Function|null},
     * ]
     * @param conf
     * @param doEmit
     * @returns {LocalDataSource}
     */
    setSort(conf, doEmit = true) {
        if (conf !== null) {
            conf.forEach((fieldConf) => {
                if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                    throw new Error('Sort configuration object is not valid');
                }
            });
            this.sortConf = conf;
        }
        super.setSort(conf, doEmit);
        return this;
    }
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, search: string, filter: Function|null},
     * ]
     * @param conf
     * @param andOperator
     * @param doEmit
     * @returns {LocalDataSource}
     */
    setFilter(conf, andOperator = true, doEmit = true) {
        if (conf && conf.length > 0) {
            conf.forEach((fieldConf) => {
                this.addFilter(fieldConf, andOperator, false);
            });
        }
        else {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
        }
        this.filterConf.andOperator = andOperator;
        this.pagingConf['page'] = 1;
        super.setFilter(conf, andOperator, doEmit);
        return this;
    }
    addFilter(fieldConf, andOperator = true, doEmit = true) {
        if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
            throw new Error('Filter configuration object is not valid');
        }
        let found = false;
        this.filterConf.filters.forEach((currentFieldConf, index) => {
            if (currentFieldConf['field'] === fieldConf['field']) {
                this.filterConf.filters[index] = fieldConf;
                found = true;
            }
        });
        if (!found) {
            this.filterConf.filters.push(fieldConf);
        }
        this.filterConf.andOperator = andOperator;
        super.addFilter(fieldConf, andOperator, doEmit);
        return this;
    }
    setPaging(page, perPage, doEmit = true) {
        this.pagingConf['page'] = page;
        this.pagingConf['perPage'] = perPage;
        super.setPaging(page, perPage, doEmit);
        return this;
    }
    setPage(page, doEmit = true) {
        this.pagingConf['page'] = page;
        super.setPage(page, doEmit);
        return this;
    }
    getSort() {
        return this.sortConf;
    }
    getFilter() {
        return this.filterConf;
    }
    getPaging() {
        return this.pagingConf;
    }
    prepareData(data) {
        data = this.filter(data);
        data = this.sort(data);
        this.filteredAndSorted = data.slice(0);
        return this.paginate(data);
    }
    sort(data) {
        if (this.sortConf) {
            this.sortConf.forEach((fieldConf) => {
                data = LocalSorter
                    .sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
            });
        }
        return data;
    }
    // TODO: refactor?
    filter(data) {
        if (this.filterConf.filters) {
            if (this.filterConf.andOperator) {
                this.filterConf.filters.forEach((fieldConf) => {
                    if (fieldConf['search'].length > 0) {
                        data = LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                    }
                });
            }
            else {
                let mergedData = [];
                this.filterConf.filters.forEach((fieldConf) => {
                    if (fieldConf['search'].length > 0) {
                        mergedData = mergedData.concat(LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                    }
                });
                // remove non unique items
                data = mergedData.filter((elem, pos, arr) => {
                    return arr.indexOf(elem) === pos;
                });
            }
        }
        return data;
    }
    paginate(data) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            data = LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
        }
        return data;
    }
}

let Ng2SmartTableComponent = class Ng2SmartTableComponent {
    constructor() {
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
            rowClassFunction: () => ""
        };
        this.isAllSelected = false;
    }
    ngOnChanges(changes) {
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
    }
    editRowSelect(row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    }
    onUserSelectRow(row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    }
    onRowHover(row) {
        this.rowHover.emit(row);
    }
    multipleSelectRow(row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    }
    onSelectAllRows($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    }
    onSelectRow(row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    }
    onMultipleSelectRow(row) {
        this.emitSelectRow(row);
    }
    initGrid() {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe((row) => this.emitSelectRow(row));
    }
    prepareSource() {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }
        return new LocalDataSource();
    }
    prepareSettings() {
        return deepExtend({}, this.defaultSettings, this.settings);
    }
    changePage($event) {
        this.resetAllSelector();
    }
    sort($event) {
        this.resetAllSelector();
    }
    filter($event) {
        this.resetAllSelector();
    }
    resetAllSelector() {
        this.isAllSelected = false;
    }
    emitUserSelectRow(row) {
        const selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r) => r.getData()) : [],
        });
    }
    emitSelectRow(row) {
        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "settings", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "rowSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "userRowSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "delete", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "edit", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "create", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "custom", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "deleteConfirm", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "editConfirm", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "createConfirm", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Ng2SmartTableComponent.prototype, "rowHover", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "onSortTable", void 0);
Ng2SmartTableComponent = __decorate([
    Component({
        selector: 'ng2-smart-table',
        template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\r\n\r\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\r\n                      [grid]=\"grid\"\r\n                      [isAllSelected]=\"isAllSelected\"\r\n                      [source]=\"source\"\r\n                      [createConfirm]=\"createConfirm\"\r\n                      (create)=\"create.emit($event)\"\r\n                      (selectAllRows)=\"onSelectAllRows($event)\"\r\n                      (sort)=\"sort($event)\"\r\n                      (onSortTable)=\"onSortTable.emit($event)\"\r\n                      (filter)=\"filter($event)\">\r\n  </thead>\r\n\r\n  <tbody ng2-st-tbody [grid]=\"grid\"\r\n                      [source]=\"source\"\r\n                      [deleteConfirm]=\"deleteConfirm\"\r\n                      [editConfirm]=\"editConfirm\"\r\n                      [rowClassFunction]=\"rowClassFunction\"\r\n                      (edit)=\"edit.emit($event)\"\r\n                      (delete)=\"delete.emit($event)\"\r\n                      (custom)=\"custom.emit($event)\"\r\n                      (userSelectRow)=\"onUserSelectRow($event)\"\r\n                      (editRowSelect)=\"editRowSelect($event)\"\r\n                      (multipleSelectRow)=\"multipleSelectRow($event)\"\r\n                      (rowHover)=\"onRowHover($event)\">\r\n  </tbody>\r\n\r\n</table>\r\n\r\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\r\n                        [source]=\"source\"\r\n                        [perPageSelect]=\"perPageSelect\"\r\n                        (changePage)=\"changePage($event)\">\r\n</ng2-smart-table-pager>\r\n",
        styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}"]
    })
], Ng2SmartTableComponent);

let Ng2SmartTableModule = class Ng2SmartTableModule {
};
Ng2SmartTableModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            CellModule,
            FilterModule,
            PagerModule,
            TBodyModule,
            THeadModule,
        ],
        declarations: [
            Ng2SmartTableComponent,
        ],
        exports: [
            Ng2SmartTableComponent,
        ],
    })
], Ng2SmartTableModule);

class ServerSourceConf {
    constructor({ endPoint = '', sortFieldKey = '', sortDirKey = '', pagerPageKey = '', pagerLimitKey = '', filterFieldKey = '', totalKey = '', dataKey = '' } = {}) {
        this.endPoint = endPoint ? endPoint : '';
        this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
        this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
        this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
        this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
        this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
        this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
        this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
    }
}
ServerSourceConf.SORT_FIELD_KEY = '_sort';
ServerSourceConf.SORT_DIR_KEY = '_order';
ServerSourceConf.PAGER_PAGE_KEY = '_page';
ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
ServerSourceConf.TOTAL_KEY = 'x-total-count';
ServerSourceConf.DATA_KEY = '';

class ServerDataSource extends LocalDataSource {
    constructor(http, conf = {}) {
        super();
        this.http = http;
        this.lastRequestCount = 0;
        this.conf = new ServerSourceConf(conf);
        if (!this.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
        }
    }
    count() {
        return this.lastRequestCount;
    }
    getElements() {
        return this.requestElements()
            .pipe(map(res => {
            this.lastRequestCount = this.extractTotalFromResponse(res);
            this.data = this.extractDataFromResponse(res);
            return this.data;
        })).toPromise();
    }
    /**
     * Extracts array of data from server response
     * @param res
     * @returns {any}
     */
    extractDataFromResponse(res) {
        const rawData = res.body;
        const data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;
        if (data instanceof Array) {
            return data;
        }
        throw new Error(`Data must be an array.
    Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
    }
    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     * @returns {any}
     */
    extractTotalFromResponse(res) {
        if (res.headers.has(this.conf.totalKey)) {
            return +res.headers.get(this.conf.totalKey);
        }
        else {
            const rawData = res.body;
            return getDeepFromObject(rawData, this.conf.totalKey, 0);
        }
    }
    requestElements() {
        let httpParams = this.createRequesParams();
        return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
    }
    createRequesParams() {
        let httpParams = new HttpParams();
        httpParams = this.addSortRequestParams(httpParams);
        httpParams = this.addFilterRequestParams(httpParams);
        return this.addPagerRequestParams(httpParams);
    }
    addSortRequestParams(httpParams) {
        if (this.sortConf) {
            this.sortConf.forEach((fieldConf) => {
                httpParams = httpParams.set(this.conf.sortFieldKey, fieldConf.field);
                httpParams = httpParams.set(this.conf.sortDirKey, fieldConf.direction.toUpperCase());
            });
        }
        return httpParams;
    }
    addFilterRequestParams(httpParams) {
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach((fieldConf) => {
                if (fieldConf['search']) {
                    httpParams = httpParams.set(this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                }
            });
        }
        return httpParams;
    }
    addPagerRequestParams(httpParams) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
            httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
        }
        return httpParams;
    }
}

export { Cell, DefaultEditor, DefaultFilter, LocalDataSource, Ng2SmartTableModule, ServerDataSource, CellModule as ɵa, CellComponent as ɵb, TbodyEditDeleteComponent as ɵba, TbodyCustomComponent as ɵbb, Ng2SmartTableTbodyComponent as ɵbc, THeadModule as ɵbd, ActionsComponent as ɵbe, ActionsTitleComponent as ɵbf, AddButtonComponent as ɵbg, CheckboxSelectAllComponent as ɵbh, ColumnTitleComponent as ɵbi, TitleComponent as ɵbj, TheadFitlersRowComponent as ɵbk, TheadFormRowComponent as ɵbl, TheadTitlesRowComponent as ɵbm, Ng2SmartTableTheadComponent as ɵbn, Ng2SmartTableComponent as ɵbo, Row as ɵbp, DataSet as ɵbq, DataSource as ɵbr, CustomEditComponent as ɵc, EditCellDefault as ɵd, DefaultEditComponent as ɵe, EditCellComponent as ɵf, CheckboxEditorComponent as ɵg, CompleterEditorComponent as ɵh, InputEditorComponent as ɵi, SelectEditorComponent as ɵj, TextareaEditorComponent as ɵk, CustomViewComponent as ɵl, ViewCellComponent as ɵm, FilterModule as ɵn, FilterComponent as ɵo, FilterDefault as ɵp, DefaultFilterComponent as ɵq, CustomFilterComponent as ɵr, CheckboxFilterComponent as ɵs, CompleterFilterComponent as ɵt, InputFilterComponent as ɵu, SelectFilterComponent as ɵv, PagerModule as ɵw, PagerComponent as ɵx, TBodyModule as ɵy, TbodyCreateCancelComponent as ɵz };
//# sourceMappingURL=ng2-smart-table.js.map
