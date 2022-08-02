import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([aA-zZ]+) ([aA-zZ]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerStrider (control: FormControl): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();
    if(valor === 'strider'){
      return {
        noStrider: true
      }
    }
    return null;
  }

  camposIguales(campoA: string, campoB: string){
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass = formGroup.get('password')?.value;
      const passConf = formGroup.get('passwordConf')?.value;
      if(pass !== passConf){
        formGroup.get('passwordConf')?.setErrors({noIguales: true})
        return {noIguales: true}
      } 
      
      formGroup.get('passwordConf')?.setErrors(null)
      return null;
    }

  }
}
