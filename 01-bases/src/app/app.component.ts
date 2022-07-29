import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador App';
  numero: number = 10;
  base: number = 5;

  sumar() {
    this.numero++;
  }

  restar(){
    this.numero--;
  }

  acumular(valor: number){
    this.numero += valor;
  }
}
