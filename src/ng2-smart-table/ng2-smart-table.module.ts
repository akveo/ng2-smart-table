import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CellModule } from './components/cell/cell.module';
import { FilterModule } from './components/filter/filter.module';
import { PagerModule } from './components/pager/pager.module';
import { TBodyModule } from './components/tbody/tbody.module';
import { THeadModule } from './components/thead/thead.module';

import { Ng2SmartTableComponent } from './ng2-smart-table.component';
import { ValidatorService } from './lib/validator.service';
import { DefaultValidatorService } from './lib/default-validator.service';

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
  ],
  declarations: [
    Ng2SmartTableComponent,
  ],
  exports: [
    Ng2SmartTableComponent,
  ],
  providers: [
    { provide: ValidatorService, useClass: DefaultValidatorService }
  ],
})
export class Ng2SmartTableModule {
}
