import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-when-stable-async-two-way-data-binding',
  templateUrl: './when-stable-async-two-way-data-binding.component.html',
  styleUrls: ['./when-stable-async-two-way-data-binding.component.scss']
})
export class WhenStableAsyncTwoWayDataBindingComponent implements OnInit {
  myName: string = " "
  constructor() { }

  ngOnInit(): void {
  }
  
  setName() {
    this.myName = "DotNet office";
  }
}
