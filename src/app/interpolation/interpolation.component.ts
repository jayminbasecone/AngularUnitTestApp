import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  title = "interpolation";
 
  Name = "The interpolation";
  num1 = 100;
  num2 = 20;

  type = "number";
  placeholder = "give number";
  UserReadOnly=false;
  constructor() { }

  ngOnInit(): void {
  }


}
