import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Angular2SmartTableModule} from 'angular2-smart-table';

import {SharedModule} from '../../shared/shared.module';
import {routes} from './examples.routes';
import {ExamplesComponent} from './examples.component';
import {AdvancedExampleFiltersComponent} from './filter/advanced-example-filters.component';
import {AdvancedExampleFilterFunctionComponent} from './filter/advanced-example-filter-function.component';
import {AdvancedExampleConfirmComponent} from './various/advanced-example-confirm.component';
import {AdvancedExamplesCustomEditorComponent} from './custom-edit-view/advanced-example-custom-editor.component';
import {AdvancedExamplesTypesComponent} from './custom-edit-view/advanced-example-types.component';
import {AdvancedExampleServerComponent} from './server/advanced-example-server.component';
import {BasicExampleLoadComponent} from './server/basic-example-load.component';
import {BasicExampleMultiSelectComponent} from './various/basic-example-multi-select.component';
import {CustomEditorComponent} from './custom-edit-view/custom-editor.component';
import {BasicExampleSourceComponent} from './filter/basic-example-source.component';
import {CustomRenderComponent} from './custom-edit-view/custom-render.component';
import {CustomFilterComponent} from './custom-edit-view/custom-filter.component';
import {RowExpandComponent} from './custom-edit-view/row-expand-example';
import {FilterExamplesComponent} from './filter/filter-examples.component';
import {ServerExamplesComponent} from './server/server-examples.component';
import {CustomViewEditExamplesComponent} from './custom-edit-view/custom-edit-view-examples.component';
import {BasicExampleCustomActionsComponent} from './custom-edit-view/basic-example-custom-actions.component';
import {VariousExamplesComponent} from './various/various-examples.component';

import {
  BasicExampleButtonViewComponent,
  ButtonViewComponent,
} from './custom-edit-view/basic-example-button-view.component';
import {BasicExampleCustomActionsItemComponent} from './custom-edit-view/basic-example-custom-actions-item.component';
import {BasicExampleRowSelectionComponent} from './various/basic-example-row-selection.component';
import {ColumnHideExampleComponent} from './filter/column-hide-example.component';
import {BasicExampleRowHeadingsComponent} from "./various/basic-example-row-headings.component";

const EXAMPLES_COMPONENTS = [
  AdvancedExampleFiltersComponent,
  AdvancedExampleFilterFunctionComponent,
  AdvancedExampleConfirmComponent,
  AdvancedExamplesCustomEditorComponent,
  AdvancedExamplesTypesComponent,
  AdvancedExampleServerComponent,
  ColumnHideExampleComponent,
  BasicExampleLoadComponent,
  BasicExampleMultiSelectComponent,
  BasicExampleSourceComponent,
  BasicExampleRowSelectionComponent,
  BasicExampleRowHeadingsComponent,
  CustomEditorComponent,
  CustomRenderComponent,
  CustomFilterComponent,
  FilterExamplesComponent,
  ServerExamplesComponent,
  CustomViewEditExamplesComponent,
  VariousExamplesComponent,
  BasicExampleButtonViewComponent,
  BasicExampleCustomActionsComponent,
  BasicExampleCustomActionsItemComponent,
  ButtonViewComponent,
  RowExpandComponent
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    Angular2SmartTableModule,
    SharedModule,
  ],
  declarations: [
    ExamplesComponent,
    ...EXAMPLES_COMPONENTS,
  ],
})
export class ExamplesModule { }
