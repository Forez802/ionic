import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajeDetallePage } from './personaje-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajeDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajeDetallePageRoutingModule {}
