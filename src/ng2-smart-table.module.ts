import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { CustomFormsModule } from 'ng2-validation'

import { DragulaModule } from 'ng2-dragula';

import { NG2_SMART_TABLE_DIRECTIVES } from './ng2-smart-table.directives';
import { CellComponent } from './ng2-smart-table/components/cell/cell.component';
import { ViewCellComponent } from './ng2-smart-table/components/cell/cell-view-mode/view-cell.component';
import {
  EditCellComponent,
  DefaultEditComponent,
  CustomEditComponent
} from './ng2-smart-table/components/cell/cell-edit-mode';
import {
  CompleterEditorComponent,
  InputEditorComponent,
  PasswordEditorComponent,
  SelectEditorComponent,
  TextareaEditorComponent,
  CheckboxEditorComponent,
  NumberEditorComponent
} from './ng2-smart-table/components/cell/cell-editors';
import { FilterComponent } from './ng2-smart-table/components/filter/filter.component';
import { PagerComponent } from './ng2-smart-table/components/pager/pager.component';
import { NG2_SMART_TABLE_THEAD_DIRECTIVES } from './ng2-smart-table/components/thead/thead.directives';
import { NG2_SMART_TABLE_TBODY_DIRECTIVES } from './ng2-smart-table/components/tbody/tbody.directives';

@NgModule({
  imports: [
    CommonModule,
    Ng2CompleterModule,
    FormsModule,
    DragulaModule,
    CustomFormsModule
  ],
  declarations: [
    CellComponent,
    ViewCellComponent,
    DefaultEditComponent,
    CustomEditComponent,
    EditCellComponent,
    CompleterEditorComponent,
    InputEditorComponent,
    PasswordEditorComponent,
    SelectEditorComponent,
    TextareaEditorComponent,
    CheckboxEditorComponent,
    NumberEditorComponent,
    FilterComponent,
    PagerComponent,
    ...NG2_SMART_TABLE_THEAD_DIRECTIVES,
    ...NG2_SMART_TABLE_TBODY_DIRECTIVES,
    ...NG2_SMART_TABLE_DIRECTIVES
  ],
  exports: [
    ...NG2_SMART_TABLE_DIRECTIVES
  ]
})
export class Ng2SmartTableModule {
}
