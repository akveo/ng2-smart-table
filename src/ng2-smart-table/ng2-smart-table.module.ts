import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CellModule } from './components/cell/cell.module';
import { FilterModule } from './components/filter/filter.module';
import { PagerModule } from './components/pager/pager.module';
import { TBodyModule } from './components/tbody/tbody.module';
import { THeadModule } from './components/thead/thead.module';

import {ServerDataSource} from './lib/data-source/server/server.data-source';
import {ServerSourceConf} from './lib/data-source/server/server-source.conf';

import { Ng2SmartTableComponent } from './ng2-smart-table.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CellModule,
    FilterModule,
    PagerModule,
    TBodyModule,
    THeadModule,
    HttpClientModule
  ],
  declarations: [
    Ng2SmartTableComponent
  ],
  exports: [
    Ng2SmartTableComponent
  ],
  providers: [
  ]
})
export class Ng2SmartTableModule {
}
