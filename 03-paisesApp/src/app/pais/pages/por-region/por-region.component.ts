import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }


  activarRegion(region:string){
    if (region == this.regionActiva) return;

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
      .subscribe({
        next: data => {
          this.paises = data;
        },
        error: error => {
          this.paises = [];
        }
      })
  }

}
