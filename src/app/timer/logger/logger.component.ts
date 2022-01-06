import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'timer-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit,OnDestroy {
  logsArray: any[] = [];
  log: any;
  isTimerCompleted :boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.logsArray.length = 0;
    this.subscription.add(this.timerService.currentTimerLog.subscribe(data => {
      this.log = data;
      this.logsArray.push(this.log);
    }));
    this.subscription.add(this.timerService.currentIsTimerCompleted.subscribe(data => {
      this.isTimerCompleted = data;
      this.logsArray.length = 0;
    }));
    this.subscription.add(this.timerService.currentTimerData.subscribe(data => {
      if(data[1] === 'Reset'){
        this.logsArray.length = 0;
      }
    }));
   }

   ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
