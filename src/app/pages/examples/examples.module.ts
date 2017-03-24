import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { Ng2SmartTableModule } from '../../../ng2-smart-table';
import { routes } from './examples.routes';
import { ExamplesComponent } from './examples.component';
import {
  FilterExamplesComponent,
  DefaultExampleComponent,
  ServerExamplesComponent,
  CustomViewEditExamplesComponent,
  VariousExamplesComponent,
} from './examples';
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
  CustomRenderComponent,
} from './tables';

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
  CustomRenderComponent,
];

const EXAMPLES = [
  FilterExamplesComponent,
  DefaultExampleComponent,
  ServerExamplesComponent,
  CustomViewEditExamplesComponent,
  VariousExamplesComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    Ng2SmartTableModule,
    SharedModule,
  ],
  entryComponents: [
    CustomEditorComponent,
    CustomRenderComponent,
  ],
  declarations: [
    ExamplesComponent,
    ...TABLES,
    ...EXAMPLES,
  ],
})
export class ExamplesModule { }
