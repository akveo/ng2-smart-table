import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { CellComponent } from './cell.component';
import { CustomEditComponent } from './cell-edit-mode/custom-edit.component';
import { DefaultEditComponent } from './cell-edit-mode/default-edit.component';
import { EditCellComponent } from './cell-edit-mode/edit-cell.component';
import { CheckboxEditorComponent } from './cell-editors/checkbox-editor.component';
import { CompleterEditorComponent } from './cell-editors/completer-editor.component';
import { InputEditorComponent } from './cell-editors/input-editor.component';
import { SelectEditorComponent } from './cell-editors/select-editor.component';
import { TextareaEditorComponent } from './cell-editors/textarea-editor.component';
import { CustomViewComponent } from './cell-view-mode/custom-view.component';
import { ViewCellComponent } from './cell-view-mode/view-cell.component';
import { DatepickerEditorComponent, DatepickerRenderComponent } from './cell-editors/datepicker-editor.component';

const CELL_COMPONENTS = [
  CellComponent,
  CustomEditComponent,
  DefaultEditComponent,
  EditCellComponent,
  CheckboxEditorComponent,
  CompleterEditorComponent,
  DatepickerEditorComponent,
  DatepickerRenderComponent,
  InputEditorComponent,
  SelectEditorComponent,
  TextareaEditorComponent,
  CustomViewComponent,
  ViewCellComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2CompleterModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  entryComponents: [
    DatepickerEditorComponent,
  ],
  declarations: [
    ...CELL_COMPONENTS,
  ],
  exports: [
    ...CELL_COMPONENTS,
  ],
})
export class CellModule { }
