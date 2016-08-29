import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing';

// App is our top level component
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';

// Application wide providers
const APP_PROVIDERS = [
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    routing
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS
  ]
})
export class AppModule {

}