import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Count } from 'src/app/models/Count';
import { Log } from 'src/app/models/Log';
import { TimerService } from '../timer.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'timer-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit , OnDestroy {
  startCount : number = 0;
  pauseCount : number = 0;
  countObj: Count = {
    startCount : this.startCount,
    pauseCount : this.pauseCount
  };
  timerData : any;
  timerValue : number = 0;
  timerAction: string = '';
  counter: number = 0;
  ifCounterValuePresent : boolean = false;
  timerInterval :any;
  previousCounterValue:number = 0;
  private subscription: Subscription = new Subscription();

  @Input() action = '';
  @Output() isTimerCleared = new EventEmitter<boolean>();
  @Output() pauseTiming = new EventEmitter<number>();
  @Output() log = new EventEmitter<any>();
  @Output() countEmitter = new EventEmitter<any>();

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.subscription.add(this.timerService.currentTimerData.subscribe(message => {
      this.timerData = message;
      this.startIntervalForService();
      })
    );
  }

  startIntervalForService(){
    this.timerValue = this.timerData[0];
    this.timerAction = this.timerData[1];
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
      this.timerService.changeTimerCount(this.countObj);
      const startTimeStamp = new Date();
      obj = {
        action : 'Started at ',
        time : startTimeStamp
      };
      this.timerService.changeTimerLog(obj);
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
      this.timerService.changeTimerCount(this.countObj);
      const pauseTimeStamp = new Date();
      obj = {
        action : 'Paused at ',
        time : pauseTimeStamp
      };
      this.timerService.changeTimerLog(obj);
      this.timerService.changePauseTimings(this.counter);
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
       //clear timer
      if(this.counter == 0){
        this.timerService.changeIsTimerCompleted(true);
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
       this.timerService.changeTimerCount(this.countObj);
      //reset logs
      let logObj:any = {};
      this.timerService.changeTimerLog(logObj);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
