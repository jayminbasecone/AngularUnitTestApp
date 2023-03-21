import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-method-private-varibale',
  templateUrl: './private-method-private-varibale.component.html',
  styleUrls: ['./private-method-private-varibale.component.scss']
})
export class PrivateMethodPrivateVaribaleComponent implements OnInit {
  sum = 0;
  private Name: any;
  constructor() { }

  ngOnInit(): void {
  }

  private calculate(num1: number, num2: number) {
    this.sum = num1 + num2;
    return this.sum;
  }
  
  private ShowName() {
    this.Name = "DotNet Office";
  }
}
