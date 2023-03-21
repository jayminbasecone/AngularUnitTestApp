import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClientSubscribeMethodService } from './http-client-subscribe-method.service';

@Component({
  selector: 'app-http-client-subscribe-method',
  templateUrl: './http-client-subscribe-method.component.html',
  styleUrls: ['./http-client-subscribe-method.component.scss']
})
export class HttpClientSubscribeMethodComponent implements OnInit {
  title = "The Service and Subscribe test";

  private sub!: Subscription;
  postData!:any ;
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
