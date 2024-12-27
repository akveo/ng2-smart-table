import {NgModule} from '@angular/core';
import {BypassSecurityTrustPipe} from './bypass-security-trust.pipe';

const PIPES = [
  BypassSecurityTrustPipe,
];

@NgModule({
  declarations: [...PIPES],
  exports: [...PIPES],
})
export class PipesModule {

}
