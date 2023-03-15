import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Mestro Rochi',
    poder: 1000
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje( personaje: Personaje){
  //   // console.log(argumento);
  //   // debugger;
  //   this.personajes.push(personaje);
  //   this.nuevo = {
  //     nombre: '',
  //     poder: 0
  //   };
  // }

  constructor(private dbzService: DbzService){
    // this.personajes = dbzService.personajes;
  }


}
