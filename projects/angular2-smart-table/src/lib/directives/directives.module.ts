import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxResizerDirective} from './resizer.directive';

const DIRECTIVES = [
  NgxResizerDirective
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
