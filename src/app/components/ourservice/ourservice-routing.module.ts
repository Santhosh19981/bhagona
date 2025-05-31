import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurservicePage } from './ourservice.page';

const routes: Routes = [
  {
    path: '',
    component: OurservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurservicePageRoutingModule {}
