import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string = `${environment.HOST}/product/`;

  constructor(private http:HttpClient) { }
  findAll() {
    return this.http.get<Response>(this.url);
  }

  addProduct(code_:string , name_:string, enable_ : boolean, product_Category_ :number, price_: number )
  {
    

  }
}
