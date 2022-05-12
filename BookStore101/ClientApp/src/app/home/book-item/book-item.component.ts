import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../models/book';
import { MessengerService } from 'src/app/messenger.service'

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book | undefined;


  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.msg.sendMessage(this.book)
  }

}
