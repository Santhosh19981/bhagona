import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwitchappsPageRoutingModule } from './switchapps-routing.module';

import { SwitchappsPage } from './switchapps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwitchappsPageRoutingModule
  ],
  declarations: [SwitchappsPage]
})
export class SwitchappsPageModule {}
