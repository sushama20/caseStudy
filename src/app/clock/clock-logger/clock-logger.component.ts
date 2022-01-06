import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'clock-logger',
  templateUrl: './clock-logger.component.html',
  styleUrls: ['./clock-logger.component.scss']
})
export class ClockLoggerComponent implements OnInit  {
  logsArray: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.logsArray.length = 0;
  }

  @Input('logsArray')
  set _getLogsArray(data: any) {
    if(data.action == undefined){
     this.logsArray.length = 0;
    }
    else{
      this.logsArray.push(data);
    }
  }
}
