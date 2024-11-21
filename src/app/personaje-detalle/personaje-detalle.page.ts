import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.page.html',
  styleUrls: ['./personaje-detalle.page.scss'],
})
export class PersonajeDetallePage implements OnInit {
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

  constructor(private alertController: AlertController,private route: ActivatedRoute) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.personaje = this.personajes.find(p => p.name === name);
    this.updateSegmentOptions();
  }

  async mostrarGuia() {
    const alert = await this.alertController.create({
      header: 'Guía de Estadísticas',
      cssClass: 'custom-alert',
      message: `
        Guía Específica de Estadísticas y Cálculos
1. Armor Class (Clase de Armadura)  
   - Afectada por:
     - Base: Valor inicial asignado al personaje, según su clase o equipo básico.
     - Constitución: Un modificador basado en el atributo "Constitución", que refleja la resistencia física del personaje.
     - Ítems: Bonos adicionales proporcionados por equipamiento o habilidades.
   - Cálculo Total:
     - ARMOR CLASS = BASE + CONSTITUCIÓN + ÍTEMS
   - Ejemplo: Si Base = 10, Constitución = 1, e Ítems = 0, el total sería 11.
2. Esquivar  
   - Afectada por:
     - Base: Valor inicial según la clase o nivel.
     - Destreza: Un modificador basado en el atributo "Destreza", que mide la agilidad del personaje.
     - Ítems: Bonificaciones que otorgan los equipos especializados en mejorar la evasión.
   - Cálculo Total:
    - ESQUIVAR = BASE + DESTREZA + ÍTEMS
   - Ejemplo: Si Base = 10, Destreza = 2, e Ítems = 1, el total sería 13.
3. Hit Points (Puntos de Vida)  
   - Afectada por:
     - Base: Vida inicial del personaje, generalmente determinada por la clase o el nivel.
     - Daño Sufrido: Daño acumulado que reduce la cantidad de vida disponible.
   - Cálculo Total:
   - VIDA ACTUAL = BASE - DAÑO SUFRIDO
   - Ejemplo: Si Base = 20 y Daño Sufrido = 5, la Vida Actual sería 15.



4. Ataque  
   - Afectada por:
     - Característica: El atributo principal que afecta el ataque, como Fuerza, Magia, o algún otro que dependa del tipo de personaje.
     - Bonus Item: Incrementos otorgados por armas o equipamiento.
     - Habilidad: Bonificaciones adicionales derivadas de habilidades especiales o mejoras.
   - Cálculo Total:
     - ATAQUE = CARACTERÍSTICA + BONUS ITEM + HABILIDAD
   - Ejemplo: Si Característica = 5, Bonus Item = 2, y Habilidad = 3, el total sería 10.
5. Experiencia y Nivel  
   - Experiencia: Representa los puntos obtenidos por completar misiones, derrotar enemigos, o realizar hazañas específicas. Se acumula con el tiempo.
   - Nivel: Se determina según un rango de experiencia. Por ejemplo:
  - Nivel 1: 0 - 999 XP
  - Nivel 2: 1000 - 1999 XP
   - Relación:
  - NIVEL = FUNCIÓN(EXPERIENCIA)
  - Nota: Consulta la tabla de experiencia y niveles del juego para más detalles.
Cómo se Relacionan las Estadísticas
- Armor Class y Esquivar están relacionadas con la defensa del personaje. Mientras una reduce el daño recibido directamente, la otra permite evitar ataques.
- Hit Points dependen directamente del daño recibido, pero indirectamente se pueden mejorar con ítems o habilidades que incrementen la "Base".
- Ataque afecta la capacidad ofensiva y puede mejorar con equipamiento, habilidades y características.
- Experiencia y Nivel controlan el acceso a mejores estadísticas, habilidades y bonificaciones.
Este sistema permite un balance entre los diferentes atributos y brinda flexibilidad para personalizar los personajes según las estrategias de juego.


La hoja de personaje contiene datos organizados en columnas relacionadas con características, habilidades, y estadísticas generales. Sin embargo, los encabezados y las secciones no están completamente alineados en un formato tabular estándar, lo que puede requerir un análisis más detallado.
Voy a identificar y extraer específicamente las "características" y las "estadísticas" de la hoja para analizar cómo funcionan en conjunto. Dame un momento.
La sección relevante sobre las características está organizada en una tabla que incluye las siguientes columnas clave:
1. CARACTERÍSTICAS: Nombres de las características principales del personaje, como "Fuerza", "Destreza", "Constitución", entre otras.
2. PUNTOS BASE: Valores iniciales asignados a cada característica.
3. BONIFICADOR: Modificaciones basadas en los puntos base, que pueden ser positivas o negativas.
4. BONIFICADOR POR COMPETENCIA: Ajustes adicionales otorgados por habilidades o talentos específicos.
5. BONIFICADOR POR EQUIPO: Ajustes adicionales que provienen del equipo que posee el personaje.
6. SE LE SUMA AL DADO: Total de bonificaciones o penalizaciones que se aplican al valor del dado en tiradas relacionadas con esa característica.
Además, hay subcaracterísticas adicionales como Estamina, Balance, Resistencia, etc., que parecen derivar o relacionarse con las características principales.
Voy a generar un texto explicativo que detalle cómo funcionan estas características y su impacto en las estadísticas del personaje.
Explicación de las Características y Estadísticas del Personaje
Las características en la hoja de personaje determinan las capacidades básicas del mismo. Estas se dividen en dos niveles: principales y derivadas. Aquí está el desglose de cómo funcionan:
1. Características Principales
- Fuerza: Representa la capacidad física para levantar peso, romper objetos y realizar tareas que requieren fuerza bruta. Afecta directamente habilidades como "Musculatura".
- Destreza: Define la agilidad, reflejos y precisión del personaje, influyendo en habilidades como "Puntería" y "Balance".
- Constitución: Mide la resistencia física y capacidad de soportar daño o fatiga, impactando atributos como "Resistencia" y "Salud".
- Inteligencia: Representa la capacidad de aprender, razonar y resolver problemas. Afecta habilidades como "Conocimiento" y "Lógica".
- Sabiduría: Refleja el entendimiento práctico del mundo, intuición y capacidad de percepción, vinculándose con habilidades como "Intuición".
- Apariencia: Indica carisma y atractivo físico, lo que afecta habilidades sociales como "Verborrea" y "Carisma".
Cada una tiene:
- Puntos Base: Valor inicial asignado al personaje durante la creación.
- Bonificador: Ajuste derivado de los puntos base según reglas establecidas (normalmente, valores altos generan bonificadores positivos y valores bajos, negativos).
- Bonificadores adicionales:
- Por competencias: Ajustes otorgados al especializarse en determinadas áreas.
- Por equipo: Mejoras que provienen del uso de objetos especiales.
2. Características Derivadas
Las características derivadas se calculan a partir de las principales y representan especializaciones o aspectos más detallados. Por ejemplo:
- Estamina (de Constitución): Refleja la energía y vitalidad.
- Balance (de Destreza): Indica equilibrio y coordinación.
- Resistencia (de Constitución): Mide la habilidad para resistir daño.
- Carisma (de Apariencia): Determina la influencia sobre otros personajes.
3. Estadísticas Finales
El valor "Se le suma al dado" combina los bonificadores de las distintas fuentes (base, competencias, equipo) y se aplica a las tiradas de dados durante el juego. Por ejemplo:
- Si tienes Fuerza 9, con un bonificador de -1, sin competencias ni equipo, el modificador total para tiradas relacionadas será -1.
Ejemplo Práctico:
- Para una tirada de "Puntería" que depende de la Destreza:
  - Puntos Base de Destreza: 13.
  - Bonificador: +1.
  - Bonificador por equipo: 0.
  - Modificador total: +1.
      `,
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          cssClass: 'alert-close-button',
        },
      ],
    });

    await alert.present();
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
