import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '**', redirectTo: '/' }
];

export const routing = RouterModule.forRoot(routes, { useHash: false });