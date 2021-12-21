import { Component } from '@angular/core';
import {ClockService} from "./services/clock.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Game-Project';
  constructor(private clockService: ClockService) {
    clockService.startClock();
  }
}
