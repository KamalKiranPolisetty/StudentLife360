import { Component } from '@angular/core';
import { PasswordService } from '../../_services/password.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  step = 1;
  email: string='';
  otp: string='';
  newPassword: string='';
  confirmPassword: string='';


  constructor(private authService: PasswordService,
     private toastr:ToastrService,
     private router:Router
     ) { }

  sendResetPasswordEmail() {
    if (!this.email){
      this.toastr.warning("Please Enter your email");
      return;
    }
    this.authService.sendResetPasswordEmail(this.email)
      .subscribe(
        () => {
          console.log('OTP sent successfully');
          this.toastr.success('OTP sent Succefully')
          this.step = 2; 
        },
        error => {
          console.error('Error sending reset password email:', error);
          this.toastr.error(error.error.error || 'No user found','Error');
          
        }
      );
  }

  verifyOTP() {
    if (!this.otp) {
      this.toastr.warning("Please Enter OTP ");
      return;
    }
    this.authService.verifyOTP(this.email, this.otp)
      .subscribe(
        () => {
          this.toastr.success('OTP verified successfully','Success');
          this.step = 3;
        },
        error => {
          console.error('Error verifying OTP:', error);
          this.toastr.error(error.error.error || 'Error verifying OTP! Try again','Error');
        }
      );
  }

  setNewPassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.toastr.warning('Passwords do not match', 'Error');
      return;
    }

    if (!this.newPassword) {
      this.toastr.warning('Enter your new Password');
      return; 
    }
    this.authService.setNewPassword(this.email,this.otp, this.newPassword)
      .subscribe(
        () => {
          console.log('New password set successfully');
          this.toastr.success('New Password set successfully','Success');
          this.router.navigate(['login']);
        },
        error => {
          console.error('Error setting new password:', error);
          this.toastr.error(error.error.error || 'Error setting new password','Error');
        }
      );
  }

  passwordsMatch(): boolean {
    return this.newPassword === this.confirmPassword;
  }
}
