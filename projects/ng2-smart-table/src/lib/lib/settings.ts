import {Column} from "./data-set/column";

export interface Settings {
  columns?: Columns,
  mode?: 'external' | 'inline';
  hideHeader?: boolean;
  hideSubHeader?: boolean;
  noDataMessage?: string;
  attr?: object;
  actions?: object;
  edit?: object;
  add?: object;
  delete?: object;
}

export interface Columns {
  [name: string] : object
}
