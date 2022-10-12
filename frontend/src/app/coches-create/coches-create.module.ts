import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CochesCreatePageRoutingModule } from './coches-create-routing.module';

import { CochesCreatePage } from './coches-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CochesCreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CochesCreatePage]
})
export class CochesCreatePageModule {}
