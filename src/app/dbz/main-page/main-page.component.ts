import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'GOKU',
      poder: 15000,
    },
    {
      nombre: 'vegeta',
      poder: 10000,
    },
    {
      nombre: 'krilin',
      poder: 1000,
    },
  ];

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder:0
    };
  }

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
}
