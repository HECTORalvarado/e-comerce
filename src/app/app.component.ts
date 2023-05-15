import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecomerce';
  warehouse = faWarehouse;
  isDarkTheme : boolean = false;

  constructor (@Inject(DOCUMENT) private document: Document) {}

  onChange(newValue:boolean): void {
    if (newValue) {
      this.document.body.classList.add('darkMode');
    } else {
      this.document.body.classList.remove('darkMode');

    }
  }
}
