import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getBooks() {
    return this.http.get<Book[]>(this.baseUrl + 'books');
  }
}
