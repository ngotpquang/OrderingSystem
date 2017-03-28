import { Component } from '@angular/core';
import { User } from './models/user';
import { ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  users: User[];
  errorMessage: string;
  inputEmail: string;
  inputPassword: string;
  constructor(
    private router: Router) {

  }
  signIn() {
    if(this.inputEmail == "admin@gmail.com")
      this.router.navigate(["/admin"]);
    console.log(this.inputEmail);
    console.log(this.inputPassword);
    $('#login').modal('hide');
  }
}
