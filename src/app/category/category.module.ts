import { NgModule } from "@angular/core";
import { CategoryComponent } from "./category.component";
import { CategoryService } from "./category.service";
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CategoryRoutingModule } from "./category-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CategoryComponent,
  ],
  imports: [
    CategoryRoutingModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    CommonModule
  ],
  providers: [CategoryService],
  bootstrap: [],
  schemas:[]
})
export class CategoryModule { }
