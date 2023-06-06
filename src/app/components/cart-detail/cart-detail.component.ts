import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartDetail } from 'src/app/models/cartDetail';
import { Product } from 'src/app/models/product';
import { CartDetailService } from 'src/app/service/cart-detail.service';
import { ProductsService } from 'src/app/service/products.service';
import { IPayPalConfig } from "ngx-paypal";
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  cartDetail: CartDetail[] = [];
  products: Product[] = [];
  Cartproducts: Product[] = [];
  quantity: number = 1;
  id: number[];
  producto: boolean = false;
  compra: boolean = false;
  amount: any[] = [];
  totalCompra: number = 0;
  public payPalConfig?: IPayPalConfig;

  private subscription: Subscription;

  constructor(private productService: ProductsService, private cartDetailService: CartDetailService, private bottomSheet: MatBottomSheet, private _snackBar: MatSnackBar) {
    this.subscription = this.cartDetailService.id$.subscribe(
      (numbers: number[]) => {
        this.id = numbers;
        if (this.id[0]) {
          this.producto = true;
        } else {
          this.producto = false;
          this.compra = false;
        }
      }
    )
  }

  ngOnInit(): void {
    this.productService.findAll().subscribe((data: any) => {
      this.products = data.result;
      this.Cartproducts = this.products.filter(product => product.id && this.id.includes(product.id));
    }
    );
  }

  eliminarProducto(id: number) {
    const index = this.id.indexOf(id);
    if (index !== -1) {
      this.cartDetailService.removeProduct(id);
    }
    this.bottomSheet.dismiss();
  }
  comprar() {
    this.compra = true;
    this.Cartproducts.forEach(element => {
      this.totalCompra += element.price;
    });
    //SE ENVIA UN SOLO OBJETO "AMOUNT" con el total de la compra en la propiedad value
    this.amount = [
      { "amount": { "currency_code": "USD", "value": this.totalCompra.toString() } }
    ]
    this.initConfig();
  }

  private initConfig(): void {

    this.payPalConfig = {
      currency: "USD",
      clientId: "AWqf65T0z0eHiChHypnFnDjAIg7H9nxyTO68-RN7gQzKoxtJJhxiGCEDsC1hod_QzJ1a-ZDNid_bbp9f",

      createOrderOnServer: async (data) => {
        const response = await fetch("http://localhost:8000/api/payment/create-order/", {
          method: "POST",
          //AQUI SE ENVIA EL MONTO DE LA COMPRA AL BACKEND
          body: JSON.stringify(this.amount)
        },
        );
        const details = await response.json();
        return details.id;
      },

      authorizeOnServer: async (approveData, actions) => {
        const response = await fetch(
          `http://localhost:8000/api/payment/${approveData.orderID}/capture`,
          {
            method: "POST",
          }
        );
        const details = await response.json();
        // Three cases to handle:
        //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
        //   (2) Other non-recoverable errors -> Show a failure message
        //   (3) Successful transaction -> Show confirmation or thank you

        // This example reads a v2/checkout/orders capture response, propagated from the server
        // You could use a different API or structure for your 'orderData'

        const errorDetail = Array.isArray(details.details) && details.details[0];
        if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
          return actions.restart(); // Recoverable state, per:
          // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
        }

        if (errorDetail) {
          let msg = 'Su trancsacción no pudo ser procesada.';
          if (errorDetail.description) msg += '\n\n' + errorDetail.description;
          if (details.debug_id) msg += ' (' + details.debug_id + ')';
          return alert(msg); // Show a failure message (try to avoid alerts in production environments)
        }

        // Successful capture! For demo purposes:
        console.log('Capture result', details, JSON.stringify(details, null, 2));
        const transaction = details.purchase_units[0].payments.captures[0];
        //MOSTRAR ALERTA AL USUARIO DE QUE SE COMPLETÓ LA COMPRA
        this._snackBar.open('¡Gracias por su compra!', ':D', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        // alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
        this.producto = false;
        this.compra = false;
        this.id.forEach(element => {
          this.cartDetailService.removeProduct(element);
        });
        this.id = [];
        this.bottomSheet.dismiss();
      },

      onCancel: (data, actions) => {
        console.log("OnCancel", data, actions);
      },
      onError: (err) => {
        console.log("OnError", err);
      },
      onClick: (data, actions) => {
        console.log("onClick", data, actions);
      },
    };
  }
}