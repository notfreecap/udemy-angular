import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private router: Router,
      private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  login(){
    // TODO: Ir al backend
    // Validar el susuario

    // this.router.navigate(['/heroes']);

    this.authService.login()
      .subscribe(data => {
        if(data.id){
          this.router.navigate(['/heroes']);
        }
      });
  }

}
