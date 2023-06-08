import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/data-models/book';
import { BookService } from '../book.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  book: Book = new Book();

  constructor(private bookService: BookService,    private route: ActivatedRoute
) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getBook(id);
    }
  }
  getBook(id:any): void {
   // const id = +this.route!.snapshot!.paramMap!.get('id')!;
    this.bookService.getBookById(id).subscribe(book => this.book = book);
  }
  saveBook(): void {
if (this.book.bookId)
{
  this.bookService.updateBook(this.book).subscribe(() => {
    // Handle success or navigate to another page
    console.log('Book saved successfully');
  });
}
else
{
    this.bookService.addBook(this.book).subscribe(() => {
      // Handle success or navigate to another page
      console.log('Book saved successfully');
    });
  }
}
}
