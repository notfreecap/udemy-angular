import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { CallingCode } from '../interfaces/callingCode.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  get getParams(){
    return new HttpParams().set('fields', 'flag,capital,name,population,cioc');
  }


  constructor(private http: HttpClient) { }


  buscarPais(termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.getParams});
  }

  buscarCapital(termino:string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.getParams});
  }
  
  getPaisPorAlpha(id:string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/codes=${id}`
    return this.http.get<Country[]>(url);
  }

  buscarRegion(region:string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url, {params: this.getParams});
  }

}
