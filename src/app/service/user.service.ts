import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private url : string = `${environment.HOST}/user/`;

  constructor(private http: HttpClient) { }
  findAll() {
    return this.http.get<Response>(this.url);
  }
  findAllDos(): Observable<User> {
    return this.http.get<User>(this.url);
  }
}
