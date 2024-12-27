import {DataSource} from './data-source/data-source';
import {Deferred} from './helpers';
import {Row} from './data-set/row';

export interface CreateEvent {
  /**
   * The underlying data source.
   */
  source: DataSource;
}

export interface CreateConfirmEvent extends CreateEvent {
  /**
   * The data that is supposed to be created.
   */
  newData: any;
  /**
   * A handle for resolving or rejecting the create event.
   */
  confirm: Deferred;
}

export interface CreateCancelEvent {
  /**
   * The last state of editing before the operation was canceled.
   */
  discardedData: any;
  /**
   * The underlying data source.
   */
  source: DataSource;
}

export interface EditEvent {
  /**
   * The row the edit operates on.
   */
  row: Row;
  /**
   * The row data (shortcut for row.getData()).
   */
  data: any;
  /**
   * The underlying data source.
   */
  source: DataSource;
}

export interface EditConfirmEvent extends EditEvent {
  /**
   * The new data (shortcut for row.getNewData()).
   */
  newData: any;
  /**
   * A handle for resolving or rejecting the edit event.
   */
  confirm: Deferred;
}

export interface EditCancelEvent {
  /**
   * The row the edit operates on.
   */
  row: Row;
  /**
   * The row data (shortcut for row.getData()).
   */
  data: any;
  /**
   * The last state of editing before the operation was canceled.
   */
  discardedData: any;
  /**
   * The underlying data source.
   */
  source: DataSource;
}

export interface DeleteEvent {
  /**
   * The row that is supposed to be deleted.
   */
  row: Row;
  /**
   * The row data (shortcut for row.getData()).
   */
  data: any;
  /**
   * The underlying data source.
   */
  source: DataSource;
}

export interface DeleteConfirmEvent extends DeleteEvent {
  /**
   * A handle for resolving or rejecting the delete event.
   */
  confirm: Deferred;
}

export interface CustomActionEvent {
  /**
   * The named action for this event.
   */
  action: string;
  /**
   * The row this custom action operates on.
   */
  row: Row;
  /**
   * The row data (shortcut for row.getData()).
   */
  data: any;
  /**
   * The underlying data source.
   */
  source: DataSource;
}

export interface RowSelectionEvent {
  /**
   * The row triggering the event (null if all rows are affected).
   */
  row: Row | null;
  /**
   * Convenience shortcut for row.getData().
   */
  data: any | null;
  /**
   Convenience shortcut for row.isSelected().
   */
  isSelected: boolean | null;
  /**
   * The data source of the table.
   */
  source: DataSource;
  /**
   * The new array of selected elements.
   */
  selected: any[];
}
