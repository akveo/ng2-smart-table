import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  { path: '**', redirectTo: '/' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });