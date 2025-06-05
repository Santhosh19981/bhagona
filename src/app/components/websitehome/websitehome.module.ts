import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebsitehomePageRoutingModule } from './websitehome-routing.module';

import { WebsitehomePage } from './websitehome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebsitehomePageRoutingModule
  ],
  declarations: [WebsitehomePage]
})
export class WebsitehomePageModule {}
