import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [`
    ul.strings {
      list-style: none;
    }
  `]
})
export class BasicosComponent {
  nombreLower: string = 'uriel';
  nombreUpper: string = 'URIEL';
  nombreCompleto: string = 'uRiEl';

  fecha: Date = new Date();
}
