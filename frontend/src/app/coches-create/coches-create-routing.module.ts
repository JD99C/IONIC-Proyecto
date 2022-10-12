import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CochesCreatePage } from './coches-create.page';

const routes: Routes = [
  {
    path: '',
    component: CochesCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CochesCreatePageRoutingModule {}
