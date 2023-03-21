import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug-element-dom-element',
  templateUrl: './debug-element-dom-element.component.html',
  styleUrls: ['./debug-element-dom-element.component.scss']
})
export class DebugElementDomElementComponent implements OnInit {
  countNumber: any;
  constructor() { }

  ngOnInit(): void {
  }
  increaseNumber() {
    this.countNumber = this.countNumber + 1;
  }

  decreaseNumber() {
    this.countNumber = this.countNumber - 1;
  }
}
