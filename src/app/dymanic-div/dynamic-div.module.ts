import { NgModule } from "@angular/core";
import { DymanicDivComponent } from "./dymanic-div.component";
import { DynamicDivRoutingModule } from "./dynamic-div-routing.module";

@NgModule({
  declarations: [
    DymanicDivComponent,
  ],
  imports: [
    DynamicDivRoutingModule
  ],
  providers: [],
  bootstrap: [],
  schemas:[]
})
export class DynamicDivModule { }
