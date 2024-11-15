import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.page.html',
  styleUrls: ['./crear-sala.page.scss'],
})
export class CrearSalaPage {
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
            this.navController.navigateForward('/page-3');
          },
        },
      ],
    });

    await alert.present();
  }
}
