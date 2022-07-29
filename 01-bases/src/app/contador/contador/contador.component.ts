import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
        <h1>Hola mundo VContador</h1>
        <h1>{{title}}</h1>
        <h1>{{1+1}}</h1>

        <button (click)="numero = numero + 1;">+1</button>
        <h6>{{numero}}</h6>
        <button (click)="numero = numero - 1;">-1</button>
        <hr>
        <button (click)="acumular(1)">+1</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-1)">-1</button>

        <hr>
        <button (click)="acumular(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(base*-1)">-{{base}}</button>

    `
})
export class ContadorComponent{
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