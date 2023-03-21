import { Component, OnInit } from '@angular/core';
import { SpyOnService } from './spy-on.service';

@Component({
  selector: 'app-spy-on',
  templateUrl: './spy-on.component.html',
  styleUrls: ['./spy-on.component.scss']
})
export class SpyOnComponent implements OnInit {

  sum = 0;
  result: any;
  constructor(public spyOnService: SpyOnService) { }

  ngOnInit(): void {
  }

  calculate(num1: number, num2: number) {
    this.sum = num1 + num2;
    return this.sum;
  }

  saveData() {
    let info = {
      sumVal: this.calculate(5, 5),
      name: "Dot Net Office"
    };
    this.SaveDataIntoConsole(info);
    this.spyOnService.SaveDetails(info).subscribe(response => {
      this.result = response;
    })
  };

  studentResult(){
    if(this.calculate(10,20) >= 40)
    {
      return "Pass";
    }
    else
    {
      return "Fail";
    }
  }

  SaveDataIntoConsole(info: any) {
    console.log(info);
  }

}
