import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fake-async-async',
  templateUrl: './fake-async-async.component.html',
  styleUrls: ['./fake-async-async.component.scss']
})
export class FakeAsyncAsyncComponent implements OnInit {
  studentName:string=" "
  constructor() { }

  ngOnInit(): void {
  }


setName(){
  this.studentName = "DotNet office";
}
}
