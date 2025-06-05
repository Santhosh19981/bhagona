import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebsitehomePage } from './websitehome.page';

const routes: Routes = [
  {
    path: '',
    component: WebsitehomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsitehomePageRoutingModule {}
