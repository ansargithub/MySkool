import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organization } from '../data-models/organization';
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  private apiUrl = 'https://localhost:7269/api/Organizations'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.apiUrl);
  }

  getOrganization(id: number): Observable<Organization> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Organization>(url);
  }

  addOrganization(organization: Organization): Observable<Organization> {
    return this.http.post<Organization>(this.apiUrl, organization);
  }

  updateOrganization(organization: Organization): Observable<Organization> {
    const url = `${this.apiUrl}/${organization.organizationId}`;
    return this.http.put<Organization>(url, organization);
  }

  deleteOrganization(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
