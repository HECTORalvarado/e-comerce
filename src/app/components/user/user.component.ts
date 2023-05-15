import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // se inicia una variable user con el modelo User
  users : User[] = [];
  //se llama al servicio userService
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    //llama a la funcion findAll del servidor y usa el metodo suscribe en el
    this.userService.findAll().subscribe(
    //Funcion tipo flecha en la que se asignan los datos a la variable user
      (data:any) => {
      this.users= data.result;
    });
  }

}
