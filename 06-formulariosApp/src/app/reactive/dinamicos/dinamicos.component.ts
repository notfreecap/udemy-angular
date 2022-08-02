import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Elden Ring'],
      ['Sekiro'],
    ], [Validators.required])
  })


  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  get favoritos(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  campoIsValid(campo: string){
    return !this.miFormulario.get(campo)?.valid &&
           this.miFormulario.get(campo)?.touched 
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      this.nuevoFavorito.markAllAsTouched();
      return;
    }
    
    // this.favoritos.push(new FormControl(
    //     this.nuevoFavorito.value,
    //     Validators.required
    //   ));
    this.favoritos.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    
    this.nuevoFavorito.reset();

  }

  eliminarFavorito(index: number){
    this.favoritos.removeAt(index);
  }


  guardar(){
    if(!this.miFormulario.valid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();

  }

}
