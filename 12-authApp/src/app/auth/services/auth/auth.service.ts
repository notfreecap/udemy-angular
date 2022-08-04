import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map, catchError, of, tap } from 'rxjs';
import { AuthResponse, User } from '../../interfaces/authInterfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: User;

  get usuario (){
    return {...this._usuario};
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    const url = `${this.baseUrl}/auth`
    return this.http.post<AuthResponse>(url, {email, password})
      .pipe(
        tap(response => {
          if(response.status){
            sessionStorage.setItem('token', response.result.auth?.token!);
            this._usuario = response.result?.user!;
          }          
        }),
        map(resp => resp.status),
        catchError( response => of(response.error.result.message)
        )
      );
  }

  checkToken(): Observable<boolean>{
    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('Authorization', sessionStorage.getItem('token') || '')
    return this.http.get<AuthResponse>(url, {headers})
      .pipe(
        map(response => {
          sessionStorage.setItem('token', response.result.auth?.token!);
          this._usuario = response.result.user!;
          return response.status;
        }),
        catchError(() => of(false))
      );
  }

  logout(){
    sessionStorage.clear();
  }

  register(username: string, email: string, password: string){
    const url = `${this.baseUrl}/auth/new`;
    return this.http.post<AuthResponse>(url, {username, email, password})
      .pipe(
        tap(response => {
          if(response.status){
            sessionStorage.setItem('token', response.result.auth?.token || '')
            this._usuario = response.result.user!;
          }
        }),
        map(response => response.status),
        catchError(response => of(response.error.result.message)
        )
      );
  }

}
