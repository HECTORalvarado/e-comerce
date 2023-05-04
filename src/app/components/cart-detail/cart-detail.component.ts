import { Component, OnInit } from '@angular/core';
import { CartDetail } from 'src/app/models/cartDetail';
import { CartDetailService } from 'src/app/service/cart-detail.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  cartDetail: CartDetail [] = [];

  constructor(private cartDetailService: CartDetailService) { }

  ngOnInit(): void {
    this.cartDetailService.findAll().subscribe((data:any) => {
      this.cartDetail= data.result;
      console.log(this.cartDetail);
    });
  }

}
