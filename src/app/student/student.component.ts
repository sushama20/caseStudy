import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../models/Student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: any;
  data: Student[] = [];
  header: string[]= [];
  columns: any;
  ogData: Student[] = [];
  keysArray: string[] = [];
  //array for sorting
  items: Student[] = [];
  //array for click counts
  counter = [
    {
      id: "name",
      click: 0
    },
    {
      id: "class",
      click: 0
    },
    {
      id: "section",
      click: 0
    },
    {
      id: "sub1Marks",
      click: 0
    },
    {
      id: "sub2Marks",
      click: 0
    },
    {
      id: "sub3Marks",
      click: 0
    }
   ];

  constructor(private studentService: StudentService) {
    this.data= JSON.parse(JSON.stringify(this.studentService.studentData));
  }

  ngOnInit(): void {
    let keyObj = this.data[0];
    this.keysArray = Object.keys(keyObj);
    this.items = this.data;
    this.dataSource = new MatTableDataSource(this.data) ;
    this.columns = [
      { columnDef: 'name', header: this.keysArray[0], cell: (element: any) => `${element.name}`},
      { columnDef: 'class', header: this.keysArray[1],  cell: (element: any) => `${element.class}`},
      { columnDef: 'section', header: this.keysArray[2], cell: (element: any) => `${element.section}`},
      { columnDef: 'sub1Marks', header: this.keysArray[3], cell: (element: any) => `${element.sub1Marks}`},
      { columnDef: 'sub2Marks', header: this.keysArray[4],  cell: (element: any) => `${element.sub2Marks}`},
      { columnDef: 'sub3Marks', header: this.keysArray[5], cell: (element: any) => `${element.sub3Marks}`},
    ];
    this.displayedColumns = (this.columns.map((c: { columnDef: any; }) => {
      return c.columnDef;
    }));
  }

  rowClickedData(i:any){
    let param:string;
    param = i;
    let sortedArray :any;
    this.counter.forEach((item)=> {
      if(item["id"] === param && item["click"] === 0){
        sortedArray = this.sortByKeyInAscOrder(this.items, param);
        item["click"]++;
      }
      else if(item["id"] === param && item["click"] === 1){
        sortedArray = this.sortByKeyInDescOrder(this.items, param);
        item["click"]++;
      }
      else if(item["id"] === param && item["click"] === 2){
        item["click"] = 0;
        sortedArray = this.studentService.studentData;
      }
      this.dataSource = new MatTableDataSource(sortedArray) ;
    })
  }

  sortByKeyInAscOrder(array:any, key:any){
    {
      return array.sort((a:any, b:any)=>
        {
          var x = a[key];
          var y = b[key];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
  }

 sortByKeyInDescOrder(array:any, key:any){
    {
      return array.sort((a:any, b:any)=>
      {
        var x = a[key];
        var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      });
    }
  }
}
