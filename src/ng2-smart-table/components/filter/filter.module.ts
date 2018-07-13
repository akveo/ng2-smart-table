import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';

import { FilterComponent } from './filter.component';
import { CheckboxFilterComponent } from './filter-types/checkbox-filter.component';
import { CompleterFilterComponent } from './filter-types/completer-filter.component';
import { InputFilterComponent } from './filter-types/input-filter.component';
import { SelectFilterComponent } from './filter-types/select-filter.component';
import { DateFilterComponent } from './filter-types/date-filter.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

const FILTER_COMPONENTS = [
  FilterComponent,
  CheckboxFilterComponent,
  CompleterFilterComponent,
  InputFilterComponent,
  SelectFilterComponent,
  DateFilterComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2CompleterModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  declarations: [
    ...FILTER_COMPONENTS,
  ],
  exports: [
    ...FILTER_COMPONENTS,
  ],
})
export class FilterModule { }
