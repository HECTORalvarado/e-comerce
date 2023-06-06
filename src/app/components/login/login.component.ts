import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  user: any;
  loggedIn: any;
  name : string;
  lastName : string;
  fullName : string;
  phone : string;
  password : string;

  matcher = new MyErrorStateMatcher();

  constructor(private authService: SocialAuthService, private userService: UserService) { 
  }

  ngOnInit(): void {
      this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null)
      this.loginGoogle(this.user)
    })
  }
  async loginGoogle(user: any) {
    const response = await fetch('http://localhost:8000/api/user/google/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const details = await response.json();
    console.log(details)
  }

  singUp(){
    this.fullName = this.name + this.lastName;
    this.userService.addUser(this.fullName, this.name, this.password, true, this.email.value, this.phone, 2);
  }

  singIn() {
    
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}