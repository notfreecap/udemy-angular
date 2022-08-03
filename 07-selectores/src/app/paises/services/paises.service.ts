import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais, PaisSmall } from '../interfaces/paises.interface';
import { combineLatest, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl = 'https://restcountries.com/v2';
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  get regiones(): string[] {
    return [...this._regiones]
  }

  constructor(private http: HttpClient) { }

  getPaisesByRegion(region: string): Observable<PaisSmall[]> {
    return this.http.get<PaisSmall[]>(`${this.baseUrl}/region/${region}?fields=alpha3Code,name`)
  }

  getPaisByAlpha(alpha: string): Observable<Pais | null> {
    if (alpha.trim().length === 0) return of (null);
    
    return this.http.get<Pais>(`${this.baseUrl}/alpha/${alpha}`);
  }

  getPaisByAlphaSmall(alpha: string): Observable<PaisSmall> {
    // if (alpha.trim().length === 0) return of (null);
    
    return this.http.get<PaisSmall>(`${this.baseUrl}/alpha/${alpha}?fields=alpha3Code,name`);
  }

  getPaisesByFronteras(borders: string[]): Observable<PaisSmall[]>{
    if(!borders)
      return of ([]);

    const peticiones: Observable<PaisSmall>[] = [];

    borders.forEach(codigo => {
      const peticion = this.getPaisByAlphaSmall(codigo);
      peticiones.push(peticion);
    });

    return combineLatest(peticiones);
  }

}
