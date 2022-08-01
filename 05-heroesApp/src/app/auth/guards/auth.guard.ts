import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
      private authService:AuthService,
      private router: Router
      ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canAccess()
      .pipe(
        tap(auth => {
          if (!auth){
            this.router.navigate(['/auth/login']);
          }
        })
      );
  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.canAccess()
      .pipe(
        tap(auth => {
          if (!auth){
            this.router.navigate(['/auth/login']);
          }
        })
      );
    
  }

  canAccess(){
    if(this.authService.auth.id){
      return of(true);
    }else{
      return this.authService.validateAuth();
    }    
  }
}
