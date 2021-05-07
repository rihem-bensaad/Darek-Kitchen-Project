import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  subject = new Subject();
  items : [] = [];


 getItems() {
    return this.items;
 }
  
  constructor() { }
}
