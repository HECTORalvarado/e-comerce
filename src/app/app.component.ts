import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'; 
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecomerce';
  warehouse = faWarehouse;
  isDarkTheme : boolean = false;

  constructor (@Inject(DOCUMENT) private document: Document, private carrito: MatBottomSheet) {
  }

  verCarrito () :void {
    this.carrito.open(CartDetailComponent, {
      panelClass: 'cart'
    });
  }

  onChange(newValue:boolean): void {
    if (newValue) {
      this.document.body.classList.add('darkMode');
    } else {
      this.document.body.classList.remove('darkMode');

    }
  }
}
