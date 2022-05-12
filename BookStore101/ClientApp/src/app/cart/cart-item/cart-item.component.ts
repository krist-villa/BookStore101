import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../models/book';
import { Cart } from '../../../models/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  cartItems: Cart[] = [];

  /*@Input() cartItems: Cart | undefined;*/

  constructor() { }

  ngOnInit(): void {
  }

}
