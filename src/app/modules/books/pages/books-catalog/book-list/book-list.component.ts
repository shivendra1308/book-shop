import { Component, OnInit } from '@angular/core';
import {BooksService } from '../books.service';
import { Subscription, Observable } from 'rxjs';
//import { Book } from '../book.model';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any = [];
  //books$: Observable<Book[]>;
  subscription: Subscription;
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.getRecipes().subscribe( res  =>{
      this.books = res['items'];
      console.log(this.books)
    });
  }

}
