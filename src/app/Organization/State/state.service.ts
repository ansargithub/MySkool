import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from './state';
@Injectable({
  providedIn: 'root'
})
export class StateService {
  private apiUrl = 'https://localhost:7269/api/States';

  constructor(private http: HttpClient) {}

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(this.apiUrl);
  }

  addState(state: State): Observable<State> {
    return this.http.post<State>(this.apiUrl, state);
  }

  editState(stateId: number, state: State): Observable<State> {
    const url = `${this.apiUrl}/${stateId}`;
    return this.http.put<State>(url, state);
  }

  deleteState(stateId: number): Observable<void> {
    const url = `${this.apiUrl}/${stateId}`;
    return this.http.delete<void>(url);
  }
}
