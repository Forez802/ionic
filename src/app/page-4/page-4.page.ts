import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-4',
  templateUrl: './page-4.page.html',
  styleUrls: ['./page-4.page.scss'],
})
export class Page4Page implements OnInit {
  personaje = {
    name: 'Katsuhiro Takeshi',
    image: 'assets/img/samurai.png',
    stats: {
      fuerza: 5,
      destreza: 5,
      constitucion: 5,
      sabiduria: 5,
      inteligencia: 5,
      apariencia: 5,
    },
  };
  segmentValue = 'stats1';  // Inicializa con un valor válido como 'stats1'
  segmentOptions: { label: string, value: string }[] = [];

  constructor() {}

  ngOnInit() {
    this.updateSegmentOptions();
  }

  // Método actualizado para manejar los bloques en función del valor de la estadística
  getBlocks(value: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < value);  // Usa el valor de la estadística como la cantidad de bloques llenos
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
      { label: 'Objetos', value: 'objetos' },
    ];

    // Filtra las opciones para que no incluya la opción seleccionada
    this.segmentOptions = allOptions.filter(option => option.value !== this.segmentValue);
  }
}
