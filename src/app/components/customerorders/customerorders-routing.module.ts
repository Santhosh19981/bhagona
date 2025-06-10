import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerordersPage } from './customerorders.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerordersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerordersPageRoutingModule {}
