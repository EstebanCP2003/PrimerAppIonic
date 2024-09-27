import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { X3PageRoutingModule } from './x3-routing.module';

import { X3Page } from './x3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    X3PageRoutingModule
  ],
  declarations: [X3Page]
})
export class X3PageModule {}
