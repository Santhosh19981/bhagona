import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurservicePageRoutingModule } from './ourservice-routing.module';

import { OurservicePage } from './ourservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurservicePageRoutingModule
  ],
  declarations: [OurservicePage]
})
export class OurservicePageModule {}
