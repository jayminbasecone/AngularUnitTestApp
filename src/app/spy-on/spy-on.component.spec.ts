import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SpyOnComponent } from './spy-on.component';
import { SpyOnService } from './spy-on.service';

describe('SpyOnComponent', () => {
  let component: SpyOnComponent;
  let fixture: ComponentFixture<SpyOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpyOnComponent ],
      providers:[SpyOnService],
      imports:[HttpClientModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SpyOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('spy On Method', () => {
    spyOn(component, 'calculate');// mocking this function
    component.saveData();
    expect(component.calculate).toHaveBeenCalled();
  });

  it('spy On Method - 1', () => {
    spyOn(component, 'calculate').and.returnValues(10, 20);//pass new data from mock get result
    let result = component.studentResult();
    expect(result).toEqual("Fail");
  });

  it('spy On Method - 2', () => {
    let service = fixture.debugElement.injector.get(SpyOnService);
    spyOn(service, "SaveDetails").and.callFake(() => {// call fake api response return 
      return of({
        "statusCode": 200
      })
    });

    spyOn(component, "SaveDataIntoConsole").and.stub();// it not care about this call function
    component.saveData();
    expect(component.result).toEqual({
      "statusCode": 200
    })
  });
});
