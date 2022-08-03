import { Component, OnInit, Pipe } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { switchMap, tap } from 'rxjs';
import { PaisSmall, Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    fronteras: ['', Validators.required]
  });

  regiones: string[] = [];
  paises: PaisSmall[] = [];
  // fronteras: string[] = [];
  fronteras: PaisSmall[] = [];

  // UI
  cargando: boolean = false;


  constructor(
      private fb: FormBuilder,
      private paisesService: PaisesService
    ) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    // Cuando cambie la region
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( () => {
          this.miFormulario.get('pais')?.reset('');   
          this.cargando = true;
        }),
        switchMap(region => this.paisesService.getPaisesByRegion(region))
      )
      .subscribe(paises => {
        this.paises = paises;
        this.cargando = false;
      });

    // Cuando cambie el pais
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap( () => {
          this.fronteras = [];
          this.miFormulario.get('fronteras')?.reset('');
          this.cargando = true;
        }),
        switchMap(alpha => this.paisesService.getPaisByAlpha(alpha)),
        switchMap(pais => this.paisesService.getPaisesByFronteras(pais?.borders!))

      )
      .subscribe(paises => {        
        this.fronteras = paises        
        this.cargando = false;
      })
  }

  guardar(){

  }

}
