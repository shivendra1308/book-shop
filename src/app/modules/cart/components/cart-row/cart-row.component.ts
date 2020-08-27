import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.css']
})
export class CartRowComponent implements OnInit {
  @Input() row;
  @Output() remove:EventEmitter<any>=new EventEmitter();
 

  constructor() { }

  ngOnInit(): void {
  }

}
