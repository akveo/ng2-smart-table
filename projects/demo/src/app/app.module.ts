import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Angular2SmartTableModule } from 'angular2-smart-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
