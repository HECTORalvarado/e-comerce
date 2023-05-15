import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // direccion del recurso de la api
  private url : string = `${environment.HOST}/user/`;
  // constructor para acceder a los metodos http
  constructor(private http: HttpClient) { }
  // funcion que obtiene los datos de la api
  findAll() {
    return this.http.get<Response>(this.url);
  }
}
