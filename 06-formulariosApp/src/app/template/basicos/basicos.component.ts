import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {


  @ViewChild('miFormulario') miformulario!: NgForm;

  initForm = {
    productos: 'default value',
    precio: 0,
    existencias: 0
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  guardar(){
    //miformulario.va
    console.log(this.miformulario);
    this.miformulario.resetForm();
  }

  nombreValido(): boolean{
    return true; //this.miformulario?.controls.producto?.invalid
  }

}
