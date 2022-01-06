import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'clock-limit',
  templateUrl: './clock-limit.component.html',
  styleUrls: ['./clock-limit.component.scss']
})
export class ClockLimitComponent implements OnInit {
  ifResetClicked : boolean = false;
  pauseTiming: number = 0;
  pauseTimingArray : number[] = [];
  buttonText = 'Start';
  isResetButtonDisabled : boolean = true;
  countInput: number = 1;

  @Output() timerLimit = new EventEmitter<string>();
  @Output() action = new EventEmitter<string>();
  @Output() timerActions = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
    this.pauseTimingArray.length = 0;
  }

  @Input('isTimerCompleted')
  set _isTimerCompleted(data: any) {
    //resetting all conditions
    this.buttonText = 'Start';
    this.pauseTimingArray.length = 0;
    this.countInput = 1;
    this.isResetButtonDisabled = true;
  }

  @Input('pauseTiming')
  set _getPauseTiming(data: any) {
    this.pauseTiming = data;
    this.pauseTimingArray.push(data);
  }

  addNewTimerLimit(value: string) {
    this.isResetButtonDisabled = false;
    if(this.ifResetClicked){
      let temp: Array<string> =[] ;
      temp[0] = value;
      temp[1] = 'Reset';
      this.timerActions.emit(temp);
      this.ifResetClicked = false;
    }
    else{
      let temp: Array<string> = [] ;
      temp[0] = value;
      temp[1] = this.buttonText;
      this.timerActions.emit(temp);
      this.toggleButton();
    }
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

  resetButtonClicked(value: string){
    this.ifResetClicked = true;
    this.addNewTimerLimit(value);
    this.buttonText = 'Pause';
    this.pauseTimingArray.length = 0;
  }

}
