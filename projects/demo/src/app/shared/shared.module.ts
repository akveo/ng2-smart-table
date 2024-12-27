import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Angular2SmartTableModule } from 'angular2-smart-table';

import { HeaderComponent } from './components/header/header.component';
import { BasicExampleDataComponent } from './components/basic-example/basic-example-data.component';
import { BasicExampleComponent } from './components/basic-example/basic-example.component';

import { HighlightCodeDirective } from './directives/highlight.directive';

const SHARED_COMPONENTS = [
  HeaderComponent,
  BasicExampleComponent,
  BasicExampleDataComponent,
];

const SHARED_DIRECTIVES = [
  HighlightCodeDirective,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    Angular2SmartTableModule,
  ],
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
  ],
})
export class SharedModule { }
