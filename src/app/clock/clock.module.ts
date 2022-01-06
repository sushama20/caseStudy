import { NgModule } from "@angular/core";
import { ClockCountComponent } from "./clock-count/clock-count.component";
import { ClockCounterComponent } from "./clock-counter/clock-counter.component";
import { ClockLimitComponent } from "./clock-limit/clock-limit.component";
import { ClockLoggerComponent } from "./clock-logger/clock-logger.component";
import { ClockRoutingModule } from "./clock-routing.module";
import { ClockComponent } from "./clock.component";
import {FormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    ClockComponent,
    ClockLimitComponent,
    ClockCountComponent,
    ClockLoggerComponent,
    ClockCounterComponent
  ],
  imports: [
    ClockRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  schemas:[]

})
export class ClockModule { }
