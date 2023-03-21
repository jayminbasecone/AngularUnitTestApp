import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ConditionalRenderingNgSwitchComponent } from './conditional-rendering-ng-switch.component';

describe('ConditionalRenderingNgSwitchComponent', () => {
  let component: ConditionalRenderingNgSwitchComponent;
  let fixture: ComponentFixture<ConditionalRenderingNgSwitchComponent>;
  let h1: HTMLElement;
  let deb: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalRenderingNgSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalRenderingNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;

    h1 = fixture.nativeElement.querySelector('h1');
  });

  it("ngSwitch test case", () => {
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#div1');
   
    
    expect(element.childElementCount).toEqual(1);

    expect(element.children.length).toEqual(1);

    expect(element.children[0].innerHTML).toEqual("One is selected");
    
  });

  it("ngSwitch test case -2", () => {
    const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#div1');
   
    component.selectedNum = "Two";
    fixture.detectChanges();
    expect(element.childElementCount).toEqual(1);

    expect(element.children.length).toEqual(1);

    expect(element.children[0].innerHTML).toEqual("Two is selected");
    
  });
  
});
