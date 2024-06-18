import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { DashboardComponent } from './dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  goToDashboard() {
    this.router.navigate(['/dashboard']); // Navigate to DashboardComponent
  }

   private baseURL = "https://localhost:8080/api/login";
  user:User = new User();
   
  constructor(private router: Router, private httpClient: HttpClient) { }


  verifyUser(user: User): Observable<Object> {
     
     console.log(user);
     return this.httpClient.post(`${this.baseURL}`, user);
     

  }






}
