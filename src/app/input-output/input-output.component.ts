import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  title = "The DotNet Office";
  @Input() myinputMsg: string = "";
  @Output() myOutput: EventEmitter<string> = new EventEmitter();

  outputMessage: string = "I am output directory";
  constructor() { }
  ngOnInit(): void {

    this.title = this.myinputMsg;
  }
  sendValues() {
    this.myOutput.emit(this.outputMessage);
  }
}
