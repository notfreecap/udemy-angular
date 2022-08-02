import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: [, [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: [, [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: [, [Validators.required, Validators.minLength(6)]],
    passwordConf: [, [Validators.required]]
  }, {
    validators: [this.validatorService.camposIguales('password', 'passwordConf')]
  });  

  get emailErrorMsg(): string{
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.['required']){
      return 'Email es obligatorio';
    }else if (errors?.['pattern']){
      return 'El valor ingresado no cumple con el formato';
    }else if (errors?.['emailUsado']){
      return 'El correo ya se encuentra en uso';
    }
    return '';

  }

  constructor(
      private fb:FormBuilder,
      private validatorService: ValidatorService,
      private emailValidator: EmailValidatorService
    ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Alejandro Dumas',
      email: 'aldumas@test.com',
      username: 'conde',
      password: 123456,
      passwordConf: 123456
    })
  }


  campoIsValid(campo: string){
    return this.miFormulario.get(campo)?.invalid && 
           this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    this.miFormulario.markAllAsTouched();
  }

}
