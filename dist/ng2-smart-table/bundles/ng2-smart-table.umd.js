(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('ng2-completer'), require('rxjs'), require('lodash'), require('rxjs/operators'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('ng2-smart-table', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'ng2-completer', 'rxjs', 'lodash', 'rxjs/operators', '@angular/common/http'], factory) :
    (global = global || self, factory(global['ng2-smart-table'] = {}, global.ng.core, global.ng.common, global.ng.forms, global.ng2Completer, global.rxjs, global.lodash, global.rxjs.operators, global.ng.common.http));
}(this, function (exports, core, common, forms, ng2Completer, rxjs, lodash, operators, http) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * Extending object that entered in first argument.
     *
     * Returns extended object or false if have no target object or incorrect type.
     *
     * If you wish to clone source object (without modify it), just use empty new
     * object as first argument, like this:
     *   deepExtend({}, yourObj_1, [yourObj_N]);
     */
    var deepExtend = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        if (arguments.length < 1 || typeof arguments[0] !== 'object') {
            return false;
        }
        if (arguments.length < 2) {
            return arguments[0];
        }
        var target = arguments[0];
        // convert arguments to array and cut off target object
        var args = Array.prototype.slice.call(arguments, 1);
        var val, src;
        args.forEach(function (obj) {
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
                    target[key] = lodash.cloneDeep(val);
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
    var Deferred = /** @class */ (function () {
        function Deferred() {
            var _this = this;
            this.promise = new Promise(function (resolve, reject) {
                _this.resolve = resolve;
                _this.reject = reject;
            });
        }
        return Deferred;
    }());
    // getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
    function getDeepFromObject(object, name, defaultValue) {
        if (object === void 0) { object = {}; }
        var keys = name.split('.');
        // clone the object
        var level = deepExtend({}, object);
        keys.forEach(function (k) {
            if (level && typeof level[k] !== 'undefined') {
                level = level[k];
            }
        });
        return typeof level === 'undefined' ? defaultValue : level;
    }

    function prepareValue(value) { return value; }
    var Cell = /** @class */ (function () {
        function Cell(value, row, column, dataSet) {
            this.value = value;
            this.row = row;
            this.column = column;
            this.dataSet = dataSet;
            this.newValue = '';
            this.newValue = value;
        }
        Cell.prototype.getColumn = function () {
            return this.column;
        };
        Cell.prototype.getRow = function () {
            return this.row;
        };
        Cell.prototype.getValue = function () {
            var valid = this.column.getValuePrepareFunction() instanceof Function;
            var prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
            return prepare.call(null, this.value, this.row.getData(), this);
        };
        Cell.prototype.setValue = function (value) {
            this.newValue = value;
        };
        Cell.prototype.getId = function () {
            return this.getColumn().id;
        };
        Cell.prototype.getTitle = function () {
            return this.getColumn().title;
        };
        Cell.prototype.isEditable = function () {
            if (this.getRow().index === -1) {
                return this.getColumn().isAddable;
            }
            else {
                return this.getColumn().isEditable;
            }
        };
        Cell.PREPARE = prepareValue;
        return Cell;
    }());

    var Row = /** @class */ (function () {
        function Row(index, data, _dataSet) {
            this.index = index;
            this.data = data;
            this._dataSet = _dataSet;
            this.isSelected = false;
            this.isInEditing = false;
            this.cells = [];
            this.process();
        }
        Row.prototype.getCell = function (column) {
            return this.cells.find(function (el) { return el.getColumn() === column; });
        };
        Row.prototype.getCells = function () {
            return this.cells;
        };
        Row.prototype.getData = function () {
            return this.data;
        };
        Row.prototype.getIsSelected = function () {
            return this.isSelected;
        };
        Row.prototype.getNewData = function () {
            var values = Object.assign({}, this.data);
            this.getCells().forEach(function (cell) { return values[cell.getColumn().id] = cell.newValue; });
            return values;
        };
        Row.prototype.setData = function (data) {
            this.data = data;
            this.process();
        };
        Row.prototype.process = function () {
            var _this = this;
            this.cells = [];
            this._dataSet.getColumns().forEach(function (column) {
                var cell = _this.createCell(column);
                _this.cells.push(cell);
            });
        };
        Row.prototype.createCell = function (column) {
            var defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
            var value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
            return new Cell(value, this, column, this._dataSet);
        };
        return Row;
    }());

    var Column = /** @class */ (function () {
        function Column(id, settings, dataSet) {
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
        Column.prototype.getOnComponentInitFunction = function () {
            return this.onComponentInitFunction;
        };
        Column.prototype.getCompareFunction = function () {
            return this.compareFunction;
        };
        Column.prototype.getValuePrepareFunction = function () {
            return this.valuePrepareFunction;
        };
        Column.prototype.getFilterFunction = function () {
            return this.filterFunction;
        };
        Column.prototype.getConfig = function () {
            return this.editor && this.editor.config;
        };
        Column.prototype.getFilterType = function () {
            return this.filter && this.filter.type;
        };
        Column.prototype.getFilterConfig = function () {
            return this.filter && this.filter.config;
        };
        Column.prototype.process = function () {
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
        };
        Column.prototype.prepareType = function () {
            return this.settings['type'] || this.determineType();
        };
        Column.prototype.prepareSortDirection = function () {
            return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
        };
        Column.prototype.determineType = function () {
            // TODO: determine type by data
            return 'text';
        };
        return Column;
    }());

    var DataSet = /** @class */ (function () {
        function DataSet(data, columnSettings) {
            if (data === void 0) { data = []; }
            this.columnSettings = columnSettings;
            this.data = [];
            this.columns = [];
            this.rows = [];
            this.willSelect = 'first';
            this.createColumns(columnSettings);
            this.setData(data);
            this.createNewRow();
        }
        DataSet.prototype.setData = function (data) {
            this.data = data;
            this.createRows();
        };
        DataSet.prototype.getColumns = function () {
            return this.columns;
        };
        DataSet.prototype.getRows = function () {
            return this.rows;
        };
        DataSet.prototype.getFirstRow = function () {
            return this.rows[0];
        };
        DataSet.prototype.getLastRow = function () {
            return this.rows[this.rows.length - 1];
        };
        DataSet.prototype.findRowByData = function (data) {
            return this.rows.find(function (row) { return row.getData() === data; });
        };
        DataSet.prototype.deselectAll = function () {
            this.rows.forEach(function (row) {
                row.isSelected = false;
            });
        };
        DataSet.prototype.selectRow = function (row) {
            var previousIsSelected = row.isSelected;
            this.deselectAll();
            row.isSelected = !previousIsSelected;
            this.selectedRow = row;
            return this.selectedRow;
        };
        DataSet.prototype.multipleSelectRow = function (row) {
            row.isSelected = !row.isSelected;
            this.selectedRow = row;
            return this.selectedRow;
        };
        DataSet.prototype.selectPreviousRow = function () {
            if (this.rows.length > 0) {
                var index = this.selectedRow ? this.selectedRow.index : 0;
                if (index > this.rows.length - 1) {
                    index = this.rows.length - 1;
                }
                this.selectRow(this.rows[index]);
                return this.selectedRow;
            }
        };
        DataSet.prototype.selectFirstRow = function () {
            if (this.rows.length > 0) {
                this.selectRow(this.rows[0]);
                return this.selectedRow;
            }
        };
        DataSet.prototype.selectLastRow = function () {
            if (this.rows.length > 0) {
                this.selectRow(this.rows[this.rows.length - 1]);
                return this.selectedRow;
            }
        };
        DataSet.prototype.willSelectFirstRow = function () {
            this.willSelect = 'first';
        };
        DataSet.prototype.willSelectLastRow = function () {
            this.willSelect = 'last';
        };
        DataSet.prototype.select = function () {
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
        };
        DataSet.prototype.createNewRow = function () {
            this.newRow = new Row(-1, {}, this);
            this.newRow.isInEditing = true;
        };
        /**
         * Create columns by mapping from the settings
         * @param settings
         * @private
         */
        DataSet.prototype.createColumns = function (settings) {
            for (var id in settings) {
                if (settings.hasOwnProperty(id)) {
                    this.columns.push(new Column(id, settings[id], this));
                }
            }
        };
        /**
         * Create rows based on current data prepared in data source
         * @private
         */
        DataSet.prototype.createRows = function () {
            var _this = this;
            this.rows = [];
            this.data.forEach(function (el, index) {
                _this.rows.push(new Row(index, el, _this));
            });
        };
        return DataSet;
    }());

    var Grid = /** @class */ (function () {
        function Grid(source, settings) {
            this.createFormShown = false;
            this.onSelectRowSource = new rxjs.Subject();
            this.setSettings(settings);
            this.setSource(source);
        }
        Grid.prototype.showActionColumn = function (position) {
            return this.isCurrentActionsPosition(position) && this.isActionsVisible();
        };
        Grid.prototype.isCurrentActionsPosition = function (position) {
            return position == this.getSetting('actions.position');
        };
        Grid.prototype.isActionsVisible = function () {
            return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
        };
        Grid.prototype.isMultiSelectVisible = function () {
            return this.getSetting('selectMode') === 'multi';
        };
        Grid.prototype.getNewRow = function () {
            return this.dataSet.newRow;
        };
        Grid.prototype.setSettings = function (settings) {
            this.settings = settings;
            this.dataSet = new DataSet([], this.getSetting('columns'));
            if (this.source) {
                this.source.refresh();
            }
        };
        Grid.prototype.getDataSet = function () {
            return this.dataSet;
        };
        Grid.prototype.setSource = function (source) {
            var _this = this;
            this.source = this.prepareSource(source);
            this.source.onChanged().subscribe(function (changes) { return _this.processDataChange(changes); });
            this.source.onUpdated().subscribe(function (data) {
                var changedRow = _this.dataSet.findRowByData(data);
                changedRow.setData(data);
            });
        };
        Grid.prototype.getSetting = function (name, defaultValue) {
            return getDeepFromObject(this.settings, name, defaultValue);
        };
        Grid.prototype.getColumns = function () {
            return this.dataSet.getColumns();
        };
        Grid.prototype.getRows = function () {
            return this.dataSet.getRows();
        };
        Grid.prototype.selectRow = function (row) {
            this.dataSet.selectRow(row);
        };
        Grid.prototype.multipleSelectRow = function (row) {
            this.dataSet.multipleSelectRow(row);
        };
        Grid.prototype.onSelectRow = function () {
            return this.onSelectRowSource.asObservable();
        };
        Grid.prototype.edit = function (row) {
            row.isInEditing = true;
        };
        Grid.prototype.create = function (row, confirmEmitter) {
            var _this = this;
            var deferred = new Deferred();
            deferred.promise.then(function (newData) {
                newData = newData ? newData : row.getNewData();
                if (deferred.resolve.skipAdd) {
                    _this.createFormShown = false;
                }
                else {
                    _this.source.prepend(newData).then(function () {
                        _this.createFormShown = false;
                        _this.dataSet.createNewRow();
                    });
                }
            }).catch(function (err) {
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
        };
        Grid.prototype.save = function (row, confirmEmitter) {
            var _this = this;
            var deferred = new Deferred();
            deferred.promise.then(function (newData) {
                newData = newData ? newData : row.getNewData();
                if (deferred.resolve.skipEdit) {
                    row.isInEditing = false;
                }
                else {
                    _this.source.update(row.getData(), newData).then(function () {
                        row.isInEditing = false;
                    });
                }
            }).catch(function (err) {
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
        };
        Grid.prototype.delete = function (row, confirmEmitter) {
            var _this = this;
            var deferred = new Deferred();
            deferred.promise.then(function () {
                _this.source.remove(row.getData());
            }).catch(function (err) {
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
        };
        Grid.prototype.processDataChange = function (changes) {
            if (this.shouldProcessChange(changes)) {
                this.dataSet.setData(changes['elements']);
                if (this.getSetting('selectMode') !== 'multi') {
                    var row = this.determineRowToSelect(changes);
                    if (row) {
                        this.onSelectRowSource.next(row);
                    }
                }
            }
        };
        Grid.prototype.shouldProcessChange = function (changes) {
            if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
                return true;
            }
            else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
                return true;
            }
            return false;
        };
        // TODO: move to selectable? Separate directive
        Grid.prototype.determineRowToSelect = function (changes) {
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
        };
        Grid.prototype.prepareSource = function (source) {
            var initialSource = this.getInitialSort();
            if (initialSource && initialSource['field'] && initialSource['direction']) {
                source.setSort([initialSource], false);
            }
            if (this.getSetting('pager.display') === true) {
                source.setPaging(1, this.getSetting('pager.perPage'), false);
            }
            source.refresh();
            return source;
        };
        Grid.prototype.getInitialSort = function () {
            var sortConf = {};
            this.getColumns().forEach(function (column) {
                if (column.isSortable && column.defaultSortDirection) {
                    sortConf['field'] = column.id;
                    sortConf['direction'] = column.defaultSortDirection;
                    sortConf['compare'] = column.getCompareFunction();
                }
            });
            return sortConf;
        };
        Grid.prototype.getSelectedRows = function () {
            return this.dataSet.getRows()
                .filter(function (r) { return r.isSelected; });
        };
        Grid.prototype.selectAllRows = function (status) {
            this.dataSet.getRows()
                .forEach(function (r) { return r.isSelected = status; });
        };
        Grid.prototype.getFirstRow = function () {
            return this.dataSet.getFirstRow();
        };
        Grid.prototype.getLastRow = function () {
            return this.dataSet.getLastRow();
        };
        return Grid;
    }());

    var CellComponent = /** @class */ (function () {
        function CellComponent() {
            this.inputClass = '';
            this.mode = 'inline';
            this.isInEditing = false;
            this.edited = new core.EventEmitter();
        }
        CellComponent.prototype.onEdited = function (event) {
            if (this.isNew) {
                this.grid.create(this.grid.getNewRow(), this.createConfirm);
            }
            else {
                this.grid.save(this.row, this.editConfirm);
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Grid)
        ], CellComponent.prototype, "grid", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Row)
        ], CellComponent.prototype, "row", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.EventEmitter)
        ], CellComponent.prototype, "editConfirm", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.EventEmitter)
        ], CellComponent.prototype, "createConfirm", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CellComponent.prototype, "isNew", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Cell)
        ], CellComponent.prototype, "cell", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CellComponent.prototype, "inputClass", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CellComponent.prototype, "mode", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CellComponent.prototype, "isInEditing", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CellComponent.prototype, "edited", void 0);
        CellComponent = __decorate([
            core.Component({
                selector: 'ng2-smart-table-cell',
                template: "\n    <table-cell-view-mode *ngIf=\"!isInEditing\" [cell]=\"cell\"></table-cell-view-mode>\n    <table-cell-edit-mode *ngIf=\"isInEditing\" [cell]=\"cell\"\n                          [inputClass]=\"inputClass\"\n                          (edited)=\"onEdited($event)\">\n    </table-cell-edit-mode>\n  "
            })
        ], CellComponent);
        return CellComponent;
    }());

    var EditCellDefault = /** @class */ (function () {
        function EditCellDefault() {
            this.inputClass = '';
            this.edited = new core.EventEmitter();
        }
        EditCellDefault.prototype.onEdited = function (event) {
            this.edited.next(event);
            return false;
        };
        EditCellDefault.prototype.onStopEditing = function () {
            this.cell.getRow().isInEditing = false;
            return false;
        };
        EditCellDefault.prototype.onClick = function (event) {
            event.stopPropagation();
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Cell)
        ], EditCellDefault.prototype, "cell", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], EditCellDefault.prototype, "inputClass", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], EditCellDefault.prototype, "edited", void 0);
        return EditCellDefault;
    }());

    var CustomEditComponent = /** @class */ (function (_super) {
        __extends(CustomEditComponent, _super);
        function CustomEditComponent(resolver) {
            var _this = _super.call(this) || this;
            _this.resolver = resolver;
            return _this;
        }
        CustomEditComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (this.cell && !this.customComponent) {
                var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
                this.customComponent = this.dynamicTarget.createComponent(componentFactory);
                // set @Inputs and @Outputs of custom component
                this.customComponent.instance.cell = this.cell;
                this.customComponent.instance.inputClass = this.inputClass;
                this.customComponent.instance.onStopEditing.subscribe(function () { return _this.onStopEditing(); });
                this.customComponent.instance.onEdited.subscribe(function (event) { return _this.onEdited(event); });
                this.customComponent.instance.onClick.subscribe(function (event) { return _this.onClick(event); });
            }
        };
        CustomEditComponent.prototype.ngOnDestroy = function () {
            if (this.customComponent) {
                this.customComponent.destroy();
            }
        };
        __decorate([
            core.ViewChild('dynamicTarget', { read: core.ViewContainerRef, static: true }),
            __metadata("design:type", Object)
        ], CustomEditComponent.prototype, "dynamicTarget", void 0);
        CustomEditComponent = __decorate([
            core.Component({
                selector: 'table-cell-custom-editor',
                template: "\n    <ng-template #dynamicTarget></ng-template>\n  "
            }),
            __metadata("design:paramtypes", [core.ComponentFactoryResolver])
        ], CustomEditComponent);
        return CustomEditComponent;
    }(EditCellDefault));

    var DefaultEditComponent = /** @class */ (function (_super) {
        __extends(DefaultEditComponent, _super);
        function DefaultEditComponent() {
            return _super.call(this) || this;
        }
        DefaultEditComponent.prototype.getEditorType = function () {
            return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
        };
        DefaultEditComponent = __decorate([
            core.Component({
                selector: 'table-cell-default-editor',
                template: "<div [ngSwitch]=\"getEditorType()\">\r\n    <select-editor *ngSwitchCase=\"'list'\"\r\n                   [cell]=\"cell\"\r\n                   [inputClass]=\"inputClass\"\r\n                   (onClick)=\"onClick($event)\"\r\n                   (onEdited)=\"onEdited($event)\"\r\n                   (onStopEditing)=\"onStopEditing()\">\r\n    </select-editor>\r\n\r\n    <textarea-editor *ngSwitchCase=\"'textarea'\"\r\n                     [cell]=\"cell\"\r\n                     [inputClass]=\"inputClass\"\r\n                     (onClick)=\"onClick($event)\"\r\n                     (onEdited)=\"onEdited($event)\"\r\n                     (onStopEditing)=\"onStopEditing()\">\r\n    </textarea-editor>\r\n\r\n    <checkbox-editor *ngSwitchCase=\"'checkbox'\"\r\n                     [cell]=\"cell\"\r\n                     [inputClass]=\"inputClass\"\r\n                     (onClick)=\"onClick($event)\">\r\n    </checkbox-editor>\r\n\r\n    <completer-editor *ngSwitchCase=\"'completer'\"\r\n                      [cell]=\"cell\">\r\n    </completer-editor>\r\n\r\n    <input-editor *ngSwitchDefault\r\n                  [cell]=\"cell\"\r\n                  [inputClass]=\"inputClass\"\r\n                  (onClick)=\"onClick($event)\"\r\n                  (onEdited)=\"onEdited($event)\"\r\n                  (onStopEditing)=\"onStopEditing()\">\r\n    </input-editor>\r\n</div>"
            }),
            __metadata("design:paramtypes", [])
        ], DefaultEditComponent);
        return DefaultEditComponent;
    }(EditCellDefault));

    var EditCellComponent = /** @class */ (function () {
        function EditCellComponent() {
            this.inputClass = '';
            this.edited = new core.EventEmitter();
        }
        EditCellComponent.prototype.onEdited = function (event) {
            this.edited.next(event);
            return false;
        };
        EditCellComponent.prototype.getEditorType = function () {
            return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Cell)
        ], EditCellComponent.prototype, "cell", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], EditCellComponent.prototype, "inputClass", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], EditCellComponent.prototype, "edited", void 0);
        EditCellComponent = __decorate([
            core.Component({
                selector: 'table-cell-edit-mode',
                template: "\n      <div [ngSwitch]=\"getEditorType()\">\n        <table-cell-custom-editor *ngSwitchCase=\"'custom'\"\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-custom-editor>\n        <table-cell-default-editor *ngSwitchDefault\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-default-editor>\n      </div>\n    "
            })
        ], EditCellComponent);
        return EditCellComponent;
    }());

    var DefaultEditor = /** @class */ (function () {
        function DefaultEditor() {
            this.onStopEditing = new core.EventEmitter();
            this.onEdited = new core.EventEmitter();
            this.onClick = new core.EventEmitter();
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Cell)
        ], DefaultEditor.prototype, "cell", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], DefaultEditor.prototype, "inputClass", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], DefaultEditor.prototype, "onStopEditing", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], DefaultEditor.prototype, "onEdited", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], DefaultEditor.prototype, "onClick", void 0);
        return DefaultEditor;
    }());

    var CheckboxEditorComponent = /** @class */ (function (_super) {
        __extends(CheckboxEditorComponent, _super);
        function CheckboxEditorComponent() {
            return _super.call(this) || this;
        }
        CheckboxEditorComponent.prototype.onChange = function (event) {
            var trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
            var falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
            this.cell.newValue = event.target.checked ? trueVal : falseVal;
        };
        CheckboxEditorComponent = __decorate([
            core.Component({
                selector: 'checkbox-editor',
                template: "\n    <input [ngClass]=\"inputClass\"\n           type=\"checkbox\"\n           class=\"form-control\"\n           [name]=\"cell.getId()\"\n           [disabled]=\"!cell.isEditable()\"\n           [checked]=\"cell.getValue() == (cell.getColumn().getConfig()?.true || true)\"\n           (click)=\"onClick.emit($event)\"\n           (change)=\"onChange($event)\">\n    ",
                styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
            }),
            __metadata("design:paramtypes", [])
        ], CheckboxEditorComponent);
        return CheckboxEditorComponent;
    }(DefaultEditor));

    var CompleterEditorComponent = /** @class */ (function (_super) {
        __extends(CompleterEditorComponent, _super);
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
        CompleterEditorComponent = __decorate([
            core.Component({
                selector: 'completer-editor',
                template: "\n    <ng2-completer [(ngModel)]=\"completerStr\"\n                   [dataService]=\"cell.getColumn().getConfig().completer.dataService\"\n                   [minSearchLength]=\"cell.getColumn().getConfig().completer.minSearchLength || 0\"\n                   [pause]=\"cell.getColumn().getConfig().completer.pause || 0\"\n                   [placeholder]=\"cell.getColumn().getConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"onEditedCompleter($event)\">\n    </ng2-completer>\n    "
            }),
            __metadata("design:paramtypes", [ng2Completer.CompleterService])
        ], CompleterEditorComponent);
        return CompleterEditorComponent;
    }(DefaultEditor));

    var InputEditorComponent = /** @class */ (function (_super) {
        __extends(InputEditorComponent, _super);
        function InputEditorComponent() {
            return _super.call(this) || this;
        }
        InputEditorComponent = __decorate([
            core.Component({
                selector: 'input-editor',
                template: "\n    <input [ngClass]=\"inputClass\"\n           class=\"form-control\"\n           [(ngModel)]=\"cell.newValue\"\n           [name]=\"cell.getId()\"\n           [placeholder]=\"cell.getTitle()\"\n           [disabled]=\"!cell.isEditable()\"\n           (click)=\"onClick.emit($event)\"\n           (keydown.enter)=\"onEdited.emit($event)\"\n           (keydown.esc)=\"onStopEditing.emit()\">\n    ",
                styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
            }),
            __metadata("design:paramtypes", [])
        ], InputEditorComponent);
        return InputEditorComponent;
    }(DefaultEditor));

    var SelectEditorComponent = /** @class */ (function (_super) {
        __extends(SelectEditorComponent, _super);
        function SelectEditorComponent() {
            return _super.call(this) || this;
        }
        SelectEditorComponent = __decorate([
            core.Component({
                selector: 'select-editor',
                template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"cell.newValue\"\n            [name]=\"cell.getId()\"\n            [disabled]=\"!cell.isEditable()\"\n            (click)=\"onClick.emit($event)\"\n            (keydown.enter)=\"onEdited.emit($event)\"\n            (keydown.esc)=\"onStopEditing.emit()\">\n\n        <option *ngFor=\"let option of cell.getColumn().getConfig()?.list\" [value]=\"option.value\"\n                [selected]=\"option.value === cell.getValue()\">{{ option.title }}\n        </option>\n    </select>\n    "
            }),
            __metadata("design:paramtypes", [])
        ], SelectEditorComponent);
        return SelectEditorComponent;
    }(DefaultEditor));

    var TextareaEditorComponent = /** @class */ (function (_super) {
        __extends(TextareaEditorComponent, _super);
        function TextareaEditorComponent() {
            return _super.call(this) || this;
        }
        TextareaEditorComponent = __decorate([
            core.Component({
                selector: 'textarea-editor',
                template: "\n    <textarea [ngClass]=\"inputClass\"\n              class=\"form-control\"\n              [(ngModel)]=\"cell.newValue\"\n              [name]=\"cell.getId()\"\n              [disabled]=\"!cell.isEditable()\"\n              [placeholder]=\"cell.getTitle()\"\n              (click)=\"onClick.emit($event)\"\n              (keydown.enter)=\"onEdited.emit($event)\"\n              (keydown.esc)=\"onStopEditing.emit()\">\n    </textarea>\n    ",
                styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
            }),
            __metadata("design:paramtypes", [])
        ], TextareaEditorComponent);
        return TextareaEditorComponent;
    }(DefaultEditor));

    var CustomViewComponent = /** @class */ (function () {
        function CustomViewComponent(resolver) {
            this.resolver = resolver;
        }
        CustomViewComponent.prototype.ngOnInit = function () {
            if (this.cell && !this.customComponent) {
                this.createCustomComponent();
                this.callOnComponentInit();
                this.patchInstance();
            }
        };
        CustomViewComponent.prototype.ngOnDestroy = function () {
            if (this.customComponent) {
                this.customComponent.destroy();
            }
        };
        CustomViewComponent.prototype.createCustomComponent = function () {
            var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
        };
        CustomViewComponent.prototype.callOnComponentInit = function () {
            var onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
            onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
        };
        CustomViewComponent.prototype.patchInstance = function () {
            Object.assign(this.customComponent.instance, this.getPatch());
        };
        CustomViewComponent.prototype.getPatch = function () {
            return {
                value: this.cell.getValue(),
                rowData: this.cell.getRow().getData()
            };
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Cell)
        ], CustomViewComponent.prototype, "cell", void 0);
        __decorate([
            core.ViewChild('dynamicTarget', { read: core.ViewContainerRef, static: true }),
            __metadata("design:type", Object)
        ], CustomViewComponent.prototype, "dynamicTarget", void 0);
        CustomViewComponent = __decorate([
            core.Component({
                selector: 'custom-view-component',
                template: "\n    <ng-template #dynamicTarget></ng-template>\n  "
            }),
            __metadata("design:paramtypes", [core.ComponentFactoryResolver])
        ], CustomViewComponent);
        return CustomViewComponent;
    }());

    var ViewCellComponent = /** @class */ (function () {
        function ViewCellComponent() {
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Cell)
        ], ViewCellComponent.prototype, "cell", void 0);
        ViewCellComponent = __decorate([
            core.Component({
                selector: 'table-cell-view-mode',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "\n    <div [ngSwitch]=\"cell.getColumn().type\">\n        <custom-view-component *ngSwitchCase=\"'custom'\" [cell]=\"cell\"></custom-view-component>\n        <div *ngSwitchCase=\"'html'\" [innerHTML]=\"cell.getValue()\"></div>\n        <div *ngSwitchDefault>{{ cell.getValue() }}</div>\n    </div>\n    "
            })
        ], ViewCellComponent);
        return ViewCellComponent;
    }());

    var CELL_COMPONENTS = [
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
    var CellModule = /** @class */ (function () {
        function CellModule() {
        }
        CellModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    ng2Completer.Ng2CompleterModule,
                ],
                declarations: __spread(CELL_COMPONENTS),
                exports: __spread(CELL_COMPONENTS),
            })
        ], CellModule);
        return CellModule;
    }());

    var DataSource = /** @class */ (function () {
        function DataSource() {
            this.onChangedSource = new rxjs.Subject();
            this.onAddedSource = new rxjs.Subject();
            this.onUpdatedSource = new rxjs.Subject();
            this.onRemovedSource = new rxjs.Subject();
        }
        DataSource.prototype.refresh = function () {
            this.emitOnChanged('refresh');
        };
        DataSource.prototype.load = function (data) {
            this.emitOnChanged('load');
            return Promise.resolve();
        };
        DataSource.prototype.onChanged = function () {
            return this.onChangedSource.asObservable();
        };
        DataSource.prototype.onAdded = function () {
            return this.onAddedSource.asObservable();
        };
        DataSource.prototype.onUpdated = function () {
            return this.onUpdatedSource.asObservable();
        };
        DataSource.prototype.onRemoved = function () {
            return this.onRemovedSource.asObservable();
        };
        DataSource.prototype.prepend = function (element) {
            this.emitOnAdded(element);
            this.emitOnChanged('prepend');
            return Promise.resolve();
        };
        DataSource.prototype.append = function (element) {
            this.emitOnAdded(element);
            this.emitOnChanged('append');
            return Promise.resolve();
        };
        DataSource.prototype.add = function (element) {
            this.emitOnAdded(element);
            this.emitOnChanged('add');
            return Promise.resolve();
        };
        DataSource.prototype.remove = function (element) {
            this.emitOnRemoved(element);
            this.emitOnChanged('remove');
            return Promise.resolve();
        };
        DataSource.prototype.update = function (element, values) {
            this.emitOnUpdated(element);
            this.emitOnChanged('update');
            return Promise.resolve();
        };
        DataSource.prototype.empty = function () {
            this.emitOnChanged('empty');
            return Promise.resolve();
        };
        DataSource.prototype.setSort = function (conf, doEmit) {
            if (doEmit) {
                this.emitOnChanged('sort');
            }
        };
        DataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
            if (doEmit) {
                this.emitOnChanged('filter');
            }
        };
        DataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
            if (doEmit) {
                this.emitOnChanged('filter');
            }
        };
        DataSource.prototype.setPaging = function (page, perPage, doEmit) {
            if (doEmit) {
                this.emitOnChanged('paging');
            }
        };
        DataSource.prototype.setPage = function (page, doEmit) {
            if (doEmit) {
                this.emitOnChanged('page');
            }
        };
        DataSource.prototype.emitOnRemoved = function (element) {
            this.onRemovedSource.next(element);
        };
        DataSource.prototype.emitOnUpdated = function (element) {
            this.onUpdatedSource.next(element);
        };
        DataSource.prototype.emitOnAdded = function (element) {
            this.onAddedSource.next(element);
        };
        DataSource.prototype.emitOnChanged = function (action) {
            var _this = this;
            this.getElements().then(function (elements) { return _this.onChangedSource.next({
                action: action,
                elements: elements,
                paging: _this.getPaging(),
                filter: _this.getFilter(),
                sort: _this.getSort(),
            }); });
        };
        return DataSource;
    }());

    var FilterDefault = /** @class */ (function () {
        function FilterDefault() {
            this.inputClass = '';
            this.filter = new core.EventEmitter();
            this.query = '';
        }
        FilterDefault.prototype.onFilter = function (query) {
            this.source.addFilter({
                field: this.column.id,
                search: query,
                filter: this.column.getFilterFunction(),
            });
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Column)
        ], FilterDefault.prototype, "column", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", DataSource)
        ], FilterDefault.prototype, "source", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], FilterDefault.prototype, "inputClass", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], FilterDefault.prototype, "filter", void 0);
        return FilterDefault;
    }());

    var FilterComponent = /** @class */ (function (_super) {
        __extends(FilterComponent, _super);
        function FilterComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.query = '';
            return _this;
        }
        FilterComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.source) {
                if (!changes.source.firstChange) {
                    this.dataChangedSub.unsubscribe();
                }
                this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                    var filterConf = _this.source.getFilter();
                    if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                        _this.query = '';
                        // add a check for existing filters an set the query if one exists for this column
                        // this covers instances where the filter is set by user code while maintaining existing functionality
                    }
                    else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                        filterConf.filters.forEach(function (k, v) {
                            if (k.field == _this.column.id) {
                                _this.query = k.search;
                            }
                        });
                    }
                });
            }
        };
        FilterComponent = __decorate([
            core.Component({
                selector: 'ng2-smart-table-filter',
                template: "\n      <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n        <custom-table-filter *ngSwitchCase=\"'custom'\"\n                             [query]=\"query\"\n                             [column]=\"column\"\n                             [source]=\"source\"\n                             [inputClass]=\"inputClass\"\n                             (filter)=\"onFilter($event)\">\n        </custom-table-filter>\n        <default-table-filter *ngSwitchDefault\n                              [query]=\"query\"\n                              [column]=\"column\"\n                              [source]=\"source\"\n                              [inputClass]=\"inputClass\"\n                              (filter)=\"onFilter($event)\">\n        </default-table-filter>\n      </div>\n    ",
                styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}"]
            })
        ], FilterComponent);
        return FilterComponent;
    }(FilterDefault));

    var DefaultFilterComponent = /** @class */ (function (_super) {
        __extends(DefaultFilterComponent, _super);
        function DefaultFilterComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], DefaultFilterComponent.prototype, "query", void 0);
        DefaultFilterComponent = __decorate([
            core.Component({
                selector: 'default-table-filter',
                template: "\n    <ng-container [ngSwitch]=\"column.getFilterType()\">\n      <select-filter *ngSwitchCase=\"'list'\"\n                     [query]=\"query\"\n                     [ngClass]=\"inputClass\"\n                     [column]=\"column\"\n                     (filter)=\"onFilter($event)\">\n      </select-filter>\n      <checkbox-filter *ngSwitchCase=\"'checkbox'\"\n                       [query]=\"query\"\n                       [ngClass]=\"inputClass\"\n                       [column]=\"column\"\n                       (filter)=\"onFilter($event)\">\n      </checkbox-filter>\n      <completer-filter *ngSwitchCase=\"'completer'\"\n                        [query]=\"query\"\n                        [ngClass]=\"inputClass\"\n                        [column]=\"column\"\n                        (filter)=\"onFilter($event)\">\n      </completer-filter>\n      <input-filter *ngSwitchDefault\n                    [query]=\"query\"\n                    [ngClass]=\"inputClass\"\n                    [column]=\"column\"\n                    (filter)=\"onFilter($event)\">\n      </input-filter>\n    </ng-container>\n  "
            })
        ], DefaultFilterComponent);
        return DefaultFilterComponent;
    }(FilterDefault));

    var CustomFilterComponent = /** @class */ (function (_super) {
        __extends(CustomFilterComponent, _super);
        function CustomFilterComponent(resolver) {
            var _this = _super.call(this) || this;
            _this.resolver = resolver;
            return _this;
        }
        CustomFilterComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (this.column && !this.customComponent) {
                var componentFactory = this.resolver.resolveComponentFactory(this.column.filter.component);
                this.customComponent = this.dynamicTarget.createComponent(componentFactory);
                // set @Inputs and @Outputs of custom component
                this.customComponent.instance.query = this.query;
                this.customComponent.instance.column = this.column;
                this.customComponent.instance.source = this.source;
                this.customComponent.instance.inputClass = this.inputClass;
                this.customComponent.instance.filter.subscribe(function (event) { return _this.onFilter(event); });
            }
            if (this.customComponent) {
                this.customComponent.instance.ngOnChanges(changes);
            }
        };
        CustomFilterComponent.prototype.ngOnDestroy = function () {
            if (this.customComponent) {
                this.customComponent.destroy();
            }
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CustomFilterComponent.prototype, "query", void 0);
        __decorate([
            core.ViewChild('dynamicTarget', { read: core.ViewContainerRef, static: true }),
            __metadata("design:type", Object)
        ], CustomFilterComponent.prototype, "dynamicTarget", void 0);
        CustomFilterComponent = __decorate([
            core.Component({
                selector: 'custom-table-filter',
                template: "<ng-template #dynamicTarget></ng-template>"
            }),
            __metadata("design:paramtypes", [core.ComponentFactoryResolver])
        ], CustomFilterComponent);
        return CustomFilterComponent;
    }(FilterDefault));

    var DefaultFilter = /** @class */ (function () {
        function DefaultFilter() {
            this.delay = 300;
            this.filter = new core.EventEmitter();
        }
        DefaultFilter.prototype.ngOnDestroy = function () {
            if (this.changesSubscription) {
                this.changesSubscription.unsubscribe();
            }
        };
        DefaultFilter.prototype.setFilter = function () {
            this.filter.emit(this.query);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], DefaultFilter.prototype, "query", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], DefaultFilter.prototype, "inputClass", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Column)
        ], DefaultFilter.prototype, "column", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], DefaultFilter.prototype, "filter", void 0);
        return DefaultFilter;
    }());

    var CheckboxFilterComponent = /** @class */ (function (_super) {
        __extends(CheckboxFilterComponent, _super);
        function CheckboxFilterComponent() {
            var _this = _super.call(this) || this;
            _this.filterActive = false;
            _this.inputControl = new forms.FormControl();
            return _this;
        }
        CheckboxFilterComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.changesSubscription = this.inputControl.valueChanges
                .pipe(operators.debounceTime(this.delay))
                .subscribe(function (checked) {
                _this.filterActive = true;
                var trueVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().true) || true;
                var falseVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().false) || false;
                _this.query = checked ? trueVal : falseVal;
                _this.setFilter();
            });
        };
        CheckboxFilterComponent.prototype.resetFilter = function (event) {
            event.preventDefault();
            this.query = '';
            this.inputControl.setValue(false, { emitEvent: false });
            this.filterActive = false;
            this.setFilter();
        };
        CheckboxFilterComponent = __decorate([
            core.Component({
                selector: 'checkbox-filter',
                template: "\n    <input type=\"checkbox\" [formControl]=\"inputControl\" [ngClass]=\"inputClass\" class=\"form-control\">\n    <a href=\"#\" *ngIf=\"filterActive\"\n                (click)=\"resetFilter($event)\">{{column.getFilterConfig()?.resetText || 'reset'}}</a>\n  "
            }),
            __metadata("design:paramtypes", [])
        ], CheckboxFilterComponent);
        return CheckboxFilterComponent;
    }(DefaultFilter));

    var CompleterFilterComponent = /** @class */ (function (_super) {
        __extends(CompleterFilterComponent, _super);
        function CompleterFilterComponent(completerService) {
            var _this = _super.call(this) || this;
            _this.completerService = completerService;
            _this.completerContent = new rxjs.Subject();
            return _this;
        }
        CompleterFilterComponent.prototype.ngOnInit = function () {
            var _this = this;
            var config = this.column.getFilterConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
            this.changesSubscription = this.completerContent
                .pipe(operators.map(function (ev) { return (ev && ev.title) || ev || ''; }), operators.distinctUntilChanged(), operators.debounceTime(this.delay))
                .subscribe(function (search) {
                _this.query = search;
                _this.setFilter();
            });
        };
        CompleterFilterComponent.prototype.inputTextChanged = function (event) {
            // workaround to trigger the search event when the home/end buttons are clicked
            // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
            // so here it gets called manually
            if (event === '') {
                this.completerContent.next(event);
            }
        };
        CompleterFilterComponent = __decorate([
            core.Component({
                selector: 'completer-filter',
                template: "\n    <ng2-completer [(ngModel)]=\"query\"\n                   (ngModelChange)=\"inputTextChanged($event)\"\n                   [dataService]=\"column.getFilterConfig().completer.dataService\"\n                   [minSearchLength]=\"column.getFilterConfig().completer.minSearchLength || 0\"\n                   [pause]=\"column.getFilterConfig().completer.pause || 0\"\n                   [placeholder]=\"column.getFilterConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"completerContent.next($event)\">\n    </ng2-completer>\n  "
            }),
            __metadata("design:paramtypes", [ng2Completer.CompleterService])
        ], CompleterFilterComponent);
        return CompleterFilterComponent;
    }(DefaultFilter));

    var InputFilterComponent = /** @class */ (function (_super) {
        __extends(InputFilterComponent, _super);
        function InputFilterComponent() {
            var _this = _super.call(this) || this;
            _this.inputControl = new forms.FormControl();
            return _this;
        }
        InputFilterComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.query) {
                this.inputControl.setValue(this.query);
            }
            this.inputControl.valueChanges
                .pipe(operators.distinctUntilChanged(), operators.debounceTime(this.delay))
                .subscribe(function (value) {
                _this.query = _this.inputControl.value;
                _this.setFilter();
            });
        };
        InputFilterComponent.prototype.ngOnChanges = function (changes) {
            if (changes.query) {
                this.inputControl.setValue(this.query);
            }
        };
        InputFilterComponent = __decorate([
            core.Component({
                selector: 'input-filter',
                template: "\n    <input\n      [ngClass]=\"inputClass\"\n      [formControl]=\"inputControl\"\n      class=\"form-control\"\n      type=\"text\"\n      placeholder=\"{{ column.title }}\"/>\n  "
            }),
            __metadata("design:paramtypes", [])
        ], InputFilterComponent);
        return InputFilterComponent;
    }(DefaultFilter));

    var SelectFilterComponent = /** @class */ (function (_super) {
        __extends(SelectFilterComponent, _super);
        function SelectFilterComponent() {
            return _super.call(this) || this;
        }
        SelectFilterComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.inputControl.valueChanges
                .pipe(operators.skip(1), operators.distinctUntilChanged(), operators.debounceTime(this.delay))
                .subscribe(function (value) { return _this.setFilter(); });
        };
        __decorate([
            core.ViewChild('inputControl', { read: forms.NgControl, static: true }),
            __metadata("design:type", forms.NgControl)
        ], SelectFilterComponent.prototype, "inputControl", void 0);
        SelectFilterComponent = __decorate([
            core.Component({
                selector: 'select-filter',
                template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            #inputControl\n            [(ngModel)]=\"query\">\n\n        <option value=\"\">{{ column.getFilterConfig().selectText }}</option>\n        <option *ngFor=\"let option of column.getFilterConfig().list\" [value]=\"option.value\">\n          {{ option.title }}\n        </option>\n    </select>\n  "
            }),
            __metadata("design:paramtypes", [])
        ], SelectFilterComponent);
        return SelectFilterComponent;
    }(DefaultFilter));

    var FILTER_COMPONENTS = [
        FilterComponent,
        DefaultFilterComponent,
        CustomFilterComponent,
        CheckboxFilterComponent,
        CompleterFilterComponent,
        InputFilterComponent,
        SelectFilterComponent,
    ];
    var FilterModule = /** @class */ (function () {
        function FilterModule() {
        }
        FilterModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    ng2Completer.Ng2CompleterModule,
                ],
                declarations: __spread(FILTER_COMPONENTS),
                exports: __spread(FILTER_COMPONENTS),
            })
        ], FilterModule);
        return FilterModule;
    }());

    var PagerComponent = /** @class */ (function () {
        function PagerComponent() {
            this.perPageSelect = [];
            this.changePage = new core.EventEmitter();
            this.count = 0;
        }
        PagerComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.source) {
                if (!changes.source.firstChange) {
                    this.dataChangedSub.unsubscribe();
                }
                this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                    _this.page = _this.source.getPaging().page;
                    _this.perPage = _this.source.getPaging().perPage;
                    _this.currentPerPage = _this.perPage;
                    _this.count = _this.source.count();
                    if (_this.isPageOutOfBounce()) {
                        _this.source.setPage(--_this.page);
                    }
                    _this.processPageChange(dataChanges);
                    _this.initPages();
                });
            }
        };
        /**
         * We change the page here depending on the action performed against data source
         * if a new element was added to the end of the table - then change the page to the last
         * if a new element was added to the beginning of the table - then to the first page
         * @param changes
         */
        PagerComponent.prototype.processPageChange = function (changes) {
            if (changes['action'] === 'prepend') {
                this.source.setPage(1);
            }
            if (changes['action'] === 'append') {
                this.source.setPage(this.getLast());
            }
        };
        PagerComponent.prototype.shouldShow = function () {
            return this.source.count() > this.perPage;
        };
        PagerComponent.prototype.paginate = function (page) {
            this.source.setPage(page);
            this.page = page;
            this.changePage.emit({ page: page });
            return false;
        };
        PagerComponent.prototype.next = function () {
            return this.paginate(this.getPage() + 1);
        };
        PagerComponent.prototype.prev = function () {
            return this.paginate(this.getPage() - 1);
        };
        PagerComponent.prototype.getPage = function () {
            return this.page;
        };
        PagerComponent.prototype.getPages = function () {
            return this.pages;
        };
        PagerComponent.prototype.getLast = function () {
            return Math.ceil(this.count / this.perPage);
        };
        PagerComponent.prototype.isPageOutOfBounce = function () {
            return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
        };
        PagerComponent.prototype.initPages = function () {
            var pagesCount = this.getLast();
            var showPagesCount = 4;
            showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
            this.pages = [];
            if (this.shouldShow()) {
                var middleOne = Math.ceil(showPagesCount / 2);
                middleOne = this.page >= middleOne ? this.page : middleOne;
                var lastOne = middleOne + Math.floor(showPagesCount / 2);
                lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
                var firstOne = lastOne - showPagesCount + 1;
                for (var i = firstOne; i <= lastOne; i++) {
                    this.pages.push(i);
                }
            }
        };
        PagerComponent.prototype.onChangePerPage = function (event) {
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
        };
        __decorate([
            core.Input(),
            __metadata("design:type", DataSource)
        ], PagerComponent.prototype, "source", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], PagerComponent.prototype, "perPageSelect", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], PagerComponent.prototype, "changePage", void 0);
        PagerComponent = __decorate([
            core.Component({
                selector: 'ng2-smart-table-pager',
                template: "\n    <nav *ngIf=\"shouldShow()\" class=\"ng2-smart-pagination-nav\">\n      <ul class=\"ng2-smart-pagination pagination\">\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link page-link-prev\" href=\"#\"\n             (click)=\"getPage() == 1 ? false : prev()\" aria-label=\"Prev\">\n            <span aria-hidden=\"true\">&lt;</span>\n            <span class=\"sr-only\">Prev</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n          <span class=\"ng2-smart-page-link page-link\"\n          *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n        </li>\n\n        <li class=\"ng2-smart-page-item page-item\"\n            [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link page-link-next\" href=\"#\"\n             (click)=\"getPage() == getLast() ? false : next()\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&gt;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    \n    <nav *ngIf=\"perPageSelect && perPageSelect.length > 0\" class=\"ng2-smart-pagination-per-page\">\n      <label for=\"per-page\">\n        Per Page:\n      </label>\n      <select (change)=\"onChangePerPage($event)\" [(ngModel)]=\"currentPerPage\" id=\"per-page\">\n        <option *ngFor=\"let item of perPageSelect\" [value]=\"item\">{{ item }}</option>\n      </select>\n    </nav>\n  ",
                styles: [".ng2-smart-pagination{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination .ng2-smart-page-item{display:inline}.ng2-smart-pagination .page-link-next,.ng2-smart-pagination .page-link-prev{font-size:10px}:host{display:flex;justify-content:space-between}:host select{margin:1rem 0 1rem 1rem}:host label{margin:1rem 0 1rem 1rem;line-height:2.5rem}"]
            })
        ], PagerComponent);
        return PagerComponent;
    }());

    var PagerModule = /** @class */ (function () {
        function PagerModule() {
        }
        PagerModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                ],
                declarations: [
                    PagerComponent,
                ],
                exports: [
                    PagerComponent,
                ],
            })
        ], PagerModule);
        return PagerModule;
    }());

    var Ng2SmartTableTbodyComponent = /** @class */ (function () {
        function Ng2SmartTableTbodyComponent() {
            this.save = new core.EventEmitter();
            this.cancel = new core.EventEmitter();
            this.edit = new core.EventEmitter();
            this.delete = new core.EventEmitter();
            this.custom = new core.EventEmitter();
            this.edited = new core.EventEmitter();
            this.userSelectRow = new core.EventEmitter();
            this.editRowSelect = new core.EventEmitter();
            this.multipleSelectRow = new core.EventEmitter();
            this.rowHover = new core.EventEmitter();
        }
        Object.defineProperty(Ng2SmartTableTbodyComponent.prototype, "tableColumnsCount", {
            get: function () {
                var actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
                return this.grid.getColumns().length + actionColumns;
            },
            enumerable: true,
            configurable: true
        });
        Ng2SmartTableTbodyComponent.prototype.ngOnChanges = function () {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.mode = this.grid.getSetting('mode');
            this.editInputClass = this.grid.getSetting('edit.inputClass');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.isActionAdd = this.grid.getSetting('actions.add');
            this.isActionEdit = this.grid.getSetting('actions.edit');
            this.isActionDelete = this.grid.getSetting('actions.delete');
            this.noDataMessage = this.grid.getSetting('noDataMessage');
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Grid)
        ], Ng2SmartTableTbodyComponent.prototype, "grid", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", DataSource)
        ], Ng2SmartTableTbodyComponent.prototype, "source", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.EventEmitter)
        ], Ng2SmartTableTbodyComponent.prototype, "deleteConfirm", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.EventEmitter)
        ], Ng2SmartTableTbodyComponent.prototype, "editConfirm", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Function)
        ], Ng2SmartTableTbodyComponent.prototype, "rowClassFunction", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTbodyComponent.prototype, "save", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTbodyComponent.prototype, "cancel", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTbodyComponent.prototype, "edit", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTbodyComponent.prototype, "delete", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTbodyComponent.prototype, "custom", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTbodyComponent.prototype, "edited", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTbodyComponent.prototype, "userSelectRow", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTbodyComponent.prototype, "editRowSelect", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTbodyComponent.prototype, "multipleSelectRow", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTbodyComponent.prototype, "rowHover", void 0);
        Ng2SmartTableTbodyComponent = __decorate([
            core.Component({
                selector: '[ng2-st-tbody]',
                template: "<tr *ngFor=\"let row of grid.getRows()\" (click)=\"userSelectRow.emit(row)\" (mouseover)=\"rowHover.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\">\r\n  <td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row)\">\r\n    <input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\">\r\n  </td>\r\n  <td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\r\n\r\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\r\n                              [deleteConfirm]=\"deleteConfirm\"\r\n                              [editConfirm]=\"editConfirm\"\r\n                              (edit)=\"edit.emit(row)\"\r\n                              (delete)=\"delete.emit(row)\"\r\n                              (editRowSelect)=\"editRowSelect.emit($event)\"\r\n                              [row]=\"row\"\r\n                              [source]=\"source\">\r\n    </ng2-st-tbody-edit-delete>\r\n  </td>\r\n   <td *ngIf=\"row.isInEditing && showActionColumnLeft\"  class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\r\n  </td>\r\n  <td *ngFor=\"let cell of row.cells\">\r\n    <ng2-smart-table-cell [cell]=\"cell\"\r\n                          [grid]=\"grid\"\r\n                          [row]=\"row\"\r\n                          [isNew]=\"false\"\r\n                          [mode]=\"mode\"\r\n                          [editConfirm]=\"editConfirm\"\r\n                          [inputClass]=\"editInputClass\"\r\n                          [isInEditing]=\"row.isInEditing\">\r\n    </ng2-smart-table-cell>\r\n  </td>\r\n\r\n  <td *ngIf=\"row.isInEditing && showActionColumnRight\"  class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\r\n  </td>\r\n\r\n  <td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\">\r\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\r\n\r\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\r\n                              [deleteConfirm]=\"deleteConfirm\"\r\n                              [editConfirm]=\"editConfirm\"\r\n                              [row]=\"row\"\r\n                              [source]=\"source\"\r\n                              (edit)=\"edit.emit(row)\"\r\n                              (delete)=\"delete.emit(row)\"\r\n                              (editRowSelect)=\"editRowSelect.emit($event)\">\r\n    </ng2-st-tbody-edit-delete>\r\n  </td>\r\n</tr>\r\n\r\n<tr *ngIf=\"grid.getRows().length == 0\">\r\n  <td [attr.colspan]=\"tableColumnsCount\">\r\n    {{ noDataMessage }}\r\n  </td>\r\n</tr>\r\n",
                styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-create-cancel a:first-child,:host ::ng-deep ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"]
            })
        ], Ng2SmartTableTbodyComponent);
        return Ng2SmartTableTbodyComponent;
    }());

    var TbodyCreateCancelComponent = /** @class */ (function () {
        function TbodyCreateCancelComponent() {
        }
        TbodyCreateCancelComponent.prototype.onSave = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.grid.save(this.row, this.editConfirm);
        };
        TbodyCreateCancelComponent.prototype.onCancelEdit = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.row.isInEditing = false;
        };
        TbodyCreateCancelComponent.prototype.ngOnChanges = function () {
            this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
            this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Grid)
        ], TbodyCreateCancelComponent.prototype, "grid", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Row)
        ], TbodyCreateCancelComponent.prototype, "row", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.EventEmitter)
        ], TbodyCreateCancelComponent.prototype, "editConfirm", void 0);
        TbodyCreateCancelComponent = __decorate([
            core.Component({
                selector: 'ng2-st-tbody-create-cancel',
                template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-save\"\n        [innerHTML]=\"saveButtonContent\" (click)=\"onSave($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-cancel\"\n        [innerHTML]=\"cancelButtonContent\" (click)=\"onCancelEdit($event)\"></a>\n  "
            })
        ], TbodyCreateCancelComponent);
        return TbodyCreateCancelComponent;
    }());

    var TbodyEditDeleteComponent = /** @class */ (function () {
        function TbodyEditDeleteComponent() {
            this.edit = new core.EventEmitter();
            this.delete = new core.EventEmitter();
            this.editRowSelect = new core.EventEmitter();
        }
        TbodyEditDeleteComponent.prototype.onEdit = function (event) {
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
        };
        TbodyEditDeleteComponent.prototype.onDelete = function (event) {
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
        };
        TbodyEditDeleteComponent.prototype.ngOnChanges = function () {
            this.isActionEdit = this.grid.getSetting('actions.edit');
            this.isActionDelete = this.grid.getSetting('actions.delete');
            this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
            this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Grid)
        ], TbodyEditDeleteComponent.prototype, "grid", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Row)
        ], TbodyEditDeleteComponent.prototype, "row", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", DataSource)
        ], TbodyEditDeleteComponent.prototype, "source", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.EventEmitter)
        ], TbodyEditDeleteComponent.prototype, "deleteConfirm", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.EventEmitter)
        ], TbodyEditDeleteComponent.prototype, "editConfirm", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], TbodyEditDeleteComponent.prototype, "edit", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], TbodyEditDeleteComponent.prototype, "delete", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], TbodyEditDeleteComponent.prototype, "editRowSelect", void 0);
        TbodyEditDeleteComponent = __decorate([
            core.Component({
                selector: 'ng2-st-tbody-edit-delete',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "\n    <a href=\"#\" *ngIf=\"isActionEdit\" class=\"ng2-smart-action ng2-smart-action-edit-edit\"\n        [innerHTML]=\"editRowButtonContent\" (click)=\"onEdit($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionDelete\" class=\"ng2-smart-action ng2-smart-action-delete-delete\"\n        [innerHTML]=\"deleteRowButtonContent\" (click)=\"onDelete($event)\"></a>\n  "
            })
        ], TbodyEditDeleteComponent);
        return TbodyEditDeleteComponent;
    }());

    var TbodyCustomComponent = /** @class */ (function () {
        function TbodyCustomComponent() {
            this.custom = new core.EventEmitter();
        }
        TbodyCustomComponent.prototype.onCustom = function (action, event) {
            event.preventDefault();
            event.stopPropagation();
            this.custom.emit({
                action: action.name,
                data: this.row.getData(),
                source: this.source
            });
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Grid)
        ], TbodyCustomComponent.prototype, "grid", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Row)
        ], TbodyCustomComponent.prototype, "row", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], TbodyCustomComponent.prototype, "source", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], TbodyCustomComponent.prototype, "custom", void 0);
        TbodyCustomComponent = __decorate([
            core.Component({
                selector: 'ng2-st-tbody-custom',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "\n      <a *ngFor=\"let action of grid.getSetting('actions.custom')\" href=\"#\"\n         class=\"ng2-smart-action ng2-smart-action-custom-custom\" \n         [innerHTML]=\"action.title\"\n         (click)=\"onCustom(action, $event)\"></a>\n        "
            })
        ], TbodyCustomComponent);
        return TbodyCustomComponent;
    }());

    var TBODY_COMPONENTS = [
        TbodyCreateCancelComponent,
        TbodyEditDeleteComponent,
        TbodyCustomComponent,
        Ng2SmartTableTbodyComponent
    ];
    var TBodyModule = /** @class */ (function () {
        function TBodyModule() {
        }
        TBodyModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    CellModule,
                ],
                declarations: __spread(TBODY_COMPONENTS),
                exports: __spread(TBODY_COMPONENTS),
            })
        ], TBodyModule);
        return TBodyModule;
    }());

    var Ng2SmartTableTheadComponent = /** @class */ (function () {
        function Ng2SmartTableTheadComponent() {
            this.sort = new core.EventEmitter();
            this.selectAllRows = new core.EventEmitter();
            this.create = new core.EventEmitter();
            this.filter = new core.EventEmitter();
            this.onSortTable = new core.EventEmitter();
        }
        Ng2SmartTableTheadComponent.prototype.ngOnChanges = function () {
            this.isHideHeader = this.grid.getSetting('hideHeader');
            this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Grid)
        ], Ng2SmartTableTheadComponent.prototype, "grid", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", DataSource)
        ], Ng2SmartTableTheadComponent.prototype, "source", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], Ng2SmartTableTheadComponent.prototype, "isAllSelected", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.EventEmitter)
        ], Ng2SmartTableTheadComponent.prototype, "createConfirm", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTheadComponent.prototype, "sort", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTheadComponent.prototype, "selectAllRows", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTheadComponent.prototype, "create", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTheadComponent.prototype, "filter", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableTheadComponent.prototype, "onSortTable", void 0);
        Ng2SmartTableTheadComponent = __decorate([
            core.Component({
                selector: '[ng2-st-thead]',
                template: "<tr ng2-st-thead-titles-row *ngIf=\"!isHideHeader\"\r\n                            class=\"ng2-smart-titles\"\r\n                            [grid]=\"grid\"\r\n                            [isAllSelected]=\"isAllSelected\"\r\n                            [source]=\"source\"\r\n                            (sort)=\"sort.emit($event)\"\r\n                            (onSortTable)=\"onSortTable.emit($event)\"\r\n                            (selectAllRows)=\"selectAllRows.emit($event)\">\r\n</tr>\r\n\r\n<tr ng2-st-thead-filters-row *ngIf=\"!isHideSubHeader\"\r\n                              class=\"ng2-smart-filters\"\r\n                              [grid]=\"grid\"\r\n                              [source]=\"source\"\r\n                              (create)=\"create.emit($event)\"\r\n                              (filter)=\"filter.emit($event)\">\r\n</tr>\r\n\r\n<tr ng2-st-thead-form-row *ngIf=\"grid.createFormShown\"\r\n                          [grid]=\"grid\"\r\n                          [createConfirm]=\"createConfirm\">\r\n</tr>\r\n"
            })
        ], Ng2SmartTableTheadComponent);
        return Ng2SmartTableTheadComponent;
    }());

    var ActionsComponent = /** @class */ (function () {
        function ActionsComponent() {
            this.create = new core.EventEmitter();
        }
        ActionsComponent.prototype.ngOnChanges = function () {
            this.createButtonContent = this.grid.getSetting('add.createButtonContent');
            this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Grid)
        ], ActionsComponent.prototype, "grid", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], ActionsComponent.prototype, "create", void 0);
        ActionsComponent = __decorate([
            core.Component({
                selector: 'ng2-st-actions',
                template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-create\"\n        [innerHTML]=\"createButtonContent\"\n        (click)=\"$event.preventDefault();create.emit($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-cancel\"\n        [innerHTML]=\"cancelButtonContent\"\n        (click)=\"$event.preventDefault();grid.createFormShown = false;\"></a>\n  "
            })
        ], ActionsComponent);
        return ActionsComponent;
    }());

    var ActionsTitleComponent = /** @class */ (function () {
        function ActionsTitleComponent(ref) {
            this.ref = ref;
        }
        ActionsTitleComponent.prototype.ngAfterViewInit = function () {
            this.ref.nativeElement.classList.add('ng2-smart-actions');
        };
        ActionsTitleComponent.prototype.ngOnChanges = function () {
            this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Grid)
        ], ActionsTitleComponent.prototype, "grid", void 0);
        ActionsTitleComponent = __decorate([
            core.Component({
                selector: '[ng2-st-actions-title]',
                template: "\n    <div class=\"ng2-smart-title\">{{ actionsColumnTitle }}</div>\n  "
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], ActionsTitleComponent);
        return ActionsTitleComponent;
    }());

    var AddButtonComponent = /** @class */ (function () {
        function AddButtonComponent(ref) {
            this.ref = ref;
            this.create = new core.EventEmitter();
        }
        AddButtonComponent.prototype.ngAfterViewInit = function () {
            this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
        };
        AddButtonComponent.prototype.ngOnChanges = function () {
            this.isActionAdd = this.grid.getSetting('actions.add');
            this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
        };
        AddButtonComponent.prototype.onAdd = function (event) {
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
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Grid)
        ], AddButtonComponent.prototype, "grid", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", DataSource)
        ], AddButtonComponent.prototype, "source", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], AddButtonComponent.prototype, "create", void 0);
        AddButtonComponent = __decorate([
            core.Component({
                selector: '[ng2-st-add-button]',
                template: "\n    <a *ngIf=\"isActionAdd\" href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-add\"\n        [innerHTML]=\"addNewButtonContent\" (click)=\"onAdd($event)\"></a>\n  "
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], AddButtonComponent);
        return AddButtonComponent;
    }());

    var CheckboxSelectAllComponent = /** @class */ (function () {
        function CheckboxSelectAllComponent() {
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Grid)
        ], CheckboxSelectAllComponent.prototype, "grid", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", DataSource)
        ], CheckboxSelectAllComponent.prototype, "source", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CheckboxSelectAllComponent.prototype, "isAllSelected", void 0);
        CheckboxSelectAllComponent = __decorate([
            core.Component({
                selector: '[ng2-st-checkbox-select-all]',
                template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  "
            })
        ], CheckboxSelectAllComponent);
        return CheckboxSelectAllComponent;
    }());

    var ColumnTitleComponent = /** @class */ (function () {
        function ColumnTitleComponent() {
            this.sort = new core.EventEmitter();
            this.onSortTable = new core.EventEmitter();
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Column)
        ], ColumnTitleComponent.prototype, "column", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", DataSource)
        ], ColumnTitleComponent.prototype, "source", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], ColumnTitleComponent.prototype, "sort", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], ColumnTitleComponent.prototype, "onSortTable", void 0);
        ColumnTitleComponent = __decorate([
            core.Component({
                selector: 'ng2-st-column-title',
                template: "\n    <div class=\"ng2-smart-title\">\n      <ng2-smart-table-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\" (onSortTable)=\"onSortTable.emit($event)\"></ng2-smart-table-title>\n    </div>\n  "
            })
        ], ColumnTitleComponent);
        return ColumnTitleComponent;
    }());

    var TitleComponent = /** @class */ (function () {
        function TitleComponent() {
            this.currentDirection = '';
            this.sort = new core.EventEmitter();
            this.onSortTable = new core.EventEmitter();
        }
        TitleComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.source) {
                if (!changes.source.firstChange) {
                    this.dataChangedSub.unsubscribe();
                }
                this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                    var sortConf = _this.source.getSort();
                    if (sortConf.length > 0 && sortConf[0]['field'] === _this.column.id) {
                        _this.currentDirection = sortConf[0]['direction'];
                    }
                    else {
                        _this.currentDirection = '';
                    }
                    sortConf.forEach(function (fieldConf) {
                    });
                });
            }
        };
        TitleComponent.prototype._sort = function (event) {
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
        };
        TitleComponent.prototype.changeSortDirection = function () {
            if (this.currentDirection) {
                var newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
                this.currentDirection = newDirection;
            }
            else {
                this.currentDirection = this.column.sortDirection;
            }
            return this.currentDirection;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Column)
        ], TitleComponent.prototype, "column", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", DataSource)
        ], TitleComponent.prototype, "source", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], TitleComponent.prototype, "sort", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], TitleComponent.prototype, "onSortTable", void 0);
        TitleComponent = __decorate([
            core.Component({
                selector: 'ng2-smart-table-title',
                template: "\n    <a href=\"#\" *ngIf=\"column.isSortable\"\n                (click)=\"_sort($event)\"\n                class=\"ng2-smart-sort-link sort\"\n                [ngClass]=\"currentDirection\">\n      {{ column.title }}\n    </a>\n    <span class=\"ng2-smart-sort\" *ngIf=\"!column.isSortable\">{{ column.title }}</span>\n  ",
                styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc::after,a.sort.desc::after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc::after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}"]
            })
        ], TitleComponent);
        return TitleComponent;
    }());

    var TheadFitlersRowComponent = /** @class */ (function () {
        function TheadFitlersRowComponent() {
            this.create = new core.EventEmitter();
            this.filter = new core.EventEmitter();
        }
        TheadFitlersRowComponent.prototype.ngOnChanges = function () {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.filterInputClass = this.grid.getSetting('filter.inputClass');
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Grid)
        ], TheadFitlersRowComponent.prototype, "grid", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", DataSource)
        ], TheadFitlersRowComponent.prototype, "source", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], TheadFitlersRowComponent.prototype, "create", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], TheadFitlersRowComponent.prototype, "filter", void 0);
        TheadFitlersRowComponent = __decorate([
            core.Component({
                selector: '[ng2-st-thead-filters-row]',
                template: "\n    <th *ngIf=\"isMultiSelectVisible\"></th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnLeft\"\n                          [grid]=\"grid\"\n                          (create)=\"create.emit($event)\">\n    </th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\">\n      <ng2-smart-table-filter [source]=\"source\"\n                              [column]=\"column\"\n                              [inputClass]=\"filterInputClass\"\n                              (filter)=\"filter.emit($event)\">\n      </ng2-smart-table-filter>\n    </th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnRight\"\n                          [grid]=\"grid\"\n                          [source]=\"source\"\n                          (create)=\"create.emit($event)\">\n    </th>\n  "
            })
        ], TheadFitlersRowComponent);
        return TheadFitlersRowComponent;
    }());

    var TheadFormRowComponent = /** @class */ (function () {
        function TheadFormRowComponent() {
            this.create = new core.EventEmitter();
        }
        TheadFormRowComponent.prototype.onCreate = function (event) {
            event.stopPropagation();
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        };
        TheadFormRowComponent.prototype.ngOnChanges = function () {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.addInputClass = this.grid.getSetting('add.inputClass');
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Grid)
        ], TheadFormRowComponent.prototype, "grid", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Row)
        ], TheadFormRowComponent.prototype, "row", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.EventEmitter)
        ], TheadFormRowComponent.prototype, "createConfirm", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], TheadFormRowComponent.prototype, "create", void 0);
        TheadFormRowComponent = __decorate([
            core.Component({
                selector: '[ng2-st-thead-form-row]',
                template: "\n      <td *ngIf=\"\"></td>\n      <td  *ngIf=\"showActionColumnLeft\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n      <td *ngFor=\"let cell of grid.getNewRow().getCells()\">\n        <ng2-smart-table-cell [cell]=\"cell\"\n                              [grid]=\"grid\"\n                              [isNew]=\"true\"\n                              [createConfirm]=\"createConfirm\"\n                              [inputClass]=\"addInputClass\"\n                              [isInEditing]=\"grid.getNewRow().isInEditing\"\n                              (edited)=\"onCreate($event)\">\n        </ng2-smart-table-cell>\n      </td>\n      <td  *ngIf=\"showActionColumnRight\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n  "
            })
        ], TheadFormRowComponent);
        return TheadFormRowComponent;
    }());

    var TheadTitlesRowComponent = /** @class */ (function () {
        function TheadTitlesRowComponent() {
            this.sort = new core.EventEmitter();
            this.selectAllRows = new core.EventEmitter();
            this.onSortTable = new core.EventEmitter();
        }
        TheadTitlesRowComponent.prototype.ngOnChanges = function () {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Grid)
        ], TheadTitlesRowComponent.prototype, "grid", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], TheadTitlesRowComponent.prototype, "isAllSelected", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", DataSource)
        ], TheadTitlesRowComponent.prototype, "source", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], TheadTitlesRowComponent.prototype, "sort", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], TheadTitlesRowComponent.prototype, "selectAllRows", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], TheadTitlesRowComponent.prototype, "onSortTable", void 0);
        TheadTitlesRowComponent = __decorate([
            core.Component({
                selector: '[ng2-st-thead-titles-row]',
                template: "\n    <th ng2-st-checkbox-select-all *ngIf=\"isMultiSelectVisible\"\n                                   [grid]=\"grid\"\n                                   [source]=\"source\"\n                                   [isAllSelected]=\"isAllSelected\"\n                                   (click)=\"selectAllRows.emit($event)\">\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnLeft\" [grid]=\"grid\"></th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\" [ngClass]=\"column.class\"\n      [style.width]=\"column.width\" >\n      <ng2-st-column-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\" (onSortTable)=\"onSortTable.emit($event)\"></ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnRight\" [grid]=\"grid\"></th>\n  "
            })
        ], TheadTitlesRowComponent);
        return TheadTitlesRowComponent;
    }());

    var THEAD_COMPONENTS = [
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
    var THeadModule = /** @class */ (function () {
        function THeadModule() {
        }
        THeadModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    FilterModule,
                    CellModule,
                ],
                declarations: __spread(THEAD_COMPONENTS),
                exports: __spread(THEAD_COMPONENTS),
            })
        ], THeadModule);
        return THeadModule;
    }());

    function compareValues(direction, a, b) {
        if (a < b) {
            return -1 * direction;
        }
        if (a > b) {
            return direction;
        }
        return 0;
    }
    var LocalSorter = /** @class */ (function () {
        function LocalSorter() {
        }
        LocalSorter.sort = function (data, field, direction, customCompare) {
            var dir = (direction === 'asc') ? 1 : -1;
            var compare = customCompare ? customCompare : compareValues;
            return data.sort(function (a, b) {
                return compare.call(null, dir, a[field], b[field]);
            });
        };
        return LocalSorter;
    }());

    function filterValues(value, search) {
        return value.toString().toLowerCase().includes(search.toString().toLowerCase());
    }
    var LocalFilter = /** @class */ (function () {
        function LocalFilter() {
        }
        LocalFilter.filter = function (data, field, search, customFilter) {
            var filter = customFilter ? customFilter : filterValues;
            return data.filter(function (el) {
                var value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
                return filter.call(null, value, search);
            });
        };
        return LocalFilter;
    }());

    var LocalPager = /** @class */ (function () {
        function LocalPager() {
        }
        LocalPager.paginate = function (data, page, perPage) {
            return data.slice(perPage * (page - 1), perPage * page);
        };
        return LocalPager;
    }());

    var LocalDataSource = /** @class */ (function (_super) {
        __extends(LocalDataSource, _super);
        function LocalDataSource(data) {
            if (data === void 0) { data = []; }
            var _this = _super.call(this) || this;
            _this.data = [];
            _this.filteredAndSorted = [];
            _this.sortConf = [];
            _this.filterConf = {
                filters: [],
                andOperator: true,
            };
            _this.pagingConf = {};
            _this.data = data;
            return _this;
        }
        LocalDataSource.prototype.load = function (data) {
            this.data = data;
            return _super.prototype.load.call(this, data);
        };
        LocalDataSource.prototype.prepend = function (element) {
            this.reset(true);
            this.data.unshift(element);
            return _super.prototype.prepend.call(this, element);
        };
        LocalDataSource.prototype.append = function (element) {
            this.reset(true);
            this.data.push(element);
            return _super.prototype.append.call(this, element);
        };
        LocalDataSource.prototype.add = function (element) {
            this.data.push(element);
            return _super.prototype.add.call(this, element);
        };
        LocalDataSource.prototype.remove = function (element) {
            this.data = this.data.filter(function (el) { return el !== element; });
            return _super.prototype.remove.call(this, element);
        };
        LocalDataSource.prototype.update = function (element, values) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.find(element).then(function (found) {
                    found = deepExtend(found, values);
                    _super.prototype.update.call(_this, found, values).then(resolve).catch(reject);
                }).catch(reject);
            });
        };
        LocalDataSource.prototype.find = function (element) {
            var found = this.data.find(function (el) { return el === element; });
            if (found) {
                return Promise.resolve(found);
            }
            return Promise.reject(new Error('Element was not found in the dataset'));
        };
        LocalDataSource.prototype.getElements = function () {
            var data = this.data.slice(0);
            return Promise.resolve(this.prepareData(data));
        };
        LocalDataSource.prototype.getFilteredAndSorted = function () {
            var data = this.data.slice(0);
            this.prepareData(data);
            return Promise.resolve(this.filteredAndSorted);
        };
        LocalDataSource.prototype.getAll = function () {
            var data = this.data.slice(0);
            return Promise.resolve(data);
        };
        LocalDataSource.prototype.reset = function (silent) {
            if (silent === void 0) { silent = false; }
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
        };
        LocalDataSource.prototype.empty = function () {
            this.data = [];
            return _super.prototype.empty.call(this);
        };
        LocalDataSource.prototype.count = function () {
            return this.filteredAndSorted.length;
        };
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
        LocalDataSource.prototype.setSort = function (conf, doEmit) {
            if (doEmit === void 0) { doEmit = true; }
            if (conf !== null) {
                conf.forEach(function (fieldConf) {
                    if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                        throw new Error('Sort configuration object is not valid');
                    }
                });
                this.sortConf = conf;
            }
            _super.prototype.setSort.call(this, conf, doEmit);
            return this;
        };
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
        LocalDataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
            var _this = this;
            if (andOperator === void 0) { andOperator = true; }
            if (doEmit === void 0) { doEmit = true; }
            if (conf && conf.length > 0) {
                conf.forEach(function (fieldConf) {
                    _this.addFilter(fieldConf, andOperator, false);
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
            _super.prototype.setFilter.call(this, conf, andOperator, doEmit);
            return this;
        };
        LocalDataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
            var _this = this;
            if (andOperator === void 0) { andOperator = true; }
            if (doEmit === void 0) { doEmit = true; }
            if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
                throw new Error('Filter configuration object is not valid');
            }
            var found = false;
            this.filterConf.filters.forEach(function (currentFieldConf, index) {
                if (currentFieldConf['field'] === fieldConf['field']) {
                    _this.filterConf.filters[index] = fieldConf;
                    found = true;
                }
            });
            if (!found) {
                this.filterConf.filters.push(fieldConf);
            }
            this.filterConf.andOperator = andOperator;
            _super.prototype.addFilter.call(this, fieldConf, andOperator, doEmit);
            return this;
        };
        LocalDataSource.prototype.setPaging = function (page, perPage, doEmit) {
            if (doEmit === void 0) { doEmit = true; }
            this.pagingConf['page'] = page;
            this.pagingConf['perPage'] = perPage;
            _super.prototype.setPaging.call(this, page, perPage, doEmit);
            return this;
        };
        LocalDataSource.prototype.setPage = function (page, doEmit) {
            if (doEmit === void 0) { doEmit = true; }
            this.pagingConf['page'] = page;
            _super.prototype.setPage.call(this, page, doEmit);
            return this;
        };
        LocalDataSource.prototype.getSort = function () {
            return this.sortConf;
        };
        LocalDataSource.prototype.getFilter = function () {
            return this.filterConf;
        };
        LocalDataSource.prototype.getPaging = function () {
            return this.pagingConf;
        };
        LocalDataSource.prototype.prepareData = function (data) {
            data = this.filter(data);
            data = this.sort(data);
            this.filteredAndSorted = data.slice(0);
            return this.paginate(data);
        };
        LocalDataSource.prototype.sort = function (data) {
            if (this.sortConf) {
                this.sortConf.forEach(function (fieldConf) {
                    data = LocalSorter
                        .sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
                });
            }
            return data;
        };
        // TODO: refactor?
        LocalDataSource.prototype.filter = function (data) {
            if (this.filterConf.filters) {
                if (this.filterConf.andOperator) {
                    this.filterConf.filters.forEach(function (fieldConf) {
                        if (fieldConf['search'].length > 0) {
                            data = LocalFilter
                                .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                        }
                    });
                }
                else {
                    var mergedData_1 = [];
                    this.filterConf.filters.forEach(function (fieldConf) {
                        if (fieldConf['search'].length > 0) {
                            mergedData_1 = mergedData_1.concat(LocalFilter
                                .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                        }
                    });
                    // remove non unique items
                    data = mergedData_1.filter(function (elem, pos, arr) {
                        return arr.indexOf(elem) === pos;
                    });
                }
            }
            return data;
        };
        LocalDataSource.prototype.paginate = function (data) {
            if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
                data = LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
            }
            return data;
        };
        return LocalDataSource;
    }(DataSource));

    var Ng2SmartTableComponent = /** @class */ (function () {
        function Ng2SmartTableComponent() {
            this.settings = {};
            this.rowSelect = new core.EventEmitter();
            this.userRowSelect = new core.EventEmitter();
            this.delete = new core.EventEmitter();
            this.edit = new core.EventEmitter();
            this.create = new core.EventEmitter();
            this.custom = new core.EventEmitter();
            this.deleteConfirm = new core.EventEmitter();
            this.editConfirm = new core.EventEmitter();
            this.createConfirm = new core.EventEmitter();
            this.rowHover = new core.EventEmitter();
            this.onSortTable = new core.EventEmitter();
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
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], Ng2SmartTableComponent.prototype, "source", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], Ng2SmartTableComponent.prototype, "settings", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableComponent.prototype, "rowSelect", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableComponent.prototype, "userRowSelect", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableComponent.prototype, "delete", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableComponent.prototype, "edit", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableComponent.prototype, "create", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableComponent.prototype, "custom", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableComponent.prototype, "deleteConfirm", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableComponent.prototype, "editConfirm", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableComponent.prototype, "createConfirm", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], Ng2SmartTableComponent.prototype, "rowHover", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], Ng2SmartTableComponent.prototype, "onSortTable", void 0);
        Ng2SmartTableComponent = __decorate([
            core.Component({
                selector: 'ng2-smart-table',
                template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\r\n\r\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\r\n                      [grid]=\"grid\"\r\n                      [isAllSelected]=\"isAllSelected\"\r\n                      [source]=\"source\"\r\n                      [createConfirm]=\"createConfirm\"\r\n                      (create)=\"create.emit($event)\"\r\n                      (selectAllRows)=\"onSelectAllRows($event)\"\r\n                      (sort)=\"sort($event)\"\r\n                      (onSortTable)=\"onSortTable.emit($event)\"\r\n                      (filter)=\"filter($event)\">\r\n  </thead>\r\n\r\n  <tbody ng2-st-tbody [grid]=\"grid\"\r\n                      [source]=\"source\"\r\n                      [deleteConfirm]=\"deleteConfirm\"\r\n                      [editConfirm]=\"editConfirm\"\r\n                      [rowClassFunction]=\"rowClassFunction\"\r\n                      (edit)=\"edit.emit($event)\"\r\n                      (delete)=\"delete.emit($event)\"\r\n                      (custom)=\"custom.emit($event)\"\r\n                      (userSelectRow)=\"onUserSelectRow($event)\"\r\n                      (editRowSelect)=\"editRowSelect($event)\"\r\n                      (multipleSelectRow)=\"multipleSelectRow($event)\"\r\n                      (rowHover)=\"onRowHover($event)\">\r\n  </tbody>\r\n\r\n</table>\r\n\r\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\r\n                        [source]=\"source\"\r\n                        [perPageSelect]=\"perPageSelect\"\r\n                        (changePage)=\"changePage($event)\">\r\n</ng2-smart-table-pager>\r\n",
                styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}"]
            })
        ], Ng2SmartTableComponent);
        return Ng2SmartTableComponent;
    }());

    var Ng2SmartTableModule = /** @class */ (function () {
        function Ng2SmartTableModule() {
        }
        Ng2SmartTableModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
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
        return Ng2SmartTableModule;
    }());

    var ServerSourceConf = /** @class */ (function () {
        function ServerSourceConf(_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.endPoint, endPoint = _c === void 0 ? '' : _c, _d = _b.sortFieldKey, sortFieldKey = _d === void 0 ? '' : _d, _e = _b.sortDirKey, sortDirKey = _e === void 0 ? '' : _e, _f = _b.pagerPageKey, pagerPageKey = _f === void 0 ? '' : _f, _g = _b.pagerLimitKey, pagerLimitKey = _g === void 0 ? '' : _g, _h = _b.filterFieldKey, filterFieldKey = _h === void 0 ? '' : _h, _j = _b.totalKey, totalKey = _j === void 0 ? '' : _j, _k = _b.dataKey, dataKey = _k === void 0 ? '' : _k;
            this.endPoint = endPoint ? endPoint : '';
            this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
            this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
            this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
            this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
            this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
            this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
            this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
        }
        ServerSourceConf.SORT_FIELD_KEY = '_sort';
        ServerSourceConf.SORT_DIR_KEY = '_order';
        ServerSourceConf.PAGER_PAGE_KEY = '_page';
        ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
        ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
        ServerSourceConf.TOTAL_KEY = 'x-total-count';
        ServerSourceConf.DATA_KEY = '';
        return ServerSourceConf;
    }());

    var ServerDataSource = /** @class */ (function (_super) {
        __extends(ServerDataSource, _super);
        function ServerDataSource(http, conf) {
            if (conf === void 0) { conf = {}; }
            var _this = _super.call(this) || this;
            _this.http = http;
            _this.lastRequestCount = 0;
            _this.conf = new ServerSourceConf(conf);
            if (!_this.conf.endPoint) {
                throw new Error('At least endPoint must be specified as a configuration of the server data source.');
            }
            return _this;
        }
        ServerDataSource.prototype.count = function () {
            return this.lastRequestCount;
        };
        ServerDataSource.prototype.getElements = function () {
            var _this = this;
            return this.requestElements()
                .pipe(operators.map(function (res) {
                _this.lastRequestCount = _this.extractTotalFromResponse(res);
                _this.data = _this.extractDataFromResponse(res);
                return _this.data;
            })).toPromise();
        };
        /**
         * Extracts array of data from server response
         * @param res
         * @returns {any}
         */
        ServerDataSource.prototype.extractDataFromResponse = function (res) {
            var rawData = res.body;
            var data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;
            if (data instanceof Array) {
                return data;
            }
            throw new Error("Data must be an array.\n    Please check that data extracted from the server response by the key '" + this.conf.dataKey + "' exists and is array.");
        };
        /**
         * Extracts total rows count from the server response
         * Looks for the count in the heders first, then in the response body
         * @param res
         * @returns {any}
         */
        ServerDataSource.prototype.extractTotalFromResponse = function (res) {
            if (res.headers.has(this.conf.totalKey)) {
                return +res.headers.get(this.conf.totalKey);
            }
            else {
                var rawData = res.body;
                return getDeepFromObject(rawData, this.conf.totalKey, 0);
            }
        };
        ServerDataSource.prototype.requestElements = function () {
            var httpParams = this.createRequesParams();
            return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
        };
        ServerDataSource.prototype.createRequesParams = function () {
            var httpParams = new http.HttpParams();
            httpParams = this.addSortRequestParams(httpParams);
            httpParams = this.addFilterRequestParams(httpParams);
            return this.addPagerRequestParams(httpParams);
        };
        ServerDataSource.prototype.addSortRequestParams = function (httpParams) {
            var _this = this;
            if (this.sortConf) {
                this.sortConf.forEach(function (fieldConf) {
                    httpParams = httpParams.set(_this.conf.sortFieldKey, fieldConf.field);
                    httpParams = httpParams.set(_this.conf.sortDirKey, fieldConf.direction.toUpperCase());
                });
            }
            return httpParams;
        };
        ServerDataSource.prototype.addFilterRequestParams = function (httpParams) {
            var _this = this;
            if (this.filterConf.filters) {
                this.filterConf.filters.forEach(function (fieldConf) {
                    if (fieldConf['search']) {
                        httpParams = httpParams.set(_this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                    }
                });
            }
            return httpParams;
        };
        ServerDataSource.prototype.addPagerRequestParams = function (httpParams) {
            if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
                httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
                httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
            }
            return httpParams;
        };
        return ServerDataSource;
    }(LocalDataSource));

    exports.Cell = Cell;
    exports.DefaultEditor = DefaultEditor;
    exports.DefaultFilter = DefaultFilter;
    exports.LocalDataSource = LocalDataSource;
    exports.Ng2SmartTableModule = Ng2SmartTableModule;
    exports.ServerDataSource = ServerDataSource;
    exports.ɵa = CellModule;
    exports.ɵb = CellComponent;
    exports.ɵba = TbodyEditDeleteComponent;
    exports.ɵbb = TbodyCustomComponent;
    exports.ɵbc = Ng2SmartTableTbodyComponent;
    exports.ɵbd = THeadModule;
    exports.ɵbe = ActionsComponent;
    exports.ɵbf = ActionsTitleComponent;
    exports.ɵbg = AddButtonComponent;
    exports.ɵbh = CheckboxSelectAllComponent;
    exports.ɵbi = ColumnTitleComponent;
    exports.ɵbj = TitleComponent;
    exports.ɵbk = TheadFitlersRowComponent;
    exports.ɵbl = TheadFormRowComponent;
    exports.ɵbm = TheadTitlesRowComponent;
    exports.ɵbn = Ng2SmartTableTheadComponent;
    exports.ɵbo = Ng2SmartTableComponent;
    exports.ɵbp = Row;
    exports.ɵbq = DataSet;
    exports.ɵbr = DataSource;
    exports.ɵc = CustomEditComponent;
    exports.ɵd = EditCellDefault;
    exports.ɵe = DefaultEditComponent;
    exports.ɵf = EditCellComponent;
    exports.ɵg = CheckboxEditorComponent;
    exports.ɵh = CompleterEditorComponent;
    exports.ɵi = InputEditorComponent;
    exports.ɵj = SelectEditorComponent;
    exports.ɵk = TextareaEditorComponent;
    exports.ɵl = CustomViewComponent;
    exports.ɵm = ViewCellComponent;
    exports.ɵn = FilterModule;
    exports.ɵo = FilterComponent;
    exports.ɵp = FilterDefault;
    exports.ɵq = DefaultFilterComponent;
    exports.ɵr = CustomFilterComponent;
    exports.ɵs = CheckboxFilterComponent;
    exports.ɵt = CompleterFilterComponent;
    exports.ɵu = InputFilterComponent;
    exports.ɵv = SelectFilterComponent;
    exports.ɵw = PagerModule;
    exports.ɵx = PagerComponent;
    exports.ɵy = TBodyModule;
    exports.ɵz = TbodyCreateCancelComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng2-smart-table.umd.js.map
