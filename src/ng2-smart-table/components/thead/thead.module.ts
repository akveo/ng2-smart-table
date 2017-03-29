import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterModule } from '../filter/filter.module';
import { CellModule } from '../cell/cell.module';

import { Ng2SmartTableTheadComponent } from './thead.component';
import { ActionsComponent } from './cells/actions.component';
import { ActionsTitleComponent } from './cells/actions-title.component';
import { AddButtonComponent } from './cells/add-button.component';
import { CheckboxSelectAllComponent } from './cells/checkbox-select-all.component';
import { ColumnTitleComponent } from './cells/column-title.component';
import { TitleComponent } from './cells/title/title.component';
import { TheadFitlersRowComponent } from './rows/thead-filters-row.component';
import { TheadFormRowComponent } from './rows/thead-form-row.component';
import { TheadTitlesRowComponent } from './rows/thead-titles-row.component';

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

@NgModule({
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
export class THeadModule { }
