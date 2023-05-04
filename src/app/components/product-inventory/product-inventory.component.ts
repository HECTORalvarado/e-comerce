import { Component, OnInit } from '@angular/core';
import { productInventory } from 'src/app/models/productInventory';
import { ProductInventoryService } from 'src/app/service/product-inventory.service';

@Component({
  selector: 'app-product-inventory',
  templateUrl: './product-inventory.component.html',
  styleUrls: ['./product-inventory.component.scss']
})
export class ProductInventoryComponent implements OnInit {

  inventory : productInventory[] = []

  constructor(private productInventoryService: ProductInventoryService) { }

  ngOnInit(): void {
    this.productInventoryService.findAll().subscribe((data:any) => {
      this.inventory = data.result;
    });
  }

}
