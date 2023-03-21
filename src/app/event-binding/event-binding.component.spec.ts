import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { EventBindingComponent } from './event-binding.component';

describe('EventBindingComponent', () => {
  let component: EventBindingComponent;
  let fixture: ComponentFixture<EventBindingComponent>;
  let h1: HTMLElement;
  let deb: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;

    h1 = fixture.nativeElement.querySelector('h1');
  });

 
  it("button 1", () => {
 
    const element : HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button1');
    expect(component.label).toEqual("Dotnet");

    element.click();
    fixture.detectChanges();
    expect(component.label).toEqual("DotNet office");
    
  });

  it("button 2", () => {
 
    const element : HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button2');
    expect(component.label).toEqual("Dotnet");

    element.click();
    fixture.detectChanges();
    expect(component.label).toEqual("label value change on button2");
    
  });
  
  it("textbox 1", () => {
 
    const element : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#textbox1');
    expect(component.label).toEqual("Dotnet");

    element.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.label).toEqual("onChangeInput label value change");
    
  });

  it("textbox 2", () => {
 
    const element : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#textbox2');
    expect(component.label).toEqual("Dotnet");

    element.value = "Dotnet - updated"
    element.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.label).toEqual("Dotnet - updated");
    
  });
});
