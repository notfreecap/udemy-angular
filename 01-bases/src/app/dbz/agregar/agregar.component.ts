import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private dbzService:DBZService) { }

  ngOnInit(): void {}

  //@Input() personajes: Personaje[] = [];

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0)
      return;
    // this.personajes.push(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
