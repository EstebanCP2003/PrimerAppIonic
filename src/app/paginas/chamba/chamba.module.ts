import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChambaPageRoutingModule } from './chamba-routing.module';

import { ChambaPage } from './chamba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChambaPageRoutingModule
  ],
  declarations: [ChambaPage]
})
export class ChambaPageModule {}
