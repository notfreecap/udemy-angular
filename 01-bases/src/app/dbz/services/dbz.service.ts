import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DBZService{
    

    private _personajes: Personaje[] = [];

    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje(personaje: Personaje):void{
        this._personajes.push(personaje);
    }
}