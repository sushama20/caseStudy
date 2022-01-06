import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Count } from 'src/app/models/Count';
import { TimerService } from '../timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'timer-count',
  templateUrl: './timer-count.component.html',
  styleUrls: ['./timer-count.component.scss']
})
export class TimerCountComponent implements OnInit, OnDestroy{
  startCount: number = 0;
  pauseCount: number = 0;
  countObj: Count = {
    startCount : this.startCount,
    pauseCount : this.pauseCount
  };
  private subscription: Subscription = new Subscription();

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.subscription.add(this.timerService.currentTimerCount.subscribe(data => {
      this.countObj = data;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
