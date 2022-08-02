import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {


  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4090'),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(0)
  // });


  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(1), Validators.required]]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'TXV 22',
      precio: 100
    });
  }  

  obtenerCampo(campo: string){
    return !this.miFormulario.get(campo)?.valid && this.miFormulario.get(campo)?.touched;
  }

  guardar(){
    if (!this.miFormulario.valid){
      this.miFormulario.markAllAsTouched();
      return;
    } 

    
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
