import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private apiUrl = 'http://localhost:4000/api/v1';
  constructor(private http:HttpClient) { }
  sendResetPasswordEmail(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgotpassword`, { email });
  }

  verifyOTP(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verifyotp`, { email, otp });
  }

  setNewPassword(email: string,otp:string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/resetpassword`, { email,otp, newPassword });
  }
}
