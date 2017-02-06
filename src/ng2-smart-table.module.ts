import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';

import { NG2_SMART_TABLE_DIRECTIVES } from './ng2-smart-table.directives';
import { CellComponent } from './ng2-smart-table/components/cell/cell.component';
import { ViewCellComponent } from './ng2-smart-table/components/cell/view-cell.component';
import { EditCellComponent } from './ng2-smart-table/components/cell/edit-cell.component';
import {
  CellCompleterComponent,
  CellInputComponent,
  CellSelectComponent,
  CellTextareaComponent,
  CellCheckboxComponent } from './ng2-smart-table/components/cell/cell-types';
import { FilterComponent } from './ng2-smart-table/components/filter/filter.component';
import { PagerComponent } from './ng2-smart-table/components/pager/pager.component';
import { TitleComponent } from './ng2-smart-table/components/title/title.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2CompleterModule,
    FormsModule
  ],
  declarations: [
    CellComponent,
    ViewCellComponent,
    EditCellComponent,
    CellCompleterComponent,
    CellInputComponent,
    CellSelectComponent,
    CellTextareaComponent,
    CellCheckboxComponent,
    FilterComponent,
    PagerComponent,
    TitleComponent,
    ...NG2_SMART_TABLE_DIRECTIVES
  ],
  exports: [
    ...NG2_SMART_TABLE_DIRECTIVES
  ]
})
export class Ng2SmartTableModule {
}
export { Cell } from './ng2-smart-table/lib/data-set/cell';
export { DefaultCellType } from './ng2-smart-table/components/cell/cell-types/default-cell-type';
