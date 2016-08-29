import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NG2_SMART_TABLE_DIRECTIVES } from './ng2-smart-table.directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ...NG2_SMART_TABLE_DIRECTIVES
  ],
  exports: [
    ...NG2_SMART_TABLE_DIRECTIVES
  ]
})
export class Ng2SmartTableModule {
}