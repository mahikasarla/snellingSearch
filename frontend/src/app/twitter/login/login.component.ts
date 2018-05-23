import {Component, OnInit} from '@angular/core';
import {TwitterService} from "../../services/twitter.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;

  constructor(private twitterService: TwitterService) {
  }

  ngOnInit() {
    this.twitterService.isLoggedIn().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;

      if(!isLoggedIn){
        console.log('something ')
        this.twitterService.login().subscribe(some => {
          console.log('after post', some)
        });
      }
    });
  }

}
