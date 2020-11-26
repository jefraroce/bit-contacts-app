import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private http: HttpClient) { }

  obtenerContactos () {
    return this.http.get('http://localhost:3000/contactos')
  }
}
