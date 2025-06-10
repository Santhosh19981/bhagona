import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheffordersPage } from './chefforders.page';

const routes: Routes = [
  {
    path: '',
    component: CheffordersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheffordersPageRoutingModule {}
