import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }       from './pages.routing';
import { SharedModule } from '../shared/shared.module';

import { DemoComponent } from './demo';
import { DocumentationComponent } from './documentation';
import { HomeComponent } from './home';
import { Ng2SmartTableModule } from '../../../../src/ng2-smart-table.module';
import { ScrollPositionDirective } from '../theme/directives/scrollPosition.directive';

import { BasicExampleComponent } from './demo/components/basic-example.component';
import { BasicExampleDataComponent } from './demo/components/basic-example-data.component';

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
    DemoComponent,
    DocumentationComponent,
    HomeComponent,
    BasicExampleComponent,
    BasicExampleDataComponent,
    ScrollPositionDirective,
  ],
})
export class PagesModule {
}
