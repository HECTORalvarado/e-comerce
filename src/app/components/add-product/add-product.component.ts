import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/service/products.service';

interface Categoria {
  value: number;
  viewValue: String;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productName : string;
  productPrice : number;
  productDescription : string;
  productImage : any;
  selectedValue : number;
  srcResult : any;

  categorias : Categoria[] = [
    {value:1, viewValue: "Periféricos"},
    {value:4, viewValue: "Audio"},
    {value:2, viewValue: "Pantallas"},
    {value:3, viewValue: "Almacenamiento"},
    //{value:5, viewValue: "Perifericos"},
    //{value:6, viewValue: "Perifericos"}
  ]

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  agregarProducto() {
    console.log(this.productName);
    console.log(this.productPrice);
    console.log(this.productDescription);
    console.log(this.selectedValue);
    console.log(this.srcResult);
    console.log(this.productImage);
    this.productService.addProduct(this.productName, true, this.selectedValue, this.productPrice, this.productDescription);
  }

}
