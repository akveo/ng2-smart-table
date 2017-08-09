import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './pages.routes';
import { SharedModule } from '../shared/shared.module';

import { Ng2FirstTableModule } from '../../ng2-first-table/ng2-first-table.module';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    Ng2FirstTableModule,
    SharedModule,
  ],
})
export class PagesModule {
}
