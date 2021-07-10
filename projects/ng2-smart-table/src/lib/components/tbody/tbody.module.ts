import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CellModule } from '../cell/cell.module';

import { Ng2SmartTableTbodyComponent } from './tbody.component';
import { TbodyCreateCancelComponent } from './cells/create-cancel.component';
import { TbodyEditDeleteComponent } from './cells/edit-delete.component';
import { TbodyCustomComponent } from './cells/custom.component';
import {MatNativeDateModule} from '@angular/material/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

const TBODY_COMPONENTS = [
  TbodyCreateCancelComponent,
  TbodyEditDeleteComponent,
  TbodyCustomComponent,
  Ng2SmartTableTbodyComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CellModule,
    MatNativeDateModule,
    ScrollingModule
  ],
  declarations: [
    ...TBODY_COMPONENTS,
  ],
  exports: [
    ...TBODY_COMPONENTS,
  ],
})
export class TBodyModule { }
