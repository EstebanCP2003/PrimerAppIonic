import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoukPageRoutingModule } from './souk-routing.module';

import { SoukPage } from './souk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoukPageRoutingModule
  ],
  declarations: [SoukPage]
})
export class SoukPageModule {}
