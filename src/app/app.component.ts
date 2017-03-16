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
  constructor(private auth: Auth) {
    var profile = localStorage.getItem("profile");
    auth.putUser(profile);
  }
}
