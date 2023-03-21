import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-use',
  templateUrl: './input-output-use.component.html',
  styleUrls: ['./input-output-use.component.scss']
})
export class InputOutputUseComponent implements OnInit {
  myInputMessage: string = "I am the parent component";
  outputDecorator = "";
  constructor() { }

  ngOnInit(): void {
  }
  GetChildData(data: string) {
    this.outputDecorator = data;
  }
}
