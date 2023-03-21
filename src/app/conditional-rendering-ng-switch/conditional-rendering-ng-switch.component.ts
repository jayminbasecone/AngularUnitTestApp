import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-rendering-ng-switch',
  templateUrl: './conditional-rendering-ng-switch.component.html',
  styleUrls: ['./conditional-rendering-ng-switch.component.scss']
})
export class ConditionalRenderingNgSwitchComponent implements OnInit {
  selectedNum = 'One';
  constructor() { }

  ngOnInit(): void {
  }

}
