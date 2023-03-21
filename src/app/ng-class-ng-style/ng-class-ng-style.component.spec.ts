import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassNgStyleComponent } from './ng-class-ng-style.component';

describe('NgClassNgStyleComponent', () => {
  let component: NgClassNgStyleComponent;
  let fixture: ComponentFixture<NgClassNgStyleComponent>;
  let h1: HTMLElement;
  let deb: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgClassNgStyleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;
    h1 = fixture.nativeElement.querySelector('h1');
  });
  it("ngClass test case for paragraph", () => {

    const element = fixture.debugElement.nativeElement.querySelector('#header');
    expect(element.getAttribute('class')).toContain('font-red');


  });

  it("ngClass test case for h1", () => {

    const element = fixture.debugElement.nativeElement.querySelector('#header1');
    expect(element.getAttribute('class')).toContain('font-blue');

    component.num = 5;
    fixture.detectChanges();

    expect(element.getAttribute('class')).toContain('font-red');


  });

  it("ngStyle test case for paragraph  -2", () => {

    const element = fixture.debugElement.nativeElement.querySelector('#header2');
    expect(element.getAttribute('style')).toContain('color: black');


  });
});
