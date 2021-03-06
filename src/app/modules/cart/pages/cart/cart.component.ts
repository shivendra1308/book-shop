import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/modules/books/pages/books-catalog/books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public selectedBooks : any = []

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.getSelectedBooks();
  }

  public getSelectedBooks() {
    this.bookService.cartArrayBooksService.subscribe((data) => {
      this.selectedBooks = data;
    });
  }
  public removeFromCart(bookToRemove: any) {
    this.bookService.removeFromCart(bookToRemove);
  }


}
