import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-use',
  templateUrl: './pipe-use.component.html',
  styleUrls: ['./pipe-use.component.scss']
})
export class PipeUseComponent implements OnInit {
  size = 2000000;
  title = "the dotNet Office";
  constructor() { }

  ngOnInit(): void {
  }

}
