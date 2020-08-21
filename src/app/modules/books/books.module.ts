import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';

import { BooksComponent } from './pages/books-catalog/books.component';
import { BookListComponent } from './pages/books-catalog/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { TrendingBooksComponent } from './pages/books-catalog/trending-books/trending-books.component';

import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [BooksComponent, BookListComponent, BookItemComponent, TrendingBooksComponent],
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
