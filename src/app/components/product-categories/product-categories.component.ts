import { Component, OnInit } from '@angular/core';
import { productCategory } from 'src/app/models/productCategories';
import { ProductCategoriesService } from 'src/app/service/product-categories.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {

  categories : productCategory[] = [];

  constructor(private productCategorieService: ProductCategoriesService) { }

  ngOnInit(): void {
    this.productCategorieService.findAll().subscribe((data:any) => {
      this.categories = data.result;
    });
  }

}
