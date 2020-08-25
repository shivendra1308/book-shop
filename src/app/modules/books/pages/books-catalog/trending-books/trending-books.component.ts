import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-trending-books',
  templateUrl: './trending-books.component.html',
  styleUrls: ['./trending-books.component.css']
})
export class TrendingBooksComponent implements OnInit {

  books: any = [];
  //books$: Observable<Book[]>;
  subscription: Subscription;
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe( res  =>{
      this.books = res['items'];
      console.log(this.books)
    });
  }


}
