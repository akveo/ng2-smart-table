import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CellComponent} from './cell.component';
import {CustomEditComponent} from './cell-edit-mode/custom-edit.component';
import {DefaultEditComponent} from './cell-edit-mode/default-edit.component';
import {EditCellComponent} from './cell-edit-mode/edit-cell.component';
import {CheckboxEditorComponent} from './cell-editors/checkbox-editor.component';
import {InputEditorComponent} from './cell-editors/input-editor.component';
import {SelectEditorComponent} from './cell-editors/select-editor.component';
import {TextareaEditorComponent} from './cell-editors/textarea-editor.component';
import {CustomViewComponent} from './cell-view-mode/custom-view.component';
import {ViewCellComponent} from './cell-view-mode/view-cell.component';
import {EditCellDefault} from './cell-edit-mode/edit-cell-default';
import {DefaultEditor} from './cell-editors/default-editor';
import {PipesModule} from '../../pipes/pipes.module';

const CELL_COMPONENTS = [
  CellComponent,
  EditCellDefault,
  DefaultEditor,
  CustomEditComponent,
  DefaultEditComponent,
  EditCellComponent,
  CheckboxEditorComponent,
  InputEditorComponent,
  SelectEditorComponent,
  TextareaEditorComponent,
  CustomViewComponent,
  ViewCellComponent,
];

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
    ],
  declarations: [
    ...CELL_COMPONENTS,
  ],
  exports: [
    ...CELL_COMPONENTS,
  ],
})
export class CellModule { }
