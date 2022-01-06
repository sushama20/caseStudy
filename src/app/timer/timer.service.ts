import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import { Count } from '../models/Count';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})

export class TimerService {
  // for timer end value and action
  private timerData = new BehaviorSubject<any>('');
  currentTimerData = this.timerData.asObservable();

 //for start and pause count
  startCount : number = 0;
  pauseCount : number = 0;
  countObj: Count = {
    startCount : this.startCount,
    pauseCount : this.pauseCount
  };
  private timerCount = new BehaviorSubject<Count>(this.countObj);
  currentTimerCount = this.timerCount.asObservable();

  //for logs
  logObj: any = {};
  private timerLog = new BehaviorSubject<Log>(this.logObj);
  currentTimerLog = this.timerLog.asObservable();

  //when timer is over
  private isTimerCompleted = new BehaviorSubject<boolean>(false);
  currentIsTimerCompleted = this.isTimerCompleted.asObservable();

  //for pause timings
  private pauseTimings = new Subject<number>();
  currentPauseTimings  = this.pauseTimings.asObservable();

  changeTimerData(data: any){
    this.timerData.next(data);
  }

  changeTimerCount(data: Count){
    this.timerCount.next(data);
  }

  changeTimerLog(data: Log){
    this.timerLog.next(data);
  }

  changeIsTimerCompleted(data: boolean){
    this.isTimerCompleted.next(data);
  }

  changePauseTimings(data: number){
    this.pauseTimings.next(data);
  }

}
