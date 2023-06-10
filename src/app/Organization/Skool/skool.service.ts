import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkoolService {
  private apiUrl = 'https://localhost:7269/api/Skools';

  constructor(private http: HttpClient) {}

  getSkools(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getSkool(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  getSkoolbyorg(orgid: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GetOrganizationSkools?orgid=${orgid}`);
  }
  addSkool(skool: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, skool);
  }

  updateSkool(id:number,skool: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, skool);
  }

  deleteSkool(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

