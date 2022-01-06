import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', loadChildren:()=> import('./category/category.module').then(m=> m.CategoryModule) },
  { path: 'timer',  loadChildren:()=> import('./timer/timer.module').then(m=> m.TimerModule)},
  { path: 'counter',  loadChildren:()=> import('./clock/clock.module').then(m=> m.ClockModule)},
  { path: 'student', loadChildren:()=> import('./student/student.module').then(m=> m.StudentModule)},
  { path: 'dynamic', loadChildren:()=> import('./dymanic-div/dynamic-div.module').then(m=> m.DynamicDivModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
