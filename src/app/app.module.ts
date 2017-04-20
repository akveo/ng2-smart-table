import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Ng2SmartTableModule } from '../ng2-smart-table';

import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

import { ScrollPositionDirective } from './theme/directives/scrollPosition.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScrollPositionDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    Ng2SmartTableModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
