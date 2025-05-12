import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const AUTH_API= 'http://localhost:4000/api/v1/auth/';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   http: HttpClient = inject(HttpClient);
  

  login(credentials: any): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      credentials,
      httpOptions
    );
  }

  register(newUser: User): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      newUser,
      httpOptions
    );
  }


  updateUser(updatedUser: User): Observable<any> {
    return this.http.put(
      AUTH_API + 'updateUser',
      updatedUser,
      httpOptions
    );
  }

  getUserProfile(): Observable<any> {
    return this.http.get<User>(
      AUTH_API + 'getCurrentUser',
      httpOptions
    );
  }


  logout(): Observable<any> {
    return this.http.get(
      AUTH_API + 'logout',
      {}
    );
  }
}
