import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DymanicDivComponent } from './dymanic-div.component';

const routes: Routes = [
  { path: '', component: DymanicDivComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicDivRoutingModule { }
