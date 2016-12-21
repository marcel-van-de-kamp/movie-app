import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent }
];

const routeProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [routeProviders],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule { }
