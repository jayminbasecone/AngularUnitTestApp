import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';
import { InputOutputUseComponent } from '../input-output-use/input-output-use.component';

import { InputOutputComponent } from './input-output.component';

describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;
  let parentComponent: InputOutputUseComponent;
  let inputOutputUseComponentFixture: ComponentFixture<InputOutputUseComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputComponent,InputOutputUseComponent ],
      imports:[AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    inputOutputUseComponentFixture = TestBed.createComponent(InputOutputUseComponent);
    parentComponent = inputOutputUseComponentFixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Unit test case for input directive', async () => {
    parentComponent.myInputMessage = "input directive";
    inputOutputUseComponentFixture.detectChanges();
    fixture.whenStable().then(() => {
      let element = inputOutputUseComponentFixture.debugElement.nativeElement.querySelector('h3').innerText;
      expect(element).toEqual("child component - input directive");

    })
  });

  it('Unit test case for output directive', async () => {
    component.sendValues();
    inputOutputUseComponentFixture.detectChanges();
    inputOutputUseComponentFixture.whenStable().then(() => {
     component.myOutput.subscribe(g=>{
      expect(g).toEqual("I am output directive.");
     })
    })
    component.sendValues();
  });
});
