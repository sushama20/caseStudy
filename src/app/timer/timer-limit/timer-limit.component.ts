import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TimerService } from '../timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.scss']
})
export class TimerLimitComponent implements OnInit, OnDestroy {
  ifResetClicked : boolean = false;
  pauseTiming: number = 0;
  pauseTimingArray : number[] = [];
  buttonText = 'Start';
  isResetButtonDisabled : boolean = true;
  view = '';
  timerData: any[] = [];
  countInput: number = 1;
  private subscription: Subscription = new Subscription();

  @Output() timerLimit = new EventEmitter<string>();
  @Output() action = new EventEmitter<string>();
  @Output() timerActions = new EventEmitter<string[]>();

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.pauseTimingArray.length = 0;
    this.subscription.add(this.timerService.currentPauseTimings.subscribe(value => {
      this.pauseTiming = value;
      this.pauseTimingArray.push(this.pauseTiming);
    }));
    this.subscription.add(this.timerService.currentIsTimerCompleted.subscribe(value => {
      if(value === true){
        //resetting all values
        this.buttonText = 'Start';
        this.pauseTimingArray.length = 0;
        this.countInput = 1;
        this.isResetButtonDisabled = true;
      }
    }));
  }

  //setting button text
  toggleButton(){
    if(this.buttonText === 'Start'){
      this.buttonText = 'Pause';
    }
    else{
      this.buttonText = 'Start';
    }
  }

  addNewCounterLimit(value: string) {
    this.isResetButtonDisabled = false;
    this.timerData[0] = value;
    if(this.ifResetClicked){
      this.ifResetClicked = false;
      this.timerData[1] = 'Reset';
    }
    else{
      this.timerData[1] = this.buttonText;
      this.toggleButton();
    }
    this.timerService.changeTimerData(this.timerData);
  }

  resetButtonClicked(value: string){
    this.ifResetClicked = true;
    this.addNewCounterLimit(value);
    this.buttonText = 'Pause';
    this.pauseTimingArray.length = 0;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
