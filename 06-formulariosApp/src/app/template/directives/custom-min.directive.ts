import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomDirective,
        multi: true
    }]
})
export class CustomDirective implements Validator{

    @Input() minimo!: number;

    constructor(){
        console.log('Directiva', this.minimo);
    }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {    
        return control.value < this.minimo 
            ? {'customMin': true} 
            : null;
    }
}