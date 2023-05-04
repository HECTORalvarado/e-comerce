import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private url: string = `${environment.HOST}/address/`

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Response>(this.url);
  }
}
