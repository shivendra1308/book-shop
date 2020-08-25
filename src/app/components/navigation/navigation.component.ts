import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/modules/books/pages/books-catalog/books.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  public userName: string = '';
  public cartItems: any = 4;
  constructor(private bookService: BooksService) {
    this.userName = sessionStorage.getItem('username');
  }

  ngOnInit(): void {
    this.bookService.cartArrayService.subscribe((data) => {
      this.cartItems = data.length;
      console.log(this.cartItems);
    });
  }
}
