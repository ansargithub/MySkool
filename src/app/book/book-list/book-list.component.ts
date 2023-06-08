import { Component } from '@angular/core';
import { Book } from 'src/app/data-models/book';
import { BookService } from '../book.service';
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[]|undefined;
  bookColumns: string[] = ['bookCode', 'bookId', 'title', 'size', 'author', 'color', 'dated', 'isbNo', 'userId', 'lmd', 'lmu', 'status', 'purchaseId', 'salesOrderId', 'soldStatus', 'barcode','actions'];

  constructor(private bookService: BookService) { }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }
}
