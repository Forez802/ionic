import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      image: 'assets/img/samurai.png', 
    },
    {
      name: 'Eldrin Thalios',
      description: 'Mago de hechizos y protecciones místicas.',
      image: 'assets/img/magooscuro.png', 
    },
    {
      name: 'Shadow Vortex',
      description: 'Especialista en armas, camuflaje y ciberataques.',
      image: 'assets/img/dagas.png', 
    },
    {
      name: 'Kael Darksong',
      description: 'Arquero con habilidades de camuflaje y ataques a distancia.',
      image: 'assets/img/arquero.png', 
    },
    {
      name: 'Lyraeus Varkas',
      description: 'Vampiro con resistencia, curación, magia y fuerza.',
      image: 'assets/img/vampiro.png', 
    },
    {
      name: 'Khaos Malakar',
      description: 'Tanque especialista en cuerpo a cuerpo y magia oscura.',
      image: 'assets/img/paladin.png', 
    },
    {
      name: 'Ethan Blackwood',
      description: 'Guerrero con alta velocidad, fuerza y resistencia.',
      image: 'assets/img/caballero.png', 
    }
  ];

  constructor(private router:Router) { }

  ngOnInit() { }

  verDetalles(personaje: any) {
    this.router.navigate(['/personaje-detalle', personaje.name]);
  }
}
