import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { Ng2FirstTableModule } from '../../../ng2-first-table';
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
import { FilterExamplesComponent } from './filter/filter-examples.component';
import { ServerExamplesComponent } from './server/server-examples.component';
import { CustomViewEditExamplesComponent } from './custom-edit-view/custom-edit-view-examples.component';
import { BasicExampleCustomActionsComponent } from './custom-edit-view/basic-example-custom-actions.component';
import { VariousExamplesComponent } from './various/various-examples.component';

import {
  BasicExampleButtonViewComponent,
  ButtonViewComponent,
} from './custom-edit-view/basic-example-button-view.component';

// 单击/双击 事件
import { ClickEventComponent } from './clickEvent/clickEvent.component';
import { ClickExampleComponent } from './clickEvent/click-example.component';
import { DblclickExampleComponent } from './clickEvent/dblclick-example.component';
import { CbeExampleComponent } from './clickEvent/cbe-example.component';

// 新的组件
const NEW_COMPNENTS = [
    // 单击/双击
    ClickEventComponent,
    ClickExampleComponent,
    DblclickExampleComponent,
    // checkBoxEvent 复选框事件
    CbeExampleComponent,
];

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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    Ng2FirstTableModule,
    SharedModule,
  ],
  entryComponents: [
    CustomEditorComponent,
    CustomRenderComponent,
    ButtonViewComponent,
  ],
  declarations: [
    ExamplesComponent,
    ...EXAMPLES_COMPONENTS,
    ...NEW_COMPNENTS,
  ],
})
export class ExamplesModule { }
