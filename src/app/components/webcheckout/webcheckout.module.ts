import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebcheckoutPageRoutingModule } from './webcheckout-routing.module';

import { WebcheckoutPage } from './webcheckout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebcheckoutPageRoutingModule
  ],
  declarations: [WebcheckoutPage]
})
export class WebcheckoutPageModule {}
