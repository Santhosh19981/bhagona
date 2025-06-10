import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheffordersPageRoutingModule } from './chefforders-routing.module';

import { CheffordersPage } from './chefforders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheffordersPageRoutingModule
  ],
  declarations: [CheffordersPage]
})
export class CheffordersPageModule {}
