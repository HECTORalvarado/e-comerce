import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
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

  async addUser(fullname_ :string, name_: string, password_:string, enable_:boolean, email_: string, phone_:string,role_id_:number)
  {
    const headers = new HttpHeaders({
      
      'Content-Type': 'application/json'
      
      
    });
  
    const body = {
      fullname :fullname_,
      name : name_,
      password : password_,
      enable : enable_,
      email: email_,
      phone: phone_,
      role_id : role_id_
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
