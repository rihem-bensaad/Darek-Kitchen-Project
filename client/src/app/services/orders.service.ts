import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders: any[] = [];
  totalPrice: number = 0
  total: number = 0
  totalOrders: number = 0;


  constructor() { }

}
