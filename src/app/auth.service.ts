import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig }        from './auth.config';
import { Http, Response } from '@angular/http';
import { User } from './models/user';
import 'rxjs/add/operator/toPromise';

import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Avoid name not found warnings
declare var Auth0Lock: any;
var showError = "";
var profile;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});
  private profileURL = '';
  // private http: Http;
  constructor(private http: Http) {
      // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.lock.getUserInfo(authResult.accessToken, function(error, profile) {
        if (error) {
          // Handle error
          return;
        }

        localStorage.setItem("accessToken", authResult.accessToken);
        localStorage.setItem("profile", JSON.stringify(profile));

        document.getElementById('logged-in').textContent = profile.nickname;
        // Update DOM
      });
      // profile = localStorage.getItem("profile");
    });
  }

  public login() {
    // Call the show method to display the widget.
    console.log("login");
    this.lock.show();
  };


  public authenticated() {
    let token = localStorage.getItem('id_token');
    console.log("Token: " + token);
    let profile = localStorage.getItem('profile');
    console.log(profile);

    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem("id_token");
    localStorage.removeItem("profile");
  };

  putUser(profile: string): Promise<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let profileUser = JSON.stringify(profile);

    return this.http.post(this.profileURL, profileUser, options)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}
