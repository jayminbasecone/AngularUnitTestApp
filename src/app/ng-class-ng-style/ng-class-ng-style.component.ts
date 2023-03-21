import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-ng-style',
  templateUrl: './ng-class-ng-style.component.html',
  styleUrls: ['./ng-class-ng-style.component.scss']
})
export class NgClassNgStyleComponent implements OnInit {
  num = 20;
  redColor = 'font-red';
  blueColor = 'font-blue';
  constructor() { }

  ngOnInit(): void {
  }

}
