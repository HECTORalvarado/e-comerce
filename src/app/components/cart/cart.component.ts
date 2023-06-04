import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart : Cart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.findAll().subscribe((data:any) => {
      this.cart = data.result;
      console.log(this.cart[0]);
    });
  }

}
