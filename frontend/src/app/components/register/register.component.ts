import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form: any = {
    firstName: null,
    loginName: null,
    email: null,
    password: null
  };
  isSignUpFailed = false;
  isSuccessful = false;
  errorMessage = '';

  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) { }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      () => {
        this.isSignUpFailed = false;
        this.isSuccessful = true;
        this.toastr.success('User registered successfully!', 'Success');
        this.router.navigate(['profile']);
      },
      error => {
        console.error(error);
        this.isSignUpFailed = true;
        this.errorMessage = error.error.message || 'An error occurred during registration.';
        this.toastr.error('Registration failed! Please try again later.', 'Error');
      }
    );
  }
}
