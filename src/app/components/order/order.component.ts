import { Component } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orders;

  constructor(private ordersService: OrdersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.orders = this.ordersService.getOrders();
  }

}
