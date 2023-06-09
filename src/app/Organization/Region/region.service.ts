import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from './region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private apiUrl = 'https://localhost:7269/api/Regions'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.apiUrl);
  }

  addRegion(region: Region): Observable<Region> {
    return this.http.post<Region>(this.apiUrl, region);
  }

  updateRegion(regionId: number, region: Region): Observable<Region> {
    const url = `${this.apiUrl}/${regionId}`;
    return this.http.put<Region>(url, region);
  }

  deleteRegion(regionId: number): Observable<void> {
    const url = `${this.apiUrl}/${regionId}`;
    return this.http.delete<void>(url);
  }
}
