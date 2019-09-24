import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders:any[];

  constructor(private db:AngularFireDatabase) { }

  getOrders() {
    this.db.list('/bookings/orders')
    .valueChanges().subscribe(orders => {
      this.orders = orders;
    })
  }

  createOrder(order: {name, phone, seats, location,departure}){
    this.orders.push(order);
  }
}
