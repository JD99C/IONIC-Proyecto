import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CochesUpdatePage } from './coches-update.page';

const routes: Routes = [
  {
    path: '',
    component: CochesUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CochesUpdatePageRoutingModule {}
