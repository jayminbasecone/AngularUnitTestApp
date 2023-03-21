import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { HttpClientSubscribeMethodComponent } from './http-client-subscribe-method.component';
import { HttpClientSubscribeMethodService } from './http-client-subscribe-method.service';

describe('HttpClientSubscribeMethodComponent', () => {
  let component: HttpClientSubscribeMethodComponent;
  let fixture: ComponentFixture<HttpClientSubscribeMethodComponent>;
  let service: HttpClientSubscribeMethodService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpClientSubscribeMethodComponent ],
      imports: [HttpClientModule],
      providers: [HttpClientSubscribeMethodService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HttpClientSubscribeMethodComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(HttpClientSubscribeMethodService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('unit test for subscribe method', fakeAsync(() => {

    let spy = spyOn(service, 'getListOfData').and.returnValue(of([]));
    let subSpy = spyOn(service.getListOfData(), 'subscribe');
    component.ngOnInit();
    tick();
    expect(spy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));

  
  it('unit test for inside subscribe method', fakeAsync(() => {

    const testpost = [
      {id:1,userId:1,title:'title 1', body:'body1'},
      {id:2,userId:2,title:'title 2', body:'body2'},

    ];
    let spy = spyOn(service, 'getListOfData').and.returnValue(of(testpost));
    component.ngOnInit();
    tick();
    expect(component.postData).toBeDefined();
    expect(component.postData.length).toEqual(2);
  }));

});
