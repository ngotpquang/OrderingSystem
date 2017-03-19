import { Component } from '@angular/core';
import { Auth }      from './auth.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  providers: [ Auth ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[];
  errorMessage: string;
  constructor(private auth: Auth) {
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
}
