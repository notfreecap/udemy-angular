import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    username: ['Test', [Validators.required, Validators.minLength(4)]],
    email: ['prueba@hma.com', [Validators.required, Validators.email]],
    password: ['mySafePassword1*', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  register(){
    if(this.miFormulario.invalid) return;

    const { username, email, password } = this.miFormulario.value;
    this.authService.register(username, email, password)
      .subscribe(response => {
        if(response === true){
          this.router.navigateByUrl('/dashboard');
        }else{
          Swal.fire('Error', response, 'error');
        }
      });    
  }
}
