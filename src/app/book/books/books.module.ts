import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MaterialModule } from 'src/app/material.module';
import { BookAddComponent } from '../book-add/book-add.component';
import { BookDeleteComponent } from '../book-delete/book-delete.component';
import { BookViewComponent } from '../book-view/book-view.component';
import { BookListComponent } from '../book-list/book-list.component';
import { BookRoutingModule } from '../book-routing.module';


@NgModule({
  declarations: [
    BookAddComponent,
    BookDeleteComponent,
    BookViewComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
FormsModule,ReactiveFormsModule,MatCommonModule,
MaterialModule,BookRoutingModule,
  ]
})
export class BooksModule { }
