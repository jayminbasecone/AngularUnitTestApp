import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMethodPrivateVaribaleComponent } from './private-method-private-varibale.component';

describe('PrivateMethodPrivateVaribaleComponent', () => {
  let component: PrivateMethodPrivateVaribaleComponent;
  let fixture: ComponentFixture<PrivateMethodPrivateVaribaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateMethodPrivateVaribaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateMethodPrivateVaribaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("call private method", () => {
    component["ShowName"]();
    expect(component["Name"]).toEqual("DotNet Office")
  });

  it("call private method - 1", () => {
    component["calculate"](10, 20);
    expect(component.sum).toEqual(30);
  });

  it("SpyOn private method", () => {
    let SpyOn = spyOn<any>(component,"ShowName");
    component["ShowName"]();
    expect(SpyOn).toHaveBeenCalled();
  });

  it("SpyOn private method - 1", () => {
    let SpyOn = spyOn<any>(component,"calculate");
    component["calculate"](10, 20);
    expect(SpyOn).toHaveBeenCalled();
  });
});
