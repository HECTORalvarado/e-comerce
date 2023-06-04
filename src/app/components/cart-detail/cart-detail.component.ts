import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartDetail } from 'src/app/models/cartDetail';
import { Product } from 'src/app/models/product';
import { CartDetailService } from 'src/app/service/cart-detail.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  cartDetail: CartDetail [] = [];
  products: Product[] = [];
  Cartproducts: Product[] = [];
  quantity: number = 1;
  id: number[];
  
  private subscription: Subscription;

  constructor(private productService: ProductsService, private cartDetailService: CartDetailService) { 
    this.subscription = this.cartDetailService.id$.subscribe(
      (numbers: number[]) => {
        this.id = numbers;
      }
      )
    }
    
    ngOnInit(): void {
      this.productService.findAll().subscribe((data:any) => {
        this.products = data.result;
        console.log(this.id);
        this.Cartproducts = this.products.filter(product => product.id && this.id.includes(product.id));
        console.log(this.Cartproducts);
      });
    }
    
  eliminarProducto(id : number) {
    const index = this.id.indexOf(id);
    if (index !== -1) {
      this.cartDetailService.removeProduct(id);
  }

}
}