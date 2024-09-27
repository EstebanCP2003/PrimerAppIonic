import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginitaPageRoutingModule } from './paginita-routing.module';

import { PaginitaPage } from './paginita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginitaPageRoutingModule
  ],
  declarations: [PaginitaPage]
})
export class PaginitaPageModule {}
