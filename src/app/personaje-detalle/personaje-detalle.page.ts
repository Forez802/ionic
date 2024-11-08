import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.page.html',
  styleUrls: ['./personaje-detalle.page.scss'],
})
export class PersonajeDetallePage implements OnInit {
  stats = {
    fuerza:7,
    max: 10
  };
  personaje: any;
  segmentValue = 'objetos';  
  segmentOptions: { label: string, value: string }[] = [];
  personajes = [
    { name: 'Katsuhiro Takeshi',  image: 'assets/img/samurai.png', stats: {fuerza:8, destreza:7, constitucion:6, sabiduria:5, inteligencia:4, apariencia:7}},
    { name: 'Eldrin Thalios', image: 'assets/img/magooscuro.png',stats: {fuerza:8, destreza:7, constitucion:6, sabiduria:5, inteligencia:4, apariencia:7}},
    { name: 'Shadow Vortex',  image: 'assets/img/dagas.png', stats: {fuerza:8, destreza:7, constitucion:6, sabiduria:5, inteligencia:4, apariencia:7} },
    { name: 'Kael Darksong',  image: 'assets/img/arquero.png', stats: {fuerza:8, destreza:7, constitucion:6, sabiduria:5, inteligencia:4, apariencia:7} },
    { name: 'Lyraeus Varkas',  image: 'assets/img/vampiro.png', stats: {fuerza:8, destreza:7, constitucion:6, sabiduria:5, inteligencia:4, apariencia:7} },
    { name: 'Khaos Malakar',  image: 'assets/img/paladin.png',stats: {fuerza:8, destreza:7, constitucion:6, sabiduria:5, inteligencia:4, apariencia:7} },
    { name: 'Ethan Blackwood',  image: 'assets/img/caballero.png',stats: {fuerza:8, destreza:7, constitucion:6, sabiduria:5, inteligencia:4, apariencia:7} }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.personaje = this.personajes.find(p => p.name === name);
    this.updateSegmentOptions();
  }

  getBlocks(value:number, max:number):boolean[] {
    return Array.from({length:max},(_,i) => i < value);
  }

  segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
    this.updateSegmentOptions();
  }

  updateSegmentOptions() {
    const allOptions = [
      { label: 'Stats 1', value: 'stats1' },
      { label: 'Stats 2', value: 'stats2' },
      { label: 'Stats 3', value: 'stats3' },
      { label: 'Objetos', value: 'objetos' }
    ];

    this.segmentOptions = allOptions.filter(option => option.value !== this.segmentValue);
  }
}
