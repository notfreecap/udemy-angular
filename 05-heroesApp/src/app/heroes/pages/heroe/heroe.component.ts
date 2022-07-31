import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  idHeroe: string = "";

  heroe!: Heroe;

  constructor(
      private activatedRoute: ActivatedRoute,
      private heroeService: HeroesService,
      private router: Router
    ) { }

  ngOnInit(): void {  
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroeService.getHeroePorId(id))
      ).subscribe(heroe => this.heroe = heroe);
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

}
