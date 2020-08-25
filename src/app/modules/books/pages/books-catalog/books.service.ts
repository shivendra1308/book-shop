import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  // private books: Book[] = [
  //   new Book(
  //     'How to code in Js',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
  //   ),
  //   new Book(
  //     'Big Java Fan',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
  //   ),
  //   new Book(
  //     'How to code in Js',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
  //   ),
  //   new Book(
  //     'Big Java Fan',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
  //   ),
  //   new Book(
  //     'How to code in Js',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
  //   ),
  //   new Book(
  //     'Big Java Fan',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
  //   ),
  //   new Book(
  //     'How to code in Js',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
  //   ),
  //   new Book(
  //     'Big Java Fan',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
  //   ),
  //   new Book(
  //     'How to code in Js',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
  //   ),
  //   new Book(
  //     'Big Java Fan',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
  //   ),
  //   new Book(
  //     'How to code in Js',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
  //   ),
  //   new Book(
  //     'Big Java Fan',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
  //   ),
  //   new Book(
  //     'How to code in Js',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
  //   ),
  //   new Book(
  //     'Big Java Fan',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
  //   ),
  // ];

  public cartArray: any = [];
  public selectedBooks : any =[];
  public cartArrayService = new BehaviorSubject(this.cartArray);

  constructor(private http: HttpClient) {}

  public getBooks() {
    let url = 'https://www.googleapis.com/books/v1/volumes?q=java';
    return this.http.get(url);
  }
  public addToCart(book) {
    let message = '';
    const isInArray = this.cartArray.includes(book['id']);
    !isInArray ? this.selectedBooks.push(book) : null;
    this.cartArrayService.next(this.selectedBooks);
    if (isInArray) {
      return (message = 'Item Already in Cart');
    } else {
      return (message = 'Item Added to Cart');
    }
  }
}
