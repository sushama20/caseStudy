import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CounterComponent } from "./counter/counter.component";
import { LoggerComponent } from "./logger/logger.component";
import { TimerCountComponent } from "./timer-count/timer-count.component";
import { TimerLimitComponent } from "./timer-limit/timer-limit.component";
import { TimerRoutingModule } from "./timer-routing.module";
import { TimerComponent } from "./timer.component";
import { TimerService } from "./timer.service";

@NgModule({
  declarations: [
    TimerComponent,
    CounterComponent,
    TimerLimitComponent,
    LoggerComponent,
    TimerCountComponent
  ],
  imports: [
    TimerRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [TimerService],
  bootstrap: [],
  schemas:[]
})
export class TimerModule { }
