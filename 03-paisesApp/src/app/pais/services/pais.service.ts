import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { CallingCode } from '../interfaces/callingCode.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';///name/peru
  private apiUrlV2: string = 'https://restcountries.com/v2';


  constructor(private http: HttpClient) { }


  buscarPais(termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }
  
  getPaisPorAlpha(id:number): Observable<CallingCode[]>{
    const url = `${this.apiUrlV2}/callingcode/${id}`
    return this.http.get<CallingCode[]>(url);
  }

}
