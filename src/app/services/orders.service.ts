import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private _orders = []

  constructor() { }

  getOrders() {
    return this._orders;
  }

  createOrder(order: {name, phone, seats, location,departure}){
    this._orders.push(order);
  }
}
