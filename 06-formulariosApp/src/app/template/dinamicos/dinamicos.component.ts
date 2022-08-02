import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {


  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'prueba',
    favoritos: [
      {
        id: 1,
        nombre: 'metal gear'
      },
      {
        id: 2,
        nombre: 'elden ring'
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('formulario posteado');
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1);
  }

  agregar(){    
    const nuevoJuego: Favorito = {
      id: this.persona.favoritos.length +1 ,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoJuego});
    this.nuevoJuego = '';
  }

}
