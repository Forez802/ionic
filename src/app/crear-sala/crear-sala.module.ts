import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearSalaPageRoutingModule } from './crear-sala-routing.module';

import { CrearSalaPage } from './crear-sala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearSalaPageRoutingModule
  ],
  declarations: [CrearSalaPage]
})
export class CrearSalaPageModule {}
