import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChambaPage } from './chamba.page';

const routes: Routes = [
  {
    path: '',
    component: ChambaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChambaPageRoutingModule {}
