import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../models/cart';
import { MessengerService } from 'src/app/messenger.service'
import { Book } from '../../models/book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Cart[] = [];

/*  @Input() cartItems: Cart | undefined;*/

  @Input() book: Book | undefined;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMessage().subscribe((book: any) => {
      this.addToCart(book)
    })

    }

  addToCart(cartItems: any) {
    // this puts books into the cart
    this.cartItems.push({
      itemName: cartItems.itemName,
      price: cartItems.price
    })
  }

}

