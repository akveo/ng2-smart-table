import { Subject } from 'rxjs';
import { Deferred, getDeepFromObject } from './helpers';
import { DataSet } from './data-set/data-set';
var Grid = /** @class */ (function () {
    function Grid(source, settings) {
        this.createFormShown = false;
        this.onSelectRowSource = new Subject();
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
export { Grid };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9saWIvZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSS9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRzlDO0lBVUUsY0FBWSxNQUFrQixFQUFFLFFBQWE7UUFSN0Msb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFNakMsc0JBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUdyQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELCtCQUFnQixHQUFoQixVQUFpQixRQUFnQjtRQUMvQixPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1RSxDQUFDO0lBRUQsdUNBQXdCLEdBQXhCLFVBQXlCLFFBQWdCO1FBQ3ZDLE9BQU8sUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsK0JBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDNUosQ0FBQztJQUVELG1DQUFvQixHQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FB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O0lBRUQseUJBQVUsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUgsV0FBQztBQUFELENBQUMsQUFwUUQsSUFvUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEZWZlcnJlZCwgZ2V0RGVlcEZyb21PYmplY3QgfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuL2RhdGEtc2V0L2NvbHVtbic7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4vZGF0YS1zZXQvcm93JztcclxuaW1wb3J0IHsgRGF0YVNldCB9IGZyb20gJy4vZGF0YS1zZXQvZGF0YS1zZXQnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZCB7XHJcblxyXG4gIGNyZWF0ZUZvcm1TaG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBzb3VyY2U6IERhdGFTb3VyY2U7XHJcbiAgc2V0dGluZ3M6IGFueTtcclxuICBkYXRhU2V0OiBEYXRhU2V0O1xyXG5cclxuICBvblNlbGVjdFJvd1NvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3Ioc291cmNlOiBEYXRhU291cmNlLCBzZXR0aW5nczogYW55KSB7XHJcbiAgICB0aGlzLnNldFNldHRpbmdzKHNldHRpbmdzKTtcclxuICAgIHRoaXMuc2V0U291cmNlKHNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICBzaG93QWN0aW9uQ29sdW1uKHBvc2l0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzQ3VycmVudEFjdGlvbnNQb3NpdGlvbihwb3NpdGlvbikgJiYgdGhpcy5pc0FjdGlvbnNWaXNpYmxlKCk7XHJcbiAgfVxyXG5cclxuICBpc0N1cnJlbnRBY3Rpb25zUG9zaXRpb24ocG9zaXRpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHBvc2l0aW9uID09IHRoaXMuZ2V0U2V0dGluZygnYWN0aW9ucy5wb3NpdGlvbicpO1xyXG4gIH1cclxuXHJcbiAgaXNBY3Rpb25zVmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmdldFNldHRpbmcoJ2FjdGlvbnMuYWRkJykgfHwgdGhpcy5nZXRTZXR0aW5nKCdhY3Rpb25zLmVkaXQnKSB8fCB0aGlzLmdldFNldHRpbmcoJ2FjdGlvbnMuZGVsZXRlJykgfHwgdGhpcy5nZXRTZXR0aW5nKCdhY3Rpb25zLmN1c3RvbScpLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGlzTXVsdGlTZWxlY3RWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U2V0dGluZygnc2VsZWN0TW9kZScpID09PSAnbXVsdGknO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV3Um93KCk6IFJvdyB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhU2V0Lm5ld1JvdztcclxuICB9XHJcblxyXG4gIHNldFNldHRpbmdzKHNldHRpbmdzOiBPYmplY3QpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgIHRoaXMuZGF0YVNldCA9IG5ldyBEYXRhU2V0KFtdLCB0aGlzLmdldFNldHRpbmcoJ2NvbHVtbnMnKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuc291cmNlKSB7XHJcbiAgICAgIHRoaXMuc291cmNlLnJlZnJlc2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldERhdGFTZXQoKTogRGF0YVNldCB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhU2V0O1xyXG4gIH1cclxuXHJcbiAgc2V0U291cmNlKHNvdXJjZTogRGF0YVNvdXJjZSkge1xyXG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLnByZXBhcmVTb3VyY2Uoc291cmNlKTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoKGNoYW5nZXM6IGFueSkgPT4gdGhpcy5wcm9jZXNzRGF0YUNoYW5nZShjaGFuZ2VzKSk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2Uub25VcGRhdGVkKCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgY2hhbmdlZFJvdyA9IHRoaXMuZGF0YVNldC5maW5kUm93QnlEYXRhKGRhdGEpO1xyXG4gICAgICBjaGFuZ2VkUm93LnNldERhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFNldHRpbmcobmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuIGdldERlZXBGcm9tT2JqZWN0KHRoaXMuc2V0dGluZ3MsIG5hbWUsIGRlZmF1bHRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVNldC5nZXRDb2x1bW5zKCk7XHJcbiAgfVxyXG5cclxuICBnZXRSb3dzKCk6IEFycmF5PFJvdz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVNldC5nZXRSb3dzKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RSb3cocm93OiBSb3cpIHtcclxuICAgIHRoaXMuZGF0YVNldC5zZWxlY3RSb3cocm93KTtcclxuICB9XHJcblxyXG4gIG11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KSB7XHJcbiAgICB0aGlzLmRhdGFTZXQubXVsdGlwbGVTZWxlY3RSb3cocm93KTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0Um93KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5vblNlbGVjdFJvd1NvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGVkaXQocm93OiBSb3cpIHtcclxuICAgIHJvdy5pc0luRWRpdGluZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUocm93OiBSb3csIGNvbmZpcm1FbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55Pikge1xyXG5cclxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XHJcbiAgICBkZWZlcnJlZC5wcm9taXNlLnRoZW4oKG5ld0RhdGEpID0+IHtcclxuICAgICAgbmV3RGF0YSA9IG5ld0RhdGEgPyBuZXdEYXRhIDogcm93LmdldE5ld0RhdGEoKTtcclxuICAgICAgaWYgKGRlZmVycmVkLnJlc29sdmUuc2tpcEFkZCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybVNob3duID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UucHJlcGVuZChuZXdEYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybVNob3duID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTZXQuY3JlYXRlTmV3Um93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgLy8gZG9pbmcgbm90aGluZ1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZ2V0U2V0dGluZygnYWRkLmNvbmZpcm1DcmVhdGUnKSkge1xyXG4gICAgICBjb25maXJtRW1pdHRlci5lbWl0KHtcclxuICAgICAgICBuZXdEYXRhOiByb3cuZ2V0TmV3RGF0YSgpLFxyXG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgY29uZmlybTogZGVmZXJyZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZShyb3c6IFJvdywgY29uZmlybUVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+KSB7XHJcblxyXG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoKTtcclxuICAgIGRlZmVycmVkLnByb21pc2UudGhlbigobmV3RGF0YSkgPT4ge1xyXG4gICAgICBuZXdEYXRhID0gbmV3RGF0YSA/IG5ld0RhdGEgOiByb3cuZ2V0TmV3RGF0YSgpO1xyXG4gICAgICBpZiAoZGVmZXJyZWQucmVzb2x2ZS5za2lwRWRpdCkge1xyXG4gICAgICAgIHJvdy5pc0luRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc291cmNlLnVwZGF0ZShyb3cuZ2V0RGF0YSgpLCBuZXdEYXRhKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHJvdy5pc0luRWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIC8vIGRvaW5nIG5vdGhpbmdcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmdldFNldHRpbmcoJ2VkaXQuY29uZmlybVNhdmUnKSkge1xyXG4gICAgICBjb25maXJtRW1pdHRlci5lbWl0KHtcclxuICAgICAgICBkYXRhOiByb3cuZ2V0RGF0YSgpLFxyXG4gICAgICAgIG5ld0RhdGE6IHJvdy5nZXROZXdEYXRhKCksXHJcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICBjb25maXJtOiBkZWZlcnJlZCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGUocm93OiBSb3csIGNvbmZpcm1FbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55Pikge1xyXG5cclxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XHJcbiAgICBkZWZlcnJlZC5wcm9taXNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnNvdXJjZS5yZW1vdmUocm93LmdldERhdGEoKSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIC8vIGRvaW5nIG5vdGhpbmdcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmdldFNldHRpbmcoJ2RlbGV0ZS5jb25maXJtRGVsZXRlJykpIHtcclxuICAgICAgY29uZmlybUVtaXR0ZXIuZW1pdCh7XHJcbiAgICAgICAgZGF0YTogcm93LmdldERhdGEoKSxcclxuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxyXG4gICAgICAgIGNvbmZpcm06IGRlZmVycmVkLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb2Nlc3NEYXRhQ2hhbmdlKGNoYW5nZXM6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuc2hvdWxkUHJvY2Vzc0NoYW5nZShjaGFuZ2VzKSkge1xyXG4gICAgICB0aGlzLmRhdGFTZXQuc2V0RGF0YShjaGFuZ2VzWydlbGVtZW50cyddKTtcclxuICAgICAgaWYgKHRoaXMuZ2V0U2V0dGluZygnc2VsZWN0TW9kZScpICE9PSAnbXVsdGknKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5kZXRlcm1pbmVSb3dUb1NlbGVjdChjaGFuZ2VzKTtcclxuXHJcbiAgICAgICAgaWYgKHJvdykge1xyXG4gICAgICAgICAgdGhpcy5vblNlbGVjdFJvd1NvdXJjZS5uZXh0KHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG91bGRQcm9jZXNzQ2hhbmdlKGNoYW5nZXM6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKFsnZmlsdGVyJywgJ3NvcnQnLCAncGFnZScsICdyZW1vdmUnLCAncmVmcmVzaCcsICdsb2FkJywgJ3BhZ2luZyddLmluZGV4T2YoY2hhbmdlc1snYWN0aW9uJ10pICE9PSAtMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoWydwcmVwZW5kJywgJ2FwcGVuZCddLmluZGV4T2YoY2hhbmdlc1snYWN0aW9uJ10pICE9PSAtMSAmJiAhdGhpcy5nZXRTZXR0aW5nKCdwYWdlci5kaXNwbGF5JykpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogbW92ZSB0byBzZWxlY3RhYmxlPyBTZXBhcmF0ZSBkaXJlY3RpdmVcclxuICBkZXRlcm1pbmVSb3dUb1NlbGVjdChjaGFuZ2VzOiBhbnkpOiBSb3cge1xyXG5cclxuICAgIGlmIChbJ2xvYWQnLCAncGFnZScsICdmaWx0ZXInLCAnc29ydCcsICdyZWZyZXNoJ10uaW5kZXhPZihjaGFuZ2VzWydhY3Rpb24nXSkgIT09IC0xKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGFTZXQuc2VsZWN0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snYWN0aW9uJ10gPT09ICdyZW1vdmUnKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzWydlbGVtZW50cyddLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIC8vIHdlIGhhdmUgdG8gc3RvcmUgd2hpY2ggb25lIHRvIHNlbGVjdCBhcyB0aGUgZGF0YSB3aWxsIGJlIHJlbG9hZGVkXHJcbiAgICAgICAgdGhpcy5kYXRhU2V0LndpbGxTZWxlY3RMYXN0Um93KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNldC5zZWxlY3RQcmV2aW91c1JvdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snYWN0aW9uJ10gPT09ICdhcHBlbmQnKSB7XHJcbiAgICAgIC8vIHdlIGhhdmUgdG8gc3RvcmUgd2hpY2ggb25lIHRvIHNlbGVjdCBhcyB0aGUgZGF0YSB3aWxsIGJlIHJlbG9hZGVkXHJcbiAgICAgIHRoaXMuZGF0YVNldC53aWxsU2VsZWN0TGFzdFJvdygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXNbJ2FjdGlvbiddID09PSAnYWRkJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5kYXRhU2V0LnNlbGVjdEZpcnN0Um93KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snYWN0aW9uJ10gPT09ICd1cGRhdGUnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGFTZXQuc2VsZWN0Rmlyc3RSb3coKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydhY3Rpb24nXSA9PT0gJ3ByZXBlbmQnKSB7XHJcbiAgICAgIC8vIHdlIGhhdmUgdG8gc3RvcmUgd2hpY2ggb25lIHRvIHNlbGVjdCBhcyB0aGUgZGF0YSB3aWxsIGJlIHJlbG9hZGVkXHJcbiAgICAgIHRoaXMuZGF0YVNldC53aWxsU2VsZWN0Rmlyc3RSb3coKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyZVNvdXJjZShzb3VyY2U6IGFueSk6IERhdGFTb3VyY2Uge1xyXG4gICAgY29uc3QgaW5pdGlhbFNvdXJjZTogYW55ID0gdGhpcy5nZXRJbml0aWFsU29ydCgpO1xyXG4gICAgaWYgKGluaXRpYWxTb3VyY2UgJiYgaW5pdGlhbFNvdXJjZVsnZmllbGQnXSAmJiBpbml0aWFsU291cmNlWydkaXJlY3Rpb24nXSkge1xyXG4gICAgICBzb3VyY2Uuc2V0U29ydChbaW5pdGlhbFNvdXJjZV0sIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdldFNldHRpbmcoJ3BhZ2VyLmRpc3BsYXknKSA9PT0gdHJ1ZSkge1xyXG4gICAgICBzb3VyY2Uuc2V0UGFnaW5nKDEsIHRoaXMuZ2V0U2V0dGluZygncGFnZXIucGVyUGFnZScpLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc291cmNlLnJlZnJlc2goKTtcclxuICAgIHJldHVybiBzb3VyY2U7XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFsU29ydCgpIHtcclxuICAgIGNvbnN0IHNvcnRDb25mOiBhbnkgPSB7fTtcclxuICAgIHRoaXMuZ2V0Q29sdW1ucygpLmZvckVhY2goKGNvbHVtbjogQ29sdW1uKSA9PiB7XHJcbiAgICAgIGlmIChjb2x1bW4uaXNTb3J0YWJsZSAmJiBjb2x1bW4uZGVmYXVsdFNvcnREaXJlY3Rpb24pIHtcclxuICAgICAgICBzb3J0Q29uZlsnZmllbGQnXSA9IGNvbHVtbi5pZDtcclxuICAgICAgICBzb3J0Q29uZlsnZGlyZWN0aW9uJ10gPSBjb2x1bW4uZGVmYXVsdFNvcnREaXJlY3Rpb247XHJcbiAgICAgICAgc29ydENvbmZbJ2NvbXBhcmUnXSA9IGNvbHVtbi5nZXRDb21wYXJlRnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc29ydENvbmY7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhU2V0LmdldFJvd3MoKVxyXG4gICAgICAuZmlsdGVyKHIgPT4gci5pc1NlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEFsbFJvd3Moc3RhdHVzOiBhbnkpIHtcclxuICAgIHRoaXMuZGF0YVNldC5nZXRSb3dzKClcclxuICAgICAgLmZvckVhY2gociA9PiByLmlzU2VsZWN0ZWQgPSBzdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3RSb3coKTogUm93IHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFTZXQuZ2V0Rmlyc3RSb3coKTtcclxuICB9XHJcblxyXG4gIGdldExhc3RSb3coKTogUm93IHtcclxuICAgIHJldHVybiB0aGlzLmRhdGFTZXQuZ2V0TGFzdFJvdygpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19