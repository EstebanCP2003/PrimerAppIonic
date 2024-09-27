import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginitaPage } from './paginita.page';

const routes: Routes = [
  {
    path: '',
    component: PaginitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginitaPageRoutingModule {}
