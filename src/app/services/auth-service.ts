// auth.service.ts

import { Injectable } from '@angular/core';
import { User } from '../data-models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7269/api/Users';
  private loggedIn = false;
  private user?: User|null ;
 

  constructor(private http:HttpClient) { 
    
  }

  login(user: User): Observable<User> {
    // Here, you can implement your logic to validate the user credentials
    // For simplicity, we'll assume the login is successful if the username and password match
   /*  if (user.username === 'a@gmail.com' && user.password === 'password') {
      this.loggedIn = true;
      this.user = user; */
     // const payload = {'user.username, user.password };
      return this.http.post<User>(`${this.apiUrl}/login`, user);
       
    /*}  */
   
    //return undefined;
  }

  logout(): void {
    this.loggedIn = false;
    this.user = null;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUser(): User|null {
     if (this.user!=null) return this.user;
     return null ;
  }
}
