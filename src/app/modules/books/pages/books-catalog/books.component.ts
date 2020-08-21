import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor( private router: Router) {
    const validUser = sessionStorage.getItem('username');
    console.log(validUser)
    this.authenticateUser(validUser);
   
   }

  ngOnInit(): void {
  }

  public authenticateUser(validUser) {
    if(validUser == undefined) {
      this.router.navigateByUrl("/login");
    }

  }

}
