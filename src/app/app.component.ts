import { Component } from '@angular/core';
import { ContactosService } from './services/contactos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactos: any = [];

  // Este es el primer metodo que se ejecuta al cargar nuestro componente
  constructor(private contactoServicio: ContactosService) {
    this.cargarContactos()
  }

  cargarContactos () {
    this.contactoServicio.obtenerContactos()
      .subscribe((contactos) => {
        this.contactos = contactos;
      },
      (error) => {
        console.error('Error consultando contactos: ', error)
      })
  }
}
