import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private apiUrl = 'https://localhost:7269/api/Boards'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getBoards(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBoard(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addBoard(board: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, board);
  }

  updateBoard(board: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${board.boardId}`, board);
  }

  deleteBoard(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
