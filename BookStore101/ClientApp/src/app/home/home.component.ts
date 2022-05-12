import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { Cart } from '../../models/cart';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  books: Book[] = [];
  

  constructor(private shoppingService: ShoppingService)
  {
    this.shoppingService.getBooks().subscribe(result => {
      this.books = result;
    });
  }
}
