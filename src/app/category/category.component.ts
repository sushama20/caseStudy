import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  items: Item[] = [];
  products: Item[] = [];
  totalProducts : number = 0;
  noOfRowsInGridView : number = 0;
  noOfRowsForListView : number = 0;
  ascendingSortItems : Item[] = [];
  descendingSortItems : Item[] = [];
  view: string = '';
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(private categoryService: CategoryService ) {
    this.view = 'grid';
   }

  ngOnInit(): void {
    this.products = this.categoryService.products;
    this.items = this.products;
    this.totalProducts = this.items.length;
  }

  gridViewClicked(){
    this.view = 'grid';
  }

  listViewClicked(){
    this.view = 'list';
  }

  getSortedArray(value:any){
    if(value === 'High To Low'){
      this.descendingSortItems = this.items.sort(function(a, b) {
        return b.price - a.price;
      });
      this.items = this.descendingSortItems;
    }
    else{
      this.ascendingSortItems = this.items.sort(function(a, b) {
        return a.price - b.price;
      });
      this.items = this.ascendingSortItems;
    }
  }
}
