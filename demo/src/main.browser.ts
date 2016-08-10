/*
 * Providers provided by Angular
 */
import { bootstrap } from '@angular/platform-browser-dynamic';
/*
 * Platform and Environment
 * our providers/directives/pipes
 */
import { PLATFORM_PROVIDERS } from './platform/browser';
import { ENV_PROVIDERS, decorateComponentRef } from './platform/environment';


/*
 * App Component
 * our top level component that holds all of our components
 */
import { AppComponent, APP_PROVIDERS } from './app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main(initialHmrState?: any): Promise<any> {

  return bootstrap(AppComponent, [
    // To add more vendor providers please look in the platform/ folder
    ...PLATFORM_PROVIDERS,
    ...ENV_PROVIDERS,
    ...APP_PROVIDERS,
  ])
    .then(decorateComponentRef)
    .catch(err => console.error(err));

}


/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if ('development' === ENV && HMR === true) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {
  // bootstrap when document is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
