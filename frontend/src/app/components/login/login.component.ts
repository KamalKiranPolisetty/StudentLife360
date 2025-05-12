import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from '../../_services/storage.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string='';

  constructor(
    private authService: AuthService,
    private stService:StorageService,
    private router : Router,
    private formBuilder: FormBuilder,
    private toastr:ToastrService,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const { email, password } = this.loginForm.value;
    this.authService.login({ email, password }).subscribe(
      (res) => {
        console.log('Logged in successfully!', res);
        this.toastr.success('User Logged in successfully!', 'Success');
        this.stService.saveUser(res);
        this.router.navigate(['profile']).then(() => {window.location.reload();
          });
      },
      (error) => {
        console.error('Login error:', error);
        this.toastr.error('Please enter valid details!', 'Error');
        //this.errorMessage = error.message || 'An error occurred during login.';
      }
    );
  }
}

