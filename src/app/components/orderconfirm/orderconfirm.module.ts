import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderconfirmPageRoutingModule } from './orderconfirm-routing.module';

import { OrderconfirmPage } from './orderconfirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderconfirmPageRoutingModule
  ],
  declarations: [OrderconfirmPage]
})
export class OrderconfirmPageModule {}
