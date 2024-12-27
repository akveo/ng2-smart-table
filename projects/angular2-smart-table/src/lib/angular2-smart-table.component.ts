import {Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChange} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {DataSet} from './lib/data-set/data-set';
import {Row} from './lib/data-set/row';
import {DataSource, DataSourceChangeEvent} from './lib/data-source/data-source';
import {LocalDataSource} from './lib/data-source/local/local.data-source';
import {Grid} from './lib/grid';
import {deepExtend} from './lib/helpers';
import {RowClassFunction, Settings} from './lib/settings';
import {
  CreateCancelEvent,
  CreateConfirmEvent,
  CreateEvent,
  CustomActionEvent,
  DeleteConfirmEvent,
  DeleteEvent,
  EditCancelEvent,
  EditConfirmEvent,
  EditEvent,
  RowSelectionEvent,
} from './lib/events';
import {Column} from "./lib/data-set/column";
import {TagsListEntry} from "./components/tags/tag/tag.component";

@Component({
  selector: 'angular2-smart-table',
  styleUrls: ['./angular2-smart-table.component.scss'],
  templateUrl: './angular2-smart-table.component.html',
  standalone: false,
})
export class Angular2SmartTableComponent implements OnChanges, OnDestroy {

  @Input() source: any;
  @Input() settings!: Settings;

  @Output() rowSelect = new EventEmitter<RowSelectionEvent>();
  @Output() userRowSelect = new EventEmitter<RowSelectionEvent>();
  @Output() delete = new EventEmitter<DeleteEvent>();
  @Output() edit = new EventEmitter<EditEvent>();
  @Output() create = new EventEmitter<CreateEvent>();
  @Output() custom = new EventEmitter<CustomActionEvent>();
  @Output() deleteConfirm = new EventEmitter<DeleteConfirmEvent>();
  @Output() editConfirm = new EventEmitter<EditConfirmEvent>();
  @Output() editCancel = new EventEmitter<EditCancelEvent>();
  @Output() createConfirm = new EventEmitter<CreateConfirmEvent>();
  @Output() createCancel = new EventEmitter<CreateCancelEvent>();
  @Output() rowHover: EventEmitter<Row> = new EventEmitter<Row>();
  @Output() afterGridInit: EventEmitter<DataSet> = new EventEmitter<DataSet>();

  dataChangeSubscription?: Subscription;

  tableClass!: string;
  tableId!: string;
  perPageSelect!: number[];
  perPageSelectLabel!: string;
  isHideHeader!: boolean;
  isHideSubHeader!: boolean;
  isPagerDisplay!: boolean;
  isTagListShown: boolean = true;
  rowClassFunction!: RowClassFunction;

  grid!: Grid; // initially undefined, but will never be set to undefined, so we do not add undefined type here

  defaultSettings: Settings = {
    mode: 'inline',
    selectMode: 'single',
    switchPageToSelectedRowPage: false,
    hideHeader: false,
    hideSubHeader: false,
    resizable: false,
    hideable: false,
    hideTagList: false,
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
      debounceTime: 300,
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
    expand: {
      buttonContent: 'Expand'
    },
    attr: {
      id: '',
      class: '',
    },
    noDataMessage: 'No data found',
    columns: {},
    pager: {
      display: true,
      page: 1,
      perPage: 10,
      perPageSelect: [],
      perPageSelectLabel: 'Per Page:',
    },
    rowClassFunction: (_) => '',
  };

  isAllSelected: boolean = false;

  private onSelectRowSubscription!: Subscription;
  private destroyed$: Subject<void> = new Subject<void>();

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (this.grid !== undefined) {
      // grid is already created, just update the relevant properties
      if (changes['settings']) {
        this.grid.setSettings(this.prepareSettings());
        this.updateNotVisibleColumnTagList();
      }
      if (changes['source']) {
        this.source = this.prepareSource();
        this.grid.setSource(this.source);
      }
    } else if (this.settings !== undefined && this.source !== undefined) {
      // create a new grid, but only if settings and source are already available

      this.source = this.prepareSource();
      this.grid = new Grid(this.source, this.prepareSettings());
      this.updateNotVisibleColumnTagList();

      this.subscribeToOnSelectRow();
      /** Delay a bit the grid init event trigger to prevent empty rows */
      setTimeout(() => {
        this.afterGridInit.emit(this.grid.dataSet);
      }, 10);
    }

