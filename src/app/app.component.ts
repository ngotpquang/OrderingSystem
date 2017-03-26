import { Component } from '@angular/core';
import { Auth }      from './auth.service';
import { User } from './models/user';
import { ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  providers: [ Auth ],
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
    private auth: Auth,
    private router: Router) {
    // localStorage.removeItem('accessToken');
    // localStorage.removeItem("id_token");
    // localStorage.removeItem("profile");
    if(auth.authenticated) {
      var profile = localStorage.getItem("profile");
      auth.putUser(profile)
      .then(
          user  => this.users.push(user),
          error =>  this.errorMessage = <any>error);
    }


  }
  signIn() {
    if(this.inputEmail == "admin@gmail.com")
      this.router.navigate(["/admin"]);
    console.log(this.inputEmail);
    console.log(this.inputPassword);
  }
}
