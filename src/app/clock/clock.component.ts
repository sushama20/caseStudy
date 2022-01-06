import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  view: string = 'decorator';
  currentTimerLimit:any = 0;
  currentAction = '';
  currentTimerAction:string[] = [];
  isTimerClear: boolean = false;
  pauseTime: number = 0;
  logs: any[] = [];
  timerCount : any;

  constructor() { }

  ngOnInit(): void {
  }

  getTimerLimit(value: any){
    this.currentTimerLimit = value;
  }

  getButtonAction(value: string){
    this.currentAction = value;
  }

  getTimerActions(value: string[]){
    this.currentTimerAction = value;
  }

  isTimerCleared(value: boolean){
    this.isTimerClear = value;
  }

  getTimerPausedTiming(value: number){
    this.pauseTime = value;
  }

  getLogs(value : any){
    this.logs = value;
  }

  getCount(value:any) {
    this.timerCount = value;
  }

}
