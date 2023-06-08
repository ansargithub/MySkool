import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch } from './branch';
@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private apiUrl = 'https://localhost:7269/api/Branches'; // Replace with the actual API URL
  public isEditMode: boolean = false;
  private currentBranch: Branch;

  constructor(private http: HttpClient) { }

  setEditMode(editMode: boolean, branch?: Branch) {
    this.isEditMode = editMode;
    this.currentBranch = branch!;
  }

  getCurrentBranch(): Branch {
    return this.currentBranch;
  }

  getBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.apiUrl);
  }

  addBranch(branch: Branch): Observable<any> {
    return this.http.post(this.apiUrl, branch);
  }

  updateBranch(branch: Branch): Observable<any> {
    return this.http.put(`${this.apiUrl}/${branch.branchId}`, branch);
  }

  deleteBranch(branchId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${branchId}`);
  }
}
