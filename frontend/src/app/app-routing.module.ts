import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'coches-list',
    loadChildren: () => import('./coches-list/coches-list.module').then( m => m.CochesListPageModule)
  },
  {
    path: 'coches-update',
    loadChildren: () => import('./coches-update/coches-update.module').then( m => m.CochesUpdatePageModule)
  },
  {
    path: 'coches-create',
    loadChildren: () => import('./coches-create/coches-create.module').then( m => m.CochesCreatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
