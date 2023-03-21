import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnInit {
  sum = 0;
  result: any;
  studentResult:any;
  constructor() { }
  ngOnInit(): void {
  }
  calculate(num1: number, num2: number) {
    this.sum = num1 + num2;
    return this.sum;
  }

  StudentSchoolResult(){
    if(this.calculate(10,20) >= 40)
    {
      this.studentResult =  "Pass";
      return this.studentResult;
    }
    else
    {
      this.studentResult = "Fail";
      return this.studentResult ;
    }
  }
}
