import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../models/book';
import { Cart } from '../../../models/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  template: `
   <h1>Shopping Cart</h1>
  <div *ngFor="let item of book">{{book}}<div>
  `,
})
export class CartItemComponent implements OnInit {

  cartItems: Cart[] = [];

  @Input() book: Book | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
