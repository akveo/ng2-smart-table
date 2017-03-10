import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }       from './pages.routing';
import { SharedModule } from '../shared/shared.module';

import { DemoComponent } from './demo';
import { DocumentationComponent } from './documentation';
import { HomeComponent } from './home';
import { HeaderComponent } from '../components';
import { ExamplesComponent,
         FilterExamplesComponent,
         DefaultExampleComponent,
         ServerExamplesComponent,
         CustomViewEditExamplesComponent,
         VariousExamplesComponent } from './examples';
import { Ng2SmartTableModule } from '../../../../src/ng2-smart-table.module';
import { ScrollPositionDirective } from '../theme/directives/scrollPosition.directive';

import { BasicExampleComponent } from './demo/components/basic-example.component';
import { BasicExampleDataComponent } from './demo/components/basic-example-data.component';

import { BasicExampleSourceComponent } from './examples/tables/basic-example-source.component';
import { BasicExampleLoadComponent } from './examples/tables/basic-example-load.component';
import { BasicExampleMultiSelectComponent } from './examples/tables/basic-example-multi-select.component';
import { AdvancedExampleConfirmComponent } from './examples/tables/advanced-example-confirm.component';
import { AdvancedExampleServerComponent } from './examples/tables/advanced-example-server.component';
import { AdvancedExamplesTypesComponent } from './examples/tables/advanced-example-types.component';
import { AdvancedExamplesCustomEditorComponent } from './examples/tables/advanced-example-custom-editor.component';
import { AdvancedExampleFiltersComponent } from './examples/tables/advanced-example-filters.component';
import { CustomEditorComponent } from './examples/tables/custom-editor.component';
import { CustomRenderComponent } from './examples/tables/custom-render.component';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    SharedModule,
    routing,
  ],
  declarations: [
    HeaderComponent,
    DemoComponent,
    DocumentationComponent,
    HomeComponent,
    ExamplesComponent,
    DefaultExampleComponent,
    FilterExamplesComponent,
    ServerExamplesComponent,
    CustomViewEditExamplesComponent,
    VariousExamplesComponent,
    BasicExampleComponent,
    BasicExampleDataComponent,
    ScrollPositionDirective,
  ],
})
export class PagesModule {
}
