import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/data-models/book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  book: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route!.snapshot!.paramMap!.get('id')!;
    this.bookService.getBookById(id).subscribe(book => this.book = book);
  }
}
