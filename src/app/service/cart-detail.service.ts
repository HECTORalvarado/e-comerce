import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDetailService {

  private url: string = `${environment.HOST}/cartdetail/`
  private idProducto: number[] = []
  private idProductoCambio :  BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  public id$ = this.idProductoCambio.asObservable();

  constructor(private http: HttpClient) { }
  findAll() {
    return this.http.get<Response>(this.url);
  }

  private emitNumbersChanged() {
    this.idProductoCambio.next(this.idProducto.slice());
  }

  sendProduct(number: number) {
    this.idProducto.push(number);
    this.emitNumbersChanged();
  }

  removeProduct(number: number) {
    const index = this.idProducto.indexOf(number);
    if (index !== -1) {
      this.idProducto.splice(index, 1);
      this.emitNumbersChanged();
    }
  }

  getID(): number[] {
    return this.idProducto.slice();
  }
}
