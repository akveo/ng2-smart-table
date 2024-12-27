import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FilterComponent} from './filter.component';
import {DefaultFilterComponent} from "./default-filter.component";
import {CustomFilterComponent} from "./custom-filter.component";
import {CheckboxFilterComponent} from './filter-types/checkbox-filter.component';
import {InputFilterComponent} from './filter-types/input-filter.component';
import {SelectFilterComponent} from './filter-types/select-filter.component';
import {DefaultFilter} from './filter-types/default-filter';
import {FilterDefault} from './filter-default';

const FILTER_COMPONENTS = [
  FilterDefault,
  DefaultFilter,
  FilterComponent,
  DefaultFilterComponent,
  CustomFilterComponent,
  CheckboxFilterComponent,
  InputFilterComponent,
  SelectFilterComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...FILTER_COMPONENTS,
  ],
  exports: [
    ...FILTER_COMPONENTS,
  ],
})
export class FilterModule { }
