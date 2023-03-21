import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { InterpolationComponent } from './interpolation.component';

describe('InterpolationComponent', () => {
  let component: InterpolationComponent;
  let fixture: ComponentFixture<InterpolationComponent>;
  let h1: HTMLElement;
  let deb: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it("interpolation test", () => {
 
    const name : HTMLElement = fixture.debugElement.nativeElement.querySelector('#name');
    expect(name.innerHTML).toEqual(component.Name);

    component.Name = "name-updated";
    fixture.detectChanges();
    expect(name.innerHTML).toEqual(component.Name);
  });

  it("interpolation test for textbox", () => {
 
    const inputElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userName');
    expect(inputElement.type).toEqual(component.type);

    component.type = "text";
    fixture.detectChanges();
    expect(inputElement.type).toEqual(component.type);
  });
  it("test for text-box property", () => {
    const inputElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userName');
    expect(inputElement.readOnly).toBeFalsy();
  });

});
