import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string = `${environment.HOST}/product/`;
  

  constructor(private http: HttpClient) { }
  findAll() {
    return this.http.get<Response>(this.url);
  }

  async addProduct(name_: string,enable_: boolean, product_Category_: number, price_: number, description_: string): Promise<any> {
  
    const headers = new HttpHeaders({
      
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
  
    const body = {
      name: name_,
      enable : enable_,
      product_category_id: product_Category_,
      price : price_,
      description: description_
    };
  
    try {
      console.log(body);
      const response = await this.http.post(this.url, body, { headers }).subscribe();
      console.log('POST request successful:', response);
      return response;
    } catch (error) {
      console.error('Error making POST request:', error);
      throw error;
    }
  }

}
