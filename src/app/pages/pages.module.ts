import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { routes } from './pages.routes';
import { SharedModule } from '../shared/shared.module';

import { Ng2SmartTableModule } from '../../ng2-smart-table/ng2-smart-table.module';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    Ng2SmartTableModule,
    SharedModule,
  ],
})
export class PagesModule {
}
