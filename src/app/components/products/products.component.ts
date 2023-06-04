import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartDetailService } from 'src/app/service/cart-detail.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductsService, private cartService: CartDetailService) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe((data:any) => {
      this.products = data.result;
    });
  }

  addProduct(id:number) {
    console.log(id);
    this.cartService.sendProduct(id);
  }

}
