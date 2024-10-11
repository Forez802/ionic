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

  // credencial predeterminada
  validEmail: string = 'jorge@fet.com';
  validPassword: string = '12345';

  constructor(private navCtrl: NavController) {}

  onLogin() {
    if (this.email === this.validEmail && this.password === this.validPassword) {
      // pagina a redirigir
      this.navCtrl.navigateForward('/page-3');
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
