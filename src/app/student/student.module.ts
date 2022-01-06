import { NgModule } from "@angular/core";
import { StudentService } from "./student.service";
import { StudentComponent } from "./student.component";
import { StudentRoutingModule } from "./student-routing.module";
import {MatTableModule} from '@angular/material/table';
import { CdkTableModule} from '@angular/cdk/table';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    StudentComponent,
  ],
  imports: [
    StudentRoutingModule,
    MatTableModule,
    CdkTableModule,
    CommonModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [],
  schemas:[]
})
export class StudentModule { }
