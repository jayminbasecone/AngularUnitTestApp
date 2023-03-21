import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss']
})
export class AttributeBindingComponent implements OnInit {
  pageHeader:string = 'Student information';
  FirstName: string = 'DotNet';
  LastName:string='Office';
  Branch:string='IT';
  Mobile:number=1234567890;
  Gender:string='Male';
  Age:number=25;

  ColumnSpan =2;

  arialable = "NewAriaLable"
  constructor() { }

  ngOnInit(): void {
  }

}
