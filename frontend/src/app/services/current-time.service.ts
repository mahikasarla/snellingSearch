import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CurrentTimeService {
  constructor(private http: HttpClient) {
  }

  getCurrentTime(): Observable<string> {
    return this.http
      .get<string>(environment.backend_url + `/now`);
  }
}
