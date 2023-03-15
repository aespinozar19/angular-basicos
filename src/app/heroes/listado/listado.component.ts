import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  
  heroes: string[] = ['Spiderman','Ironman','Venom'];
  heroesBorrados: string = '';
  existenHeroesBorrados: boolean=false;


  borrarHeroe(): void{
    this.heroesBorrados = this.heroes.shift() || '';
    this.existenHeroesBorrados = true;
  }
  
}
