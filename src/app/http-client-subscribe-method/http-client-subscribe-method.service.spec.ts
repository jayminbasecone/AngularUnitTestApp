import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientSubscribeMethodService } from './http-client-subscribe-method.service';

describe('HttpClientSubscribeMethodService', () => {
  let service: HttpClientSubscribeMethodService;
  let httptestcontrol: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule, HttpClientTestingModule],
      providers: [HttpClientSubscribeMethodService],
    }).compileComponents();

    
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientSubscribeMethodService);
    httptestcontrol = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('httpclinet get method', () => {
    const testpost = [
      {id:1,userId:1,title:'title 1', body:'body1'},
      {id:2,userId:2,title:'title 2', body:'body2'},

    ];

    service.getListOfData().subscribe((posts:any)=>{
      expect(testpost).toBe(posts,'should check mocked data');
    });

    const req = httptestcontrol.expectOne(service.jsonUrl+'posts');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testpost);
    httptestcontrol.verify();
  });

  it('httpclinet post method', () => {
    const testpost = 
      {id:1,userId:1,title:'title 1', body:'body1'};
     
    service.PostListOfData(testpost).subscribe((posts)=>{
      expect(testpost).toBe(testpost);
    });

    const req = httptestcontrol.expectOne(service.jsonUrl+'posts');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testpost);
    httptestcontrol.verify();
  });
});
