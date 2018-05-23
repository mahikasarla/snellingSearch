///<reference path="../../../node_modules/@angular/common/http/src/headers.d.ts"/>
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  constructor(private http: HttpClient) {
  }

  isLoggedIn() {
    return this.http.get<boolean>(environment.backend_url + `/twitter/isLoggedIn`);
  }

  login() {
    let httpHdrs = new HttpHeaders();
    httpHdrs.set('Access-Control-Allow-Origin','*')
    console.log('before logging')
    return this.http.post(environment.backend_url + '/connect/twitter', {},{headers: httpHdrs});
  }
}
