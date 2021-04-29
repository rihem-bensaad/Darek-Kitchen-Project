import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  subject = new Subject();
  items :[]= [];

  addToCart(product:String) {
    // this.items.push(product);
  }
 getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
  sendMsg(product: String) {
    console.log(product);
    this.subject.next(product);
  }

}
