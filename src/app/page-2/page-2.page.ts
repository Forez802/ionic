import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.page.html',
  styleUrls: ['./page-2.page.scss'],
})
export class Page2Page {
  email: string = '';
  password: string = '';

  // credenciales predeterminadas
  validEmail: string = 'jorge@fet.com';
  validPassword: string = '12345';

  // nuevas credenciales
  newEmail: string = 'ana@fet.com';
  newPassword: string = '54321';

  constructor(private navCtrl: NavController) {}

  onLogin() {
    if (this.email === this.validEmail && this.password === this.validPassword) {
      // redirigir a page-3 si las credenciales son válidas
      this.navCtrl.navigateForward('/page-3');
    } else if (this.email === this.newEmail && this.password === this.newPassword) {
      // redirigir a page-4 si las nuevas credenciales son correctas
      this.navCtrl.navigateForward('/page-4');
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
