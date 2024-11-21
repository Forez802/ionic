import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importar Router para la navegación

@Component({
  selector: 'app-page-4',
  templateUrl: './page-4.page.html',
  styleUrls: ['./page-4.page.scss'],
})
export class Page4Page implements OnInit {
  selectedImage: string | null = null; // Para almacenar la imagen seleccionada
  nuevoPersonaje: any = { nombre: '', image: '', stats: { fuerza: 5, destreza: 5, constitucion: 5, sabiduria: 5, inteligencia: 5, apariencia: 5 } }; // Personaje a crear

  constructor(private router: Router) {}

  ngOnInit() {}

  // Método para manejar la selección de archivo (imagen)
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result as string; // Guardamos la imagen como base64
        this.nuevoPersonaje.image = this.selectedImage; // Asignamos la imagen al nuevo personaje
      };
      reader.readAsDataURL(file); // Convertimos el archivo a una URL base64
    }
  }

  // Método para crear el personaje y navegar a la página 6
  crearPersonaje() {
    if (this.nuevoPersonaje.nombre && this.nuevoPersonaje.image) {
      // Crear un objeto de personaje
      const nuevoPersonaje = {
        name: this.nuevoPersonaje.nombre, // Usamos el nombre ingresado por el usuario
        image: this.nuevoPersonaje.image, // Usamos la imagen seleccionada
        stats: {
          fuerza: 5,
          destreza: 5,
          constitucion: 5,
          sabiduria: 5,
          inteligencia: 5,
          apariencia: 5,
        },
      };

      // Navegamos a page-6 pasando el nuevo personaje como parámetro
      this.router.navigate(['/page-6'], { state: { personaje: nuevoPersonaje } });
    } else {
      console.log('Faltan datos del personaje');
    }
  }
}