    // once everything is set up, we can copy some settings
    // we use the settings from the grid, because those are enriched with the defaults
    if (this.grid !== undefined) {
      this.tableId = this.grid.settings.attr!.id!;
      this.tableClass = this.grid.settings.attr!.class!;
      this.isHideHeader = this.grid.settings.hideHeader!;
      this.isHideSubHeader = this.grid.settings.hideSubHeader!;
      this.isTagListShown = !(this.grid.settings.hideTagList ?? false);
      this.isPagerDisplay = this.grid.settings.pager!.display!;
      this.perPageSelect = this.grid.settings.pager!.perPageSelect!;
      this.perPageSelectLabel = this.grid.settings.pager!.perPageSelectLabel!;
      this.rowClassFunction = this.grid.settings.rowClassFunction!;
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  onEditRowSelect(row: Row) {
    if (this.grid.settings.selectMode === 'single') {
      this.grid.selectRow(row);
      this.emitSelectRow(row);
    }
  }

  onUserSelectRow(row: Row) {
    if (this.grid.settings.selectMode === 'single') {
      this.grid.selectRow(row);
      this.emitUserSelectRow(row);
    }
  }

  onRowHover(row: Row) {
    this.rowHover.emit(row);
  }

  onMultipleSelectRow(row: Row) {
    this.grid.multipleSelectRow(row);
    // TODO: currently we make our life easy and just deselect the "select all" checkbox when needed
    //       but we do not check it, when we determine that the user has selected everything
    if (!row.isSelected) this.isAllSelected = false;
    this.emitUserSelectRow(row);
  }

  async onSelectAllRows() {
    this.isAllSelected = !this.isAllSelected;
    await this.grid.selectAllRows(this.isAllSelected);
    this.emitUserSelectRow(null);
  }

  onExpandRow(row: Row) {
    this.grid.expandRow(row);
  }

  prepareSource(): DataSource {
    let source: DataSource;
    if (this.source instanceof DataSource) {
      source = this.source;
    } else if (this.source instanceof Array) {
      source = new LocalDataSource(this.source);
    } else {
      source = new LocalDataSource();
    }

    // we have to hook up a listener to update some variables when the data source changes
    if (this.dataChangeSubscription) this.dataChangeSubscription.unsubscribe();
    this.dataChangeSubscription = source.onChanged().subscribe((changes: any) => this.processDataChange(changes));

    return source;
  }

  processDataChange(_: DataSourceChangeEvent): void {
    // here we can already assume that the source has been lifted to an instance of DataSource
    const source = this.source as DataSource;
    this.isAllSelected = source.isEveryElementSelected(
      this.grid.settings.selectMode === 'multi_filtered',
      true,
    );
  }

  prepareSettings(): Settings {
    return deepExtend({}, this.defaultSettings, this.settings);
  }

  getNotVisibleColumns(): Column[] {
    return (this.grid?.getColumns() ?? []).filter(column => column.hide);
  }

  notVisibleColumnTagsList: TagsListEntry[] = [];
  updateNotVisibleColumnTagList() {
    this.notVisibleColumnTagsList = this.getNotVisibleColumns().map(c => ({
      key: c.id,
      value: c.title,
    }));
  }

  onShowColumn(columnId: string) {
    this.grid.settings.columns[columnId].hide = false;
    this.grid.recreateDataSet();
    this.updateNotVisibleColumnTagList();
  }

  onHideColumn(columnId: string) {
    this.grid.settings.columns[columnId].hide = true;
    this.grid.recreateDataSet();
    this.updateNotVisibleColumnTagList();
  }

  private createRowSelectionEvent(row: Row | null): RowSelectionEvent {
    return {
      row: row,
      data: row ? row.getData() : null,
      isSelected: row ? row.getIsSelected() : null,
      source: this.source,
      selected: this.grid.getSelectedItems(),
    };
  }

  private emitUserSelectRow(row: Row | null) {
    this.userRowSelect.emit(this.createRowSelectionEvent(row));
    // always also emit the general event
    this.emitSelectRow(row);
  }

  private emitSelectRow(row: Row | null) {
    this.rowSelect.emit(this.createRowSelectionEvent(row));
  }

  private isIndexOutOfRange(index: number): boolean {
    const dataAmount = this.source?.count();
    return index < 0 || (typeof dataAmount === 'number' && index >= dataAmount);
  }

  private subscribeToOnSelectRow(): void {
    if (this.onSelectRowSubscription) {
      this.onSelectRowSubscription.unsubscribe();
    }
    this.onSelectRowSubscription = this.grid.onSelectRow()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((row) => {
        this.emitSelectRow(row);
      });
  }
}
