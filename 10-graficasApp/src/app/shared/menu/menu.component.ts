import { Component, OnInit } from '@angular/core';

interface MenuItem{
  ruta: string,
  texto: string
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[] = [
    {ruta: '/graficas/barras', texto: 'Barras'},
    {ruta: '/graficas/barras-doble', texto: 'Barras Doble'},
    {ruta: '/graficas/donut', texto: 'Donut'},
    {ruta: '/graficas/donut-http', texto: 'Donut Http'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
