import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email: ['prueba@hma.com', Validators.required],
    password: ['mySafePassword1*', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.miFormulario.invalid) return;
    
    const { email, password } = this.miFormulario.value;
    this.authService.login(email, password)
      .subscribe(response => {
        if(response == true){          
          this.router.navigateByUrl('/dashboard');
        }else{          
          Swal.fire('Error', response, 'error');
        }
      })    
  }

}
