import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  

  constructor(private dbzService: DBZService) { }

  ngOnInit(): void {
  }

  get personajes(){
    return this.dbzService.personajes;
  }

  /*get personajes():Personaje[]{
    return this.dbzService.personajes;
  }

  agregarNuevoPersonaje(personaje: Personaje){
    this.personajes.push(personaje);
  }*/


}
