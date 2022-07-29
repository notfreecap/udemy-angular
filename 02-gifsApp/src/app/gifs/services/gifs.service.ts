import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private servicioUrl = 'http://api.giphy.com/v1/gifs';
  private apiKey: string = 'rl2ZkF1JgJ5HtF51rlt7xACNa3wteJqp';

  // TODO: Cambiar el tipo de dato
  resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient) { 
    /*if  (localStorage.getItem('historial'))
      this._historial = JSON.parse(localStorage.getItem('hisotrial')!);*/

      this._historial = JSON.parse(localStorage.getItem('hisotrial')!) || [];
      this.resultados = JSON.parse(localStorage.getItem('resultado')!) || [];
  }

  buscarGifs(query: string = ''){
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query) && query.trim().length !== 0){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 9);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
      .subscribe((resp) => {      
        this.resultados = resp.data;
        localStorage.setItem('resultado', JSON.stringify(this.resultados));
      })
  }
}
