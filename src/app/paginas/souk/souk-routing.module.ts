import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoukPage } from './souk.page';

const routes: Routes = [
  {
    path: '',
    component: SoukPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoukPageRoutingModule {}
