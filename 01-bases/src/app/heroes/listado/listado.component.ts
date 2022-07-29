import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  heroes: string[] = ['Spiderman', 'Ironman', 'Hilk', 'Thor']
  removed: string[] = [];

  ngOnInit(): void {
  }

  borrarHeroe(): void{
    let heroe = this.heroes.pop();
    if(typeof heroe !== "undefined")
      this.removed.push(heroe);
  }
}
