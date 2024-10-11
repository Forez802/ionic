import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-3',
  templateUrl: './page-3.page.html',
  styleUrls: ['./page-3.page.scss'],
})
export class Page3Page implements OnInit {

  // Lista de personajes
  personajes = [
    {
      name: 'Katsuhiro Takeshi',
      description: 'Maestro de la katana y especialista en el sigilo.',
      image: 'assets/img/samurai.png', // Reemplaza con la ruta correcta de la imagen
    },
    {
      name: 'Eldrin Thalios',
      description: 'Mago de hechizos y protecciones místicas.',
      image: 'assets/img/magooscuro.png', // Reemplaza con la ruta correcta de la imagen
    },
    {
      name: 'Shadow Vortex',
      description: 'Especialista en armas, camuflaje y ciberataques.',
      image: 'assets/img/dagas.png', // Reemplaza con la ruta correcta de la imagen
    },
    {
      name: 'Kael Darksong',
      description: 'Arquero con habilidades de camuflaje y ataques a distancia.',
      image: 'assets/img/arquero.png', // Reemplaza con la ruta correcta de la imagen
    },
    {
      name: 'Lyraeus Varkas',
      description: 'Vampiro con resistencia, curación, magia y fuerza.',
      image: 'assets/img/vampiro.png', // Reemplaza con la ruta correcta de la imagen
    },
    {
      name: 'Khaos Malakar',
      description: 'Tanque especialista en cuerpo a cuerpo y magia oscura.',
      image: 'assets/img/paladin.png', // Reemplaza con la ruta correcta de la imagen
    },
    {
      name: 'Ethan Blackwood',
      description: 'Guerrero con alta velocidad, fuerza y resistencia.',
      image: 'assets/img/caballero.png', // Reemplaza con la ruta correcta de la imagen
    }
  ];

  constructor() { }

  ngOnInit() { }
}
