import { Component } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orders;

  constructor(private db:AngularFireDatabase,private ordersService: OrdersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.db.list('/bookings/orders')
    .valueChanges().subscribe(orders => {
      this.orders = orders;
    })
  }

}
