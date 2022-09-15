import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { SharedModule } from '../../shared/shared.module';
import { routes } from './examples.routes';
import { ExamplesComponent } from './examples.component';
import { AdvancedExampleFiltersComponent } from './filter/advanced-example-filters.component';
import { AdvancedExampleConfirmComponent } from './various/advanced-example-confirm.component';
import { AdvancedExamplesCustomEditorComponent } from './custom-edit-view/advanced-example-custom-editor.component';
import { AdvancedExamplesTypesComponent } from './custom-edit-view/advanced-example-types.component';
import { AdvancedExampleServerComponent } from './server/advanced-example-server.component';
import { BasicExampleLoadComponent } from './server/basic-example-load.component';
import { BasicExampleMultiSelectComponent } from './various/basic-example-multi-select.component';
import { CustomEditorComponent } from './custom-edit-view/custom-editor.component';
import { BasicExampleSourceComponent } from './filter/basic-example-source.component';
import { CustomRenderComponent } from './custom-edit-view/custom-render.component';
import { CustomFilterComponent } from './custom-edit-view/custom-filter.component';
import { FilterExamplesComponent } from './filter/filter-examples.component';
import { ServerExamplesComponent } from './server/server-examples.component';
import { CustomViewEditExamplesComponent } from './custom-edit-view/custom-edit-view-examples.component';
import { BasicExampleCustomActionsComponent } from './custom-edit-view/basic-example-custom-actions.component';
import { VariousExamplesComponent } from './various/various-examples.component';

import {
  BasicExampleButtonViewComponent,
  ButtonViewComponent,
} from './custom-edit-view/basic-example-button-view.component';

const EXAMPLES_COMPONENTS = [
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
  CustomFilterComponent,
  FilterExamplesComponent,
  ServerExamplesComponent,
  CustomViewEditExamplesComponent,
  VariousExamplesComponent,
  BasicExampleButtonViewComponent,
  BasicExampleCustomActionsComponent,
  ButtonViewComponent,
];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        Ng2SmartTableModule,
        SharedModule,
    ],
    declarations: [
        ExamplesComponent,
        ...EXAMPLES_COMPONENTS,
    ]
})
export class ExamplesModule { }
