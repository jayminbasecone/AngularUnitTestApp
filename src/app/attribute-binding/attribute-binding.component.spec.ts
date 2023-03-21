import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeBindingComponent } from './attribute-binding.component';

describe('AttributeBindingComponent', () => {
  let component: AttributeBindingComponent;
  let fixture: ComponentFixture<AttributeBindingComponent>;
  let h1: HTMLElement;
  let deb: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;

    h1 = fixture.nativeElement.querySelector('h1');
  });
  it("table colspan attribute test case", () => {
 
    const element  = fixture.debugElement.nativeElement.querySelector('#colId');
    expect(element.getAttribute('colspan')).toEqual(component.ColumnSpan.toString());
    
  });

  it("button  attribute test case", () => {
    const element  = fixture.debugElement.nativeElement.querySelector('#buttonid');
    expect(element.getAttribute('aria-label')).toEqual(component.arialable.toString());
  });

});
