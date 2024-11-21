import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-6',
  templateUrl: './page-6.page.html',
  styleUrls: ['./page-6.page.scss'],
})
export class Page6Page implements OnInit {
  stats = {
    fuerza: 7,
    max: 10
  };
  personaje: any;
  segmentValue = 'objetos';  
  segmentOptions: { label: string, value: string }[] = [];
  
  // Definición de los personajes y sus estadísticas
  personajes = [
    { name: 'Katsuhiro Takeshi', image: 'assets/img/samurai.png', stats: {fuerza: 8, destreza: 7, constitucion: 6, sabiduria: 5, inteligencia: 4, apariencia: 7, estamina: 5, balance: 7, resistencia: 6, conocimiento: 9, fuerzavoluntad: 10, carisma: 3, musculatura: 10, salud: 6, punteria: 5, logica: 7, intuicion: 6, verborrea: 4}},
    { name: 'Eldrin Thalios', image: 'assets/img/magooscuro.png', stats: {fuerza: 8, destreza: 7, constitucion: 6, sabiduria: 5, inteligencia: 4, apariencia: 7, estamina: 5, balance: 7, resistencia: 6, conocimiento: 9, fuerzavoluntad: 10, carisma: 3, musculatura: 10, salud: 6, punteria: 5, logica: 7, intuicion: 6, verborrea: 4}},
    { name: 'Shadow Vortex', image: 'assets/img/dagas.png', stats: {fuerza: 8, destreza: 7, constitucion: 6, sabiduria: 5, inteligencia: 4, apariencia: 7, estamina: 5, balance: 7, resistencia: 6, conocimiento: 9, fuerzavoluntad: 10, carisma: 3, musculatura: 10, salud: 6, punteria: 5, logica: 7, intuicion: 6, verborrea: 4}},
    { name: 'Kael Darksong', image: 'assets/img/arquero.png', stats: {fuerza: 8, destreza: 7, constitucion: 6, sabiduria: 5, inteligencia: 4, apariencia: 7, estamina: 5, balance: 7, resistencia: 6, conocimiento: 9, fuerzavoluntad: 10, carisma: 3, musculatura: 10, salud: 6, punteria: 5, logica: 7, intuicion: 6, verborrea: 4}},
    { name: 'Lyraeus Varkas', image: 'assets/img/vampiro.png', stats: {fuerza: 8, destreza: 7, constitucion: 6, sabiduria: 5, inteligencia: 4, apariencia: 7, estamina: 5, balance: 7, resistencia: 6, conocimiento: 9, fuerzavoluntad: 10, carisma: 3, musculatura: 10, salud: 6, punteria: 5, logica: 7, intuicion: 6, verborrea: 4}},
    { name: 'Khaos Malakar', image: 'assets/img/paladin.png', stats: {fuerza: 8, destreza: 7, constitucion: 6, sabiduria: 5, inteligencia: 4, apariencia: 7, estamina: 5, balance: 7, resistencia: 6, conocimiento: 9, fuerzavoluntad: 10, carisma: 3, musculatura: 10, salud: 6, punteria: 5, logica: 7, intuicion: 6, verborrea: 4}},
    { name: 'Ethan Blackwood', image: 'assets/img/caballero.png', stats: {fuerza: 8, destreza: 7, constitucion: 6, sabiduria: 5, inteligencia: 4, apariencia: 7, estamina: 5, balance: 7, resistencia: 6, conocimiento: 9, fuerzavoluntad: 10, carisma: 3, musculatura: 10, salud: 6, punteria: 5, logica: 7, intuicion: 6, verborrea: 4}},
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.personaje = this.personajes.find(p => p.name === name);
    this.updateSegmentOptions();
    const navigation = window.history.state;
    if (navigation && navigation.personaje) {
      this.personaje = navigation.personaje;
    } else {
      console.log('No se recibió personaje');
    }
  }

  // Método para aumentar las estadísticas
  increaseStat(stat: string) {
    if (this.personaje.stats[stat] < this.stats.max) {
      this.personaje.stats[stat]++;
    }
  }

  // Método para disminuir las estadísticas
  decreaseStat(stat: string) {
    if (this.personaje.stats[stat] > 0) {
      this.personaje.stats[stat]--;
    }
  }

  // Método para crear los bloques de progreso (barras)
  getBlocks(value: number, max: number): boolean[] {
    return Array.from({ length: max }, (_, i) => i < value);
  }

  // Manejo de segmentos
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
