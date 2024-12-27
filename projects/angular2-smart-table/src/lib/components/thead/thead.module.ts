import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FilterModule} from '../filter/filter.module';
import {CellModule} from '../cell/cell.module';

import {NgxSmartTableTheadComponent} from './thead.component';
import {TheadCreateCancelComponent} from './cells/create-cancel.component';
import {ActionsTitleComponent} from './cells/actions-title.component';
import {AddButtonComponent} from './cells/add-button.component';
import {ColumnTitleComponent} from './cells/column-title.component';
import {TitleComponent} from './cells/title/title.component';
import {TheadFitlersRowComponent} from './rows/thead-filters-row.component';
import {TheadFormRowComponent} from './rows/thead-form-row.component';
import {TheadTitlesRowComponent} from './rows/thead-titles-row.component';
import {DirectivesModule} from '../../directives/directives.module';
import {PipesModule} from '../../pipes/pipes.module';

const THEAD_COMPONENTS = [
  TheadCreateCancelComponent,
  ActionsTitleComponent,
  AddButtonComponent,
  ColumnTitleComponent,
  TitleComponent,
  TheadFitlersRowComponent,
  TheadFormRowComponent,
  TheadTitlesRowComponent,
  NgxSmartTableTheadComponent
];

@NgModule({
    imports: [
        CommonModule,
        FilterModule,
        CellModule,
        DirectivesModule,
        PipesModule
    ],
  declarations: [
    ...THEAD_COMPONENTS,
  ],
  exports: [
    ...THEAD_COMPONENTS,
  ],
})
export class THeadModule { }
