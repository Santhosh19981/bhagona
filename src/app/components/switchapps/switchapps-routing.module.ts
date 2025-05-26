import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitchappsPage } from './switchapps.page';

const routes: Routes = [
  {
    path: '',
    component: SwitchappsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwitchappsPageRoutingModule {}
