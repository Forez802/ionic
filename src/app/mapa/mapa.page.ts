import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  numeroDeJugadores: number = 0; // Inicializar con valor predeterminado
  nombreDeLaSala: string = '';  // Variable para el nombre de la sala

  constructor(
    private route: ActivatedRoute,
    private navController: NavController
  ) {}

  ngOnInit() {
    // Obtener el número de jugadores y el nombre desde la URL
    const jugadores = this.route.snapshot.queryParamMap.get('jugadores');
    const nombre = this.route.snapshot.queryParamMap.get('nombre');
    
    // Asignar el número de jugadores y el nombre de la sala
    this.numeroDeJugadores = jugadores ? parseInt(jugadores, 10) : 0;
    this.nombreDeLaSala = nombre ? nombre : 'Sin Nombre';
  }

  // Método para salir de la sala y redirigir a page-3
  salirDeSala() {
    this.navController.navigateBack('/page-3');
  }
}
