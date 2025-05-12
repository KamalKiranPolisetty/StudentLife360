import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:4000/api/v1';

  constructor(private http: HttpClient) { }

  findRoommates(moveInDate: Date, gender: string, priceRange: number): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/roommate`, { moveInDate, gender, priceRange });
  }


  searchTextbooks(title?: string, author?: string, isbn?: string): Observable<any> {
    let params = new HttpParams();
    if (title) {
      params = params.append('title', title);
    }
    if (author) {
      params = params.append('author', author);
    }
    if (isbn) {
      params = params.append('isbn', isbn);
    }
    return this.http.get<any>(`${this.apiUrl}/textbooks`, { params }).pipe(
      catchError(error => {
        throw error;
      })
    );
  }

  searchPeople(firstName: string, lastName: string, department: string): Observable<any> {
    let params = '';
    if (firstName) params += `firstName=${firstName}&`;
    if (lastName) params += `lastName=${lastName}&`;
    if (department) params += `department=${department}`;

    return this.http.get<any>(`${this.apiUrl}/searchpeople?${params}`).pipe(
    );
  }


}
