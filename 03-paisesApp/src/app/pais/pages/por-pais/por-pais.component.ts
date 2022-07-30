import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;
  
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
    .subscribe({
      next: (paises) => {
        this.paises = paises;        
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }
    })
  }

  sugerencias(termino:string){
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: (paises) => {
          this.paisesSugeridos = paises.splice(0, 5);        
        },
        error: (err) => {
          //this.hayError = true;
          this.paisesSugeridos = [];
        }
      })
  }

  buscarSugerido(termino:string){
    this.mostrarSugerencias = false;
    this.buscar(termino);

  }

}
