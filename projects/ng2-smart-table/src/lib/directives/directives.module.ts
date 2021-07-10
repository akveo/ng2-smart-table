import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2ResizerDirective } from './resizer.directive';

const DIRECTIVES = [
  Ng2ResizerDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...DIRECTIVES,
  ],
  exports: [
    ...DIRECTIVES,
  ],
})
export class DirectivesModule { }
