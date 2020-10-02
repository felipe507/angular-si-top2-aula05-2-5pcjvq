import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public logger: LoggerService, public timer: TimerService) {
    this.logger.add("IndexComponent constructed");
  }

  ngOnInit() {
    this.logger.add("IndexComponent initialized");
  }

}