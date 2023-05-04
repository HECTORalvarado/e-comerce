import { Component, OnInit } from '@angular/core';
import { OrderStatus } from 'src/app/models/orderStatus';
import { OrderStatusService } from 'src/app/service/order-status.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {

  orderStatus : OrderStatus[] = [];

  constructor(private orderStatusService: OrderStatusService) { }

  ngOnInit(): void {
    this.orderStatusService.findAll().subscribe((data:any) => {
      this.orderStatus = data.result;
    });
  }

}
