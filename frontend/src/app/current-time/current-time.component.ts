import {Component, OnInit} from '@angular/core';
import {CurrentTimeService} from "../services/current-time.service";

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {

  currentTime: string;

  constructor(private currentTimeService: CurrentTimeService) {
    console.log('in ', currentTimeService)
  }

  ngOnInit() {
    this.currentTimeService.getCurrentTime()
      .subscribe(currentTime => this.currentTime = currentTime);
  }

}
