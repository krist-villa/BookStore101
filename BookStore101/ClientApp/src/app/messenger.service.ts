import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  sendMessage(book: any) {
    console.log(book)
    this.subject.next(book) // trigger for add-to-cart button
  }

  getMessage() {
    return this.subject.asObservable()
  }
}
