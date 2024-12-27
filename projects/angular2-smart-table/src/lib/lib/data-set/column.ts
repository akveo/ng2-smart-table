import {
  ColumnCompareFunction,
  ColumnComponentInitFunction,
  ColumnFilterFunction,
  ColumnValuePrepareFunction,
  ColumnValueStoreFunction,
  EditorSettings,
  FilterSettings,
  IColumn,
  IColumnType,
  ISortDirection,
  SanitizerSettings
} from '../settings';
import {DataSet} from './data-set';

export class Column {

  placeholder?: string;
  title: string;
  hide: boolean;
  type: IColumnType;
  sanitizer: SanitizerSettings;
  classHeader: string;
  classContent: string;
  width: string;
  /**
   * If this column was resized, this contains the new width in pixels.
   * Please be aware that this only contains the width specified in the width
   * CSS attribute. It does NOT necessarily equal the actual width of the column
   * unless the table-layout is fixed.
   * Also note carefully that in automatic table layouts the actual width of other columns,
   * that are not adjacent to the resized column, may also change. Those changes are not
   * reflected by this property.
   */
  resizedWidth?: number = undefined;
  isSortable: boolean;
  isEditable: boolean;
  isAddable: boolean;
  isRowHeading: boolean;
  isFilterable: boolean;
  defaultSortDirection: ISortDirection;
  editor: EditorSettings;
  filter: FilterSettings;
  renderComponent?: any;
  compareFunction?: ColumnCompareFunction;
  valuePrepareFunction?: ColumnValuePrepareFunction;
  valueStoreFunction?: ColumnValueStoreFunction;
  filterFunction?: ColumnFilterFunction;
  componentInitFunction?: ColumnComponentInitFunction;

  constructor(public id: string, protected settings: IColumn, protected dataSet: DataSet) {
    this.type = this.settings.type ?? 'text';
    this.placeholder = this.settings.placeholder;
    this.sanitizer = this.settings.sanitizer ?? {};
    this.title = this.settings.title ?? '';
    this.classHeader = this.settings.classHeader ?? '';
    this.classContent = this.settings.classContent ?? '';
    this.width = this.settings.width ?? 'auto';
    this.hide = this.settings.hide ?? false;
    this.editor = this.settings.editor ?? {type: 'text'};
    this.filter = this.settings.filter ?? {type: 'text'};
    this.renderComponent = this.settings.renderComponent;

    this.isFilterable = this.settings.isFilterable ?? true;
    this.isSortable = this.settings.isSortable ?? true;
    this.isEditable = this.settings.isEditable ?? true;
    this.isAddable = this.settings.isAddable ?? true;
    this.isRowHeading = this.settings.isRowHeading ?? false;

    this.defaultSortDirection = this.settings.sortDirection ?? null;

    this.compareFunction = this.settings.compareFunction;
    this.valuePrepareFunction = this.settings.valuePrepareFunction;
    this.valueStoreFunction = this.settings.valueStoreFunction;
    this.filterFunction = this.settings.filterFunction;
    this.componentInitFunction = this.settings.componentInitFunction;
  }

  getConfig(): any {
    return this.editor && this.editor.config;
  }
}
