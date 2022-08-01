import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publisher = [
    {
      id: 'DC comics',
      desc: 'DC - comics'
    }, {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''    
  }

  constructor(
    private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private matdialog: MatDialog

  ) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroeService.getHeroePorId(id))
      )
      .subscribe((heroe) => this.heroe = heroe);    
  }

  guardar(){
    if (this.heroe.superhero.trim().length === 0)return;

    if(this.heroe.id){
      // update
      this.heroeService.actualizarHeroe(this.heroe)
      .subscribe(result => {
        this.heroe = result;
        this.mostrarsnakbar('registro actualizado');
      });
    }else{
      // insert
      this.heroeService.agregarHeroe(this.heroe)
      .subscribe(result => {
        this.router.navigate(['/heroes/editar', result.id]);
        this.mostrarsnakbar('registro creado');
      });
    }    
  }

  eliminar(){

    const dialog = this.matdialog.open(ConfirmarComponent, {
      width: '250px',
      data: {...this.heroe}
    });
    
    dialog.afterClosed()
      .pipe(
        switchMap(result => result ? this.heroeService.eliminarHeroe(this.heroe.id!) : [])
      )
      .subscribe(result => {
        this.router.navigate(['/heroes'])
      });


    /*this.heroeService.eliminarHeroe(this.heroe.id!)
      .subscribe(resp => {
        this.router.navigate(['/heroes'])
    });*/
  }

  mostrarsnakbar(mensaje: string){
    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500
    })

  }

}
