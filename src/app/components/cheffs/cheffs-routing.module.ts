import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheffsPage } from './cheffs.page';

const routes: Routes = [
  {
    path: '',
    component: CheffsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheffsPageRoutingModule {}
