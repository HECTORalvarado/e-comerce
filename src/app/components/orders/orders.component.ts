import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/app/service/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  order: Order [] = [];

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.findAll().subscribe((data:any) => {
      this.order = data.result;
      console.log(this.order);
    });
  }

}
