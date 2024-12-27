import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {Angular2SmartTableComponent} from './angular2-smart-table.component';
import {CellModule} from './components/cell/cell.module';
import {FilterModule} from './components/filter/filter.module';
import {PagerModule} from './components/pager/pager.module';
import {TagsModule} from './components/tags/tags.module';
import {TBodyModule} from './components/tbody/tbody.module';
import {THeadModule} from './components/thead/thead.module';


@NgModule({
  declarations: [
    Angular2SmartTableComponent
  ],
  imports: [
    CommonModule,
    CellModule,
    FilterModule,
    PagerModule,
    TBodyModule,
    THeadModule,
    TagsModule
  ],
  exports: [
    Angular2SmartTableComponent
  ]
})
export class Angular2SmartTableModule { }
