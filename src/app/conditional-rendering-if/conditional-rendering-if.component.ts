import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-rendering-if',
  templateUrl: './conditional-rendering-if.component.html',
  styleUrls: ['./conditional-rendering-if.component.scss']
})
export class ConditionalRenderingIfComponent implements OnInit {
  num = 25;
  constructor() { }

  ngOnInit(): void {
  }

}
