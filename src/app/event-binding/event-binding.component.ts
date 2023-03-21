import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  label: string = "Dotnet";
  constructor() { }

  ngOnInit(): void {
  }

  button1Click() {
    this.label = "DotNet office";

  }

  button2Click() {
    this.label = "label value change on button2";

  }
  onChangeInput() {
    this.label = "onChangeInput label value change";

  }

  onChangeLabelInput(event: any) {
    this.label = event.target.value;
  }

}
