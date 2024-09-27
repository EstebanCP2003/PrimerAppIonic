import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { X3Page } from './x3.page';

const routes: Routes = [
  {
    path: '',
    component: X3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class X3PageRoutingModule {}
