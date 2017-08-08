import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2FirstTableModule } from '../../ng2-first-table';

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
    Ng2FirstTableModule,
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
