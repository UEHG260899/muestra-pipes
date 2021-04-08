import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {
  enMayusculas: boolean = true;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre : 'SuperMan',
      vuela : true,
      color : Color.azul
    },
    {
      nombre : 'Batman',
      vuela : false,
      color : Color.negro
    },
    {
      nombre : 'Robin',
      vuela : false,
      color : Color.verde
    },
    {
      nombre : 'Daredevil',
      vuela : false,
      color : Color.rojo
    },
    {
      nombre : 'Green Lantern',
      vuela : true,
      color : Color.verde
    },
  ]

  cambiarTipado(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }
}
