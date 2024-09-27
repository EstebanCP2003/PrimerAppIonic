import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'chamba',
    loadChildren: () => import('./paginas/chamba/chamba.module').then( m => m.ChambaPageModule)
  },
  {
    path: 'souk',
    loadChildren: () => import('./paginas/souk/souk.module').then( m => m.SoukPageModule)
  },
  {
    path: 'paginita',
    loadChildren: () => import('./paginas/paginita/paginita.module').then( m => m.PaginitaPageModule)
  },
  {
    path: 'x3',
    loadChildren: () => import('./paginas/x3/x3.module').then( m => m.X3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
