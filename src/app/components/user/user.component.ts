import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users : User[] = [];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    //this.userService.findAll().subscribe(data => data);
    this.userService.findAll().subscribe((data:any) => {
      this.users= data.result;
      //console.log(this.usuarios);
    });
    //this.userService.findAllDos().subscribe(data => this.user = data);
    console.log(this.users);
  }

}
