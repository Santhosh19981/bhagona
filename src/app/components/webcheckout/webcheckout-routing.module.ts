import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebcheckoutPage } from './webcheckout.page';

const routes: Routes = [
  {
    path: '',
    component: WebcheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebcheckoutPageRoutingModule {}
