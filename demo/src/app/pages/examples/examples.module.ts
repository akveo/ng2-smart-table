import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { Ng2SmartTableModule } from '../../../../../src/ng2-smart-table.module';
import { examplesRouting } from './examples.routing';
import { ExamplesComponent } from './examples.component';
import {
  FilterExamplesComponent,
  DefaultExampleComponent,
  ServerExamplesComponent,
  CustomViewEditExamplesComponent,
  VariousExamplesComponent } from './examples';
import {
  AdvancedExampleFiltersComponent,
  AdvancedExampleConfirmComponent,
  AdvancedExamplesCustomEditorComponent,
  AdvancedExamplesTypesComponent,
  AdvancedExampleServerComponent,
  BasicExampleLoadComponent,
  BasicExampleMultiSelectComponent,
  BasicExampleSourceComponent,
  CustomEditorComponent,
  CustomRenderComponent } from './tables';

const TABLES = [
  AdvancedExampleFiltersComponent,
  AdvancedExampleConfirmComponent,
  AdvancedExamplesCustomEditorComponent,
  AdvancedExamplesTypesComponent,
  AdvancedExampleServerComponent,
  BasicExampleLoadComponent,
  BasicExampleMultiSelectComponent,
  BasicExampleSourceComponent,
  CustomEditorComponent,
  CustomRenderComponent
];

const EXAMPLES = [
  FilterExamplesComponent,
  DefaultExampleComponent,
  ServerExamplesComponent,
  CustomViewEditExamplesComponent,
  VariousExamplesComponent
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    SharedModule,
    examplesRouting
  ],
  entryComponents: [
    CustomEditorComponent,
    CustomRenderComponent,
  ],
  declarations: [
    ExamplesComponent,
    ...TABLES,
    ...EXAMPLES
  ]
})
export class ExamplesModule { }
