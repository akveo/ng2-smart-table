import { Row } from './row';
import { Column } from './column';
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
export { DataSet };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvbGliL2RhdGEtc2V0L2RhdGEtc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDNUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQztJQVVFLGlCQUFZLElBQXFCLEVBQVksY0FBc0I7UUFBdkQscUJBQUEsRUFBQSxTQUFxQjtRQUFZLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBTnpELFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFrQixFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUV0QixlQUFVLEdBQVcsT0FBTyxDQUFDO1FBR3JDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHlCQUFPLEdBQVAsVUFBUSxJQUFnQjtRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDRCQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELHlCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELDZCQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELDRCQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FB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OlsiaW1wb3J0IHsgUm93IH0gZnJvbSAnLi9yb3cnO1xyXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuL2NvbHVtbic7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVNldCB7XHJcblxyXG4gIG5ld1JvdzogUm93O1xyXG5cclxuICBwcm90ZWN0ZWQgZGF0YTogQXJyYXk8YW55PiA9IFtdO1xyXG4gIHByb3RlY3RlZCBjb2x1bW5zOiBBcnJheTxDb2x1bW4+ID0gW107XHJcbiAgcHJvdGVjdGVkIHJvd3M6IEFycmF5PFJvdz4gPSBbXTtcclxuICBwcm90ZWN0ZWQgc2VsZWN0ZWRSb3c6IFJvdztcclxuICBwcm90ZWN0ZWQgd2lsbFNlbGVjdDogc3RyaW5nID0gJ2ZpcnN0JztcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogQXJyYXk8YW55PiA9IFtdLCBwcm90ZWN0ZWQgY29sdW1uU2V0dGluZ3M6IE9iamVjdCkge1xyXG4gICAgdGhpcy5jcmVhdGVDb2x1bW5zKGNvbHVtblNldHRpbmdzKTtcclxuICAgIHRoaXMuc2V0RGF0YShkYXRhKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZU5ld1JvdygpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YShkYXRhOiBBcnJheTxhbnk+KSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5jcmVhdGVSb3dzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcclxuICB9XHJcblxyXG4gIGdldFJvd3MoKTogQXJyYXk8Um93PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yb3dzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3RSb3coKTogUm93IHtcclxuICAgIHJldHVybiB0aGlzLnJvd3NbMF07XHJcbiAgfVxyXG5cclxuICBnZXRMYXN0Um93KCk6IFJvdyB7XHJcbiAgICByZXR1cm4gdGhpcy5yb3dzW3RoaXMucm93cy5sZW5ndGggLSAxXTtcclxuICB9XHJcblxyXG4gIGZpbmRSb3dCeURhdGEoZGF0YTogYW55KTogUm93IHtcclxuICAgIHJldHVybiB0aGlzLnJvd3MuZmluZCgocm93OiBSb3cpID0+IHJvdy5nZXREYXRhKCkgPT09IGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZGVzZWxlY3RBbGwoKSB7XHJcbiAgICB0aGlzLnJvd3MuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgIHJvdy5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhyb3c6IFJvdyk6IFJvdyB7XHJcbiAgICBjb25zdCBwcmV2aW91c0lzU2VsZWN0ZWQgPSByb3cuaXNTZWxlY3RlZDtcclxuICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcclxuXHJcbiAgICByb3cuaXNTZWxlY3RlZCA9ICFwcmV2aW91c0lzU2VsZWN0ZWQ7XHJcbiAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xyXG4gIH1cclxuXHJcbiAgbXVsdGlwbGVTZWxlY3RSb3cocm93OiBSb3cpOiBSb3cge1xyXG4gICAgcm93LmlzU2VsZWN0ZWQgPSAhcm93LmlzU2VsZWN0ZWQ7XHJcbiAgICB0aGlzLnNlbGVjdGVkUm93ID0gcm93O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0UHJldmlvdXNSb3coKTogUm93IHtcclxuICAgIGlmICh0aGlzLnJvd3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgaW5kZXggPSB0aGlzLnNlbGVjdGVkUm93ID8gdGhpcy5zZWxlY3RlZFJvdy5pbmRleCA6IDA7XHJcbiAgICAgIGlmIChpbmRleCA+IHRoaXMucm93cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgaW5kZXggPSB0aGlzLnJvd3MubGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlbGVjdFJvdyh0aGlzLnJvd3NbaW5kZXhdKTtcclxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGaXJzdFJvdygpOiBSb3cge1xyXG4gICAgaWYgKHRoaXMucm93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0Um93KHRoaXMucm93c1swXSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUm93O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0TGFzdFJvdygpOiBSb3cge1xyXG4gICAgaWYgKHRoaXMucm93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0Um93KHRoaXMucm93c1t0aGlzLnJvd3MubGVuZ3RoIC0gMV0pO1xyXG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFJvdztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdpbGxTZWxlY3RGaXJzdFJvdygpIHtcclxuICAgIHRoaXMud2lsbFNlbGVjdCA9ICdmaXJzdCc7XHJcbiAgfVxyXG5cclxuICB3aWxsU2VsZWN0TGFzdFJvdygpIHtcclxuICAgIHRoaXMud2lsbFNlbGVjdCA9ICdsYXN0JztcclxuICB9XHJcblxyXG4gIHNlbGVjdCgpOiBSb3cge1xyXG4gICAgaWYgKHRoaXMuZ2V0Um93cygpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy53aWxsU2VsZWN0KSB7XHJcbiAgICAgIGlmICh0aGlzLndpbGxTZWxlY3QgPT09ICdmaXJzdCcpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEZpcnN0Um93KCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMud2lsbFNlbGVjdCA9PT0gJ2xhc3QnKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RMYXN0Um93KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy53aWxsU2VsZWN0ID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdEZpcnN0Um93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVOZXdSb3coKSB7XHJcbiAgICB0aGlzLm5ld1JvdyA9IG5ldyBSb3coLTEsIHt9LCB0aGlzKTtcclxuICAgIHRoaXMubmV3Um93LmlzSW5FZGl0aW5nID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBjb2x1bW5zIGJ5IG1hcHBpbmcgZnJvbSB0aGUgc2V0dGluZ3NcclxuICAgKiBAcGFyYW0gc2V0dGluZ3NcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIGNyZWF0ZUNvbHVtbnMoc2V0dGluZ3M6IGFueSkge1xyXG4gICAgZm9yIChjb25zdCBpZCBpbiBzZXR0aW5ncykge1xyXG4gICAgICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2gobmV3IENvbHVtbihpZCwgc2V0dGluZ3NbaWRdLCB0aGlzKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSByb3dzIGJhc2VkIG9uIGN1cnJlbnQgZGF0YSBwcmVwYXJlZCBpbiBkYXRhIHNvdXJjZVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgY3JlYXRlUm93cygpIHtcclxuICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICB0aGlzLnJvd3MucHVzaChuZXcgUm93KGluZGV4LCBlbCwgdGhpcykpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==