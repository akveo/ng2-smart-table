import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';

import { NG2_SMART_TABLE_DIRECTIVES } from './ng2-smart-table.directives';
import { CellComponent } from './ng2-smart-table/components/cell/cell.component';
import { FilterComponent } from './ng2-smart-table/components/filter/filter.component';
import { PagerComponent } from './ng2-smart-table/components/pager/pager.component';
import { TitleComponent } from './ng2-smart-table/components/title/title.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2CompleterModule,
    FormsModule
  ],
  declarations: [
    CellComponent,
    FilterComponent,
    PagerComponent,
    TitleComponent,
    ...NG2_SMART_TABLE_DIRECTIVES
  ],
  exports: [
    ...NG2_SMART_TABLE_DIRECTIVES
  ]
})
export class Ng2SmartTableModule {
}