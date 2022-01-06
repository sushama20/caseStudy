import { NgModule } from '@angular/core';
import { ClockComponent } from './clock.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ClockComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClockRoutingModule { }
