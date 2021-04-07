import { Component } from '@angular/core';
import { interval } from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  controlNombre: boolean = true;

  //i18nSelect
  nombre: string = 'Uriel';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Cris', 'Carlos', 'Lorena'];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente experando',
    'other': 'tenemos # clientes esperando' //el numeral indica el numero de elementos del arreglo
  }


  cambiarPersona() {
    this.controlNombre = !this.controlNombre;

    if (this.controlNombre) {
      this.nombre = 'Uriel';
      this.genero = 'masculino';
      return;
    }
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }

  borrarCiente(){
    this.clientes.pop();
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Enrique',
    edad: 21,
    direccion: 'Mexico'
  }

  //JSON Pipe

  heroes: Object[] = [
    {
      nombre : 'Superman',
      vuela : true
    },
    {
      nombre : 'Batman',
      vuela : false
    },
    {
      nombre : 'Robin',
      vuela : false
    }
  ];

  //Async pipe
  miObservable = interval(1000);
  miPromesa = new Promise( (resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos datos de promesa')
    }, 3500);
  } )
}
