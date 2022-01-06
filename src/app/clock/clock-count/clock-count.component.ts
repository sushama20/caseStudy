import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'clock-count',
  templateUrl: './clock-count.component.html',
  styleUrls: ['./clock-count.component.scss']
})
export class ClockCountComponent implements OnInit {
  @Input() timerCount: any;
  startCount: number = 0;
  pauseCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  @Input('timerCount')
  set _getTimerCount(data: any) {
    if(data){
      this.startCount = data.startCount;
      this.pauseCount =  data.pauseCount;
    }
  }

}
