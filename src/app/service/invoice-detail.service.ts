import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailService {

  private url: string = `${environment.HOST}/invoicedetail/`
  constructor(private http: HttpClient) { }
  findAll() {
    return this.http.get<Response>(this.url);
  }
}
