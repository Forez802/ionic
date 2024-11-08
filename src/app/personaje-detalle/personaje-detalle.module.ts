import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajeDetallePageRoutingModule } from './personaje-detalle-routing.module';

import { PersonajeDetallePage } from './personaje-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajeDetallePageRoutingModule
  ],
  declarations: [PersonajeDetallePage]
})
export class PersonajeDetallePageModule {}
