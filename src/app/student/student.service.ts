import { Injectable } from '@angular/core';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  studentData : Student[] = [
    {
      name : 'eren',
      class : 3,
      section : 'A',
      sub1Marks : 23,
      sub2Marks : 54,
      sub3Marks : 34
    },
    {
      name : 'levi',
      class : 4,
      section : 'B',
      sub1Marks : 31,
      sub2Marks : 42,
      sub3Marks : 24
    },
    {
      name : 'zayn',
      class : 1,
      section : 'D',
      sub1Marks : 13,
      sub2Marks : 40,
      sub3Marks : 30
    },
    {
      name : 'ray',
      class : 2,
      section : 'C',
      sub1Marks : 39,
      sub2Marks : 22,
      sub3Marks : 21
    }
  ];
}
