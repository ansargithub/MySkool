import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../data-models/book';
import { BookRoutingModule } from './book-routing.module';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://localhost:7269/api/Books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookById(bookId: number): Observable<Book> {
    const url = `${this.apiUrl}/${bookId}`;
    return this.http.get<Book>(url);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  updateBook(book: Book): Observable<Book> {
    const url = `${this.apiUrl}/${book.bookId}`;
    return this.http.put<Book>(url, book);
  }

  deleteBook(bookId: number): Observable<void> {
    const url = `${this.apiUrl}/${bookId}`;
    return this.http.delete<void>(url);
  }
}
