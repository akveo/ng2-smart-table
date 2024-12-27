import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CellModule} from '../cell/cell.module';

import {NgxSmartTableTbodyComponent} from './tbody.component';
import {TbodySaveCancelComponent} from './cells/save-cancel.component';
import {TbodyEditDeleteComponent} from './cells/edit-delete.component';
import {TbodyCustomComponent} from './cells/custom.component';
import {TbodyExpandRowComponent} from './cells/expand.component';
import {TbodyCustomItemComponent} from './cells/custom-item.component';
import {PipesModule} from '../../pipes/pipes.module';

const TBODY_COMPONENTS = [
  TbodySaveCancelComponent,
  TbodyEditDeleteComponent,
  TbodyCustomComponent,
  TbodyExpandRowComponent,
  TbodyCustomItemComponent,
  NgxSmartTableTbodyComponent
];

@NgModule({
    imports: [
        CommonModule,
        CellModule,
        PipesModule,
    ],
  declarations: [
    ...TBODY_COMPONENTS,
  ],
  exports: [
    ...TBODY_COMPONENTS,
  ],
})
export class TBodyModule { }
