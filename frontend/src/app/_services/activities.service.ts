import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private baseUrl = 'http://localhost:4000/api/v1';

  constructor(private http:HttpClient) { }

  purchaseMealPlan(duration: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/purchasemeal`, { duration });
  }

  getPurchasedMealPlans(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/mealplans`);
  }

  purchaseBusTickets(zones: string[], quantity: number): Observable<any> {
    const body = { zones, quantity };
    return this.http.post<any>(`${this.baseUrl}/tickets`, body);
  }

  purchaseBusCards(quantity: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/cards`, { quantity });
  }


  getScheduledActivities(startDate: string, endDate: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/scheduled`, {
      params: {
        startDate: startDate,
        endDate: endDate
      }
    });
  }
  
  getAllActivities(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/activities`);
  }

  selectActivities(activityIds: string[]): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/selectactivities`, { activityIds });
  }

  getUserSelectedActivities(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/useracts`);
  }

  submitVote(candidate: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/vote`, { candidate });
  }

  getPollResults(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pollresults`);
  }

  checkIfUserVoted():void{
    
  }

}

