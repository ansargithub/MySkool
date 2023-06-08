import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../data-models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private userRoles: string[] = [];
  private userRolesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
 private currentUser: User;
  constructor(private http: HttpClient) {

   }
 


  setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }
  getUserRoles(): Observable<string[]> {
    return this.userRolesSubject.asObservable();
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:5000/api/auth/login', { username, password })
      .pipe(
        tap((response) => {
          const token = response.token;
          // Save the token to local storage or session storage
          localStorage.setItem('token', token);

          // Fetch and store user roles
          this.fetchUserRoles().subscribe();
        })
      );
  }

  fetchUserRoles(): Observable<string[]> {
    const token = localStorage.getItem('token');
    return this.http.get<string[]>('http://localhost:5000/api/userroles', {
      headers: { 'Authorization': `Bearer ${token}` }
    }).pipe(
      tap((roles) => {
        this.userRoles = roles;
        this.userRolesSubject.next(roles);
      })
    );
  }

  hasAccess(requiredRoles: string[]): boolean {
    return requiredRoles.some((role) => this.userRoles.includes(role));
  }

  logout(): void {
    // Clear the token and user roles from local storage or session storage
    localStorage.removeItem('token');
    this.userRoles = [];
    this.userRolesSubject.next([]);
  }
  hasRole(role: string): boolean {
    return this.currentUser && this.currentUser.roles!.includes(role);
  }

}
