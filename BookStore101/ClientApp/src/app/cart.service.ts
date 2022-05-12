import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getCart() {
    return this.http.get<Cart[]>(this.baseUrl + 'books');
  }

  addToCart() {
    return this.http.put<Cart[]>(this.baseUrl + 'books');
  }
}
