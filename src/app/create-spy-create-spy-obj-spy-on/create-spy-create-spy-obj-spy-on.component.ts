import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClientSubscribeMethodService } from '../http-client-subscribe-method/http-client-subscribe-method.service';

@Component({
  selector: 'app-create-spy-create-spy-obj-spy-on',
  templateUrl: './create-spy-create-spy-obj-spy-on.component.html',
  styleUrls: ['./create-spy-create-spy-obj-spy-on.component.scss']
})
export class CreateSpyCreateSpyObjSpyOnComponent implements OnInit {

  title = "The DotNet Office";

  private sub!: Subscription;
  postData!: any;
  constructor(  public service: HttpClientSubscribeMethodService) { }

  ngOnInit(): void {

    this.getData();
  }


  getData() {
    this.sub = this.service.getListOfData().subscribe((post) => {
      this.postData = post;
    })
  }




}
