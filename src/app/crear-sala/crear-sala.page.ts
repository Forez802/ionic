import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.page.html',
  styleUrls: ['./crear-sala.page.scss'],
})
export class CrearSalaPage {
  numeroDeJugadores: number = 1; // Valor predeterminado

  constructor(
    private alertController: AlertController,
    private navController: NavController
  ) {}

  async crearSala() {
    const alert = await this.alertController.create({
      header: 'Sala Creada',
      message: 'La sala ha sido creada exitosamente.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Pasar el número de jugadores al redirigir a la página del mapa
            this.navController.navigateForward(`/mapa?jugadores=${this.numeroDeJugadores}`);
          },
        },
      ],
    });

    await alert.present();
  }
}
