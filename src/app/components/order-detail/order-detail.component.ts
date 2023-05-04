import { Component, OnInit } from '@angular/core';
import { OrderDetail } from 'src/app/models/orderDetail';
import { OrderDetailService } from 'src/app/service/order-detail.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  orderDetail : OrderDetail[] = [];


  constructor(private orderDetailService: OrderDetailService) { }

  ngOnInit(): void {
    this.orderDetailService.findAll().subscribe((data:any) => {
      this.orderDetail = data.result;
      //console.log(this.orderDetail);
    });
  }

}
