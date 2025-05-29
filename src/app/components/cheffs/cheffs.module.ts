import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheffsPageRoutingModule } from './cheffs-routing.module';

import { CheffsPage } from './cheffs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheffsPageRoutingModule
  ],
  declarations: [CheffsPage]
})
export class CheffsPageModule {}
