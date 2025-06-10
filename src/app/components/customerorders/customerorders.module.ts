import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerordersPageRoutingModule } from './customerorders-routing.module';

import { CustomerordersPage } from './customerorders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerordersPageRoutingModule
  ],
  declarations: [CustomerordersPage]
})
export class CustomerordersPageModule {}
