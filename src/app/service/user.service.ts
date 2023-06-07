import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { CookieService } from 'ngx-cookie-service';
import { HttpParams } from '@angular/common/http';
import { URLSearchParams } from 'url';
import { Component, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class UserService {

  // direccion del recurso de la api
  private url: string = `${environment.HOST}/user/`;
  private url_logIn: string = `${environment.HOST}/user/login`;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  users: User[] = [];
  // constructor para acceder a los metodos http
  constructor(private http: HttpClient, private cookieService: CookieService) { }
  // funcion que obtiene los datos de la api

 


  findAll() {
    return this.http.get<Response>(this.url);
  }


  /*private agregarAutorizationHeader() {
    let token = this.usuarioService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }*/

  ////Agregar usuario a la base de datos
  async addUser(fullname_: string, name_: string, password_: string, enable_: boolean, email_: string, phone_: string, role_id_: number) {
    const headers = new HttpHeaders({

      'Content-Type': 'application/json'


    });

    const body = {
      fullname: fullname_,
      name: name_,
      password: password_,
      enable: enable_,
      email: email_,
      phone: phone_,
      role_id: role_id_
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

  async loginUser(username_: string, password_: string)
  {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    let body = new  HttpParams();
    body = body.set('username', username_); // Replace with your form field names and values
    body = body.set('password', password_);

    try {
      console.log(body);
      const response = await this.http.post<any>(this.url+'login', body.toString(), { headers }).toPromise();
      console.log('POST request successful:', response);
      const accessToken = response.access_token;
      console.log('token:',accessToken );
      this.cookieService.set('access_token', response.token);
      //findUserByEmail(username_);
      return response;
      //this.cookieService.set(name:'access_token', response.token)
    } catch (error) {
      console.error('Error making POST request:', error);
      throw error;
    }

  }

 /* async findUserByEmail(email)
  {
    const url_search = `${this.url}?email=${email}`;
    this.http.get<User[]>(url_search).subscribe(
      (response: User[]) => {
        if (response.length > 0) {
          console.log(response[0].role_id); 
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }    */
}
