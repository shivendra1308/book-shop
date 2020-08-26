import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../pages/books-catalog/book.model';
import { BooksService } from '../../pages/books-catalog/books.service';
import {MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  @Input() book: any;
  constructor(private bookService :BooksService, 
    private _snackBar :MatSnackBar
     ) { }

  ngOnInit(): void {
  }

  public addToCart(){
    const message = this.bookService.addToCart(this.book)
   this.openSnackBar(message, null);
  }
  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
