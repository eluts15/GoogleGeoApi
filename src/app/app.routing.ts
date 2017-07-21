import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeoFormComponent } from './geo-form/geo-form.component';

const appRoutes: Routes = [
 {
   path: '',
   component: GeoFormComponent
 },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
