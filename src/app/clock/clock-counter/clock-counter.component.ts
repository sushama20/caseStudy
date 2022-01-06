import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Count } from 'src/app/models/Count';
import { Log } from 'src/app/models/Log';

@Component({
  selector: 'clock-counter',
  templateUrl: './clock-counter.component.html',
  styleUrls: ['./clock-counter.component.scss']
})
export class ClockCounterComponent implements OnInit {
  startCount : number = 0;
  pauseCount : number = 0;
  countObj: Count = {
    startCount : this.startCount,
    pauseCount : this.pauseCount
  };
  view = '';
  timerValue : number = 0;
  timerAction: string = '';
  counter: number = 0;
  ifCounterValuePresent : boolean = false;
  timerInterval :any;
  previousCounterValue:number = 0;

  @Input() action = '';
  @Output() isTimerCleared = new EventEmitter<boolean>();
  @Output() pauseTiming = new EventEmitter<number>();
  @Output() log = new EventEmitter<any>();
  @Output() countEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  @Input('timerActions')
  set _timerActionsToGet(timerData: any) {
    this.timerValue = timerData[0];
    this.timerAction = timerData[1];
    let obj: Log ;
    // basic timer > 0
    if(this.timerValue > 0 ){
      this.ifCounterValuePresent = true;
    //start
    if( this.timerAction === 'Start' ){
      //already running counter
      this.startCount++;
      this.countObj = {
        startCount: this.startCount,
        pauseCount: this.pauseCount
      };
      this.countEmitter.emit(this.countObj);
      const startTimeStamp = new Date();
      obj = {
        action : 'Started at ',
        time : startTimeStamp
      };
      this.log.emit(obj);
      if(this.previousCounterValue > 0){
        this.counter = this.previousCounterValue;
      }
      //first time counter running
      if(this.previousCounterValue == 0){
        clearInterval(this.timerInterval);
        this.counter = this.timerValue;
      }
      this.setcounter();
    }
    //pause
    else if(this.timerAction === 'Pause'  && this.previousCounterValue > 0){
      this.pauseCount++;
      this.countObj = {
        startCount: this.startCount,
        pauseCount: this.pauseCount
      };
      this.countEmitter.emit(this.countObj);
      const pauseTimeStamp = new Date();
      obj = {
        action : 'Paused at ',
        time : pauseTimeStamp
      };
      this.log.emit(obj);
      this.pauseTiming.emit(this.counter);
      clearInterval(this.timerInterval);
    }
   //reset
    else if(this.timerAction === 'Reset'  && this.previousCounterValue > 0){
      clearInterval(this.timerInterval);
      this.counter = this.timerValue;
      this.setcounter();
      this.resetAllData();

    }
   }
  }

  setcounter(){
    this.timerInterval = setInterval(()=> {
      this.counter--;
      this.previousCounterValue = this.counter;
       //clear
      if(this.counter == 0){
        this.isTimerCleared.emit(true);
        clearInterval(this.timerInterval);
        this.resetAllData();
      }
    },1000);
  }

  resetAllData(){
    //reset count
    this.startCount = 0;
    this.pauseCount = 0;
    this.countObj = {
      startCount: this.startCount,
      pauseCount: this.pauseCount
    };
    this.countEmitter.emit(this.countObj);
    //reset logs
    let logObj:any = {};
    this.log.emit(logObj);

  }

}
