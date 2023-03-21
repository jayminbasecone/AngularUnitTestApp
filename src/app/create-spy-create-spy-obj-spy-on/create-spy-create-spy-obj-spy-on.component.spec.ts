import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientSubscribeMethodService } from '../http-client-subscribe-method/http-client-subscribe-method.service';

import { CreateSpyCreateSpyObjSpyOnComponent } from './create-spy-create-spy-obj-spy-on.component';

describe('CreateSpyCreateSpyObjSpyOnComponent', () => {
  let component: CreateSpyCreateSpyObjSpyOnComponent;
  let fixture: ComponentFixture<CreateSpyCreateSpyObjSpyOnComponent>;
  let service: HttpClientSubscribeMethodService;
  let objCreateSpy : any;
  let objCreateObjSpy : any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSpyCreateSpyObjSpyOnComponent ],
      imports: [HttpClientModule],
      providers: [HttpClientSubscribeMethodService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CreateSpyCreateSpyObjSpyOnComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(HttpClientSubscribeMethodService);

    objCreateSpy = jasmine.createSpy("fetchdata");
    objCreateSpy("this is for createSpy unit test");

    objCreateObjSpy = jasmine.createSpyObj("fetchSpyObj",["add","substract"]);
    objCreateObjSpy.add();
    objCreateObjSpy.substract();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('unit test for spy method', () => {

    let spy = spyOn(service, 'getListOfData').and.returnValue(of([]));
   
    component.ngOnInit();
   fixture.detectChanges()
    expect(spy).toHaveBeenCalled();
  });

  it('unit test for create spy', () => {

    expect(objCreateSpy).toBeDefined();

    expect(objCreateSpy).toHaveBeenCalled();
    expect(objCreateSpy.calls.count()).toEqual(1);
  });
  
  it('unit test for createSpy obj', () => {

    expect(objCreateObjSpy).toBeDefined();

    expect(objCreateObjSpy.add).toHaveBeenCalled();
    expect(objCreateObjSpy.add.calls.count()).toEqual(1);

    expect(objCreateObjSpy.substract).toHaveBeenCalled();
    expect(objCreateObjSpy.substract.calls.count()).toEqual(1);
  });
});
