import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  ColorNames = ['Black','white','blue','green'];
  ColorsList=[
    {
      name:'Black', id:1
    },
    {
      name:'white', id:2
    },
    {
      name:'blue', id:3
    },
    {
      name:'green', id:4
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
